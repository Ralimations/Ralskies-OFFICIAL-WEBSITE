param(
  [string]$ApiKey = $env:YOUTUBE_API_KEY,
  [string]$ChannelId = $env:YOUTUBE_CHANNEL_ID
)

$ErrorActionPreference = "Stop"

if (-not $ApiKey) {
  throw "Missing YouTube API key. Pass -ApiKey or set the YOUTUBE_API_KEY environment variable."
}

if (-not $ChannelId) {
  throw "Missing YouTube channel ID. Pass -ChannelId or set the YOUTUBE_CHANNEL_ID environment variable."
}

$pythonCandidates = @(
  "D:\PROGRAMMING CAREER\Programming Projects\Project_OSCAR\tools\python313\python.exe",
  "py"
)

$pythonCommand = $null
foreach ($candidate in $pythonCandidates) {
  if ($candidate -eq "py") {
    if (Get-Command py -ErrorAction SilentlyContinue) {
      $pythonCommand = @("py", "-3")
      break
    }
    continue
  }

  if (Test-Path $candidate) {
    $pythonCommand = @($candidate)
    break
  }
}

if (-not $pythonCommand) {
  throw "Could not find a usable Python interpreter."
}

$env:YOUTUBE_API_KEY = $ApiKey
$env:YOUTUBE_CHANNEL_ID = $ChannelId

Write-Host "Updating data/content.json from YouTube..."
if ($pythonCommand.Length -gt 1) {
  & $pythonCommand[0] @($pythonCommand[1..($pythonCommand.Length - 1)]) "scripts/fetch_youtube_latest.py"
} else {
  & $pythonCommand[0] "scripts/fetch_youtube_latest.py"
}

if ($LASTEXITCODE -ne 0) {
  throw "YouTube sync script failed with exit code $LASTEXITCODE."
}

Write-Host "Done."
