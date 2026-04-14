import json
import os
from datetime import datetime, timezone
from pathlib import Path
from urllib.error import HTTPError, URLError
from urllib.parse import urlencode
from urllib.request import urlopen


ROOT = Path(__file__).resolve().parent.parent
CONTENT_FILE = ROOT / "data" / "content.json"
YOUTUBE_API_BASE = "https://www.googleapis.com/youtube/v3/search"


def require_env(name: str) -> str:
  value = os.getenv(name, "").strip()
  if not value:
    raise RuntimeError(f"Missing required environment variable: {name}")
  return value


def fetch_latest_video(api_key: str, channel_id: str) -> dict:
  params = {
    "key": api_key,
    "channelId": channel_id,
    "part": "snippet",
    "order": "date",
    "maxResults": 1,
    "type": "video"
  }
  url = f"{YOUTUBE_API_BASE}?{urlencode(params)}"

  try:
    with urlopen(url) as response:
      payload = json.load(response)
  except HTTPError as exc:
    raise RuntimeError(f"YouTube API request failed with HTTP {exc.code}") from exc
  except URLError as exc:
    raise RuntimeError(f"YouTube API request failed: {exc.reason}") from exc

  items = payload.get("items", [])
  if not items:
    raise RuntimeError("No YouTube videos were returned for this channel.")

  item = items[0]
  snippet = item.get("snippet", {})
  video_id = item.get("id", {}).get("videoId")
  if not video_id:
    raise RuntimeError("YouTube API response did not include a videoId.")

  return {
    "title": snippet.get("title", "Untitled upload"),
    "description": snippet.get("description", "").strip() or "Latest upload synced from YouTube.",
    "videoId": video_id,
    "videoUrl": f"https://www.youtube.com/watch?v={video_id}",
    "embedUrl": f"https://www.youtube.com/embed/{video_id}",
    "thumbnailUrl": snippet.get("thumbnails", {}).get("high", {}).get("url", ""),
    "publishedAt": snippet.get("publishedAt")
  }


def update_content_file(latest_video: dict, channel_id: str) -> None:
  existing = {}
  if CONTENT_FILE.exists():
    existing = json.loads(CONTENT_FILE.read_text(encoding="utf-8"))

  youtube_channel = existing.get("youtubeChannel", {})
  youtube_channel["channelId"] = channel_id
  youtube_channel["channelUrl"] = f"https://www.youtube.com/channel/{channel_id}"
  youtube_channel["lastSyncedAt"] = datetime.now(timezone.utc).isoformat()

  if not youtube_channel.get("name"):
    youtube_channel["name"] = "YouTube Channel"

  existing["latestYoutube"] = latest_video
  existing["youtubeChannel"] = youtube_channel

  CONTENT_FILE.write_text(json.dumps(existing, indent=2), encoding="utf-8")


def main() -> None:
  api_key = require_env("YOUTUBE_API_KEY")
  channel_id = require_env("YOUTUBE_CHANNEL_ID")
  latest_video = fetch_latest_video(api_key, channel_id)
  update_content_file(latest_video, channel_id)
  print(f"Updated {CONTENT_FILE} with latest YouTube video: {latest_video['title']}")


if __name__ == "__main__":
  main()
