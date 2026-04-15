param(
  [string]$ApiKey = $env:YOUTUBE_API_KEY,
  [string]$ChannelId = $env:YOUTUBE_CHANNEL_ID,
  [string]$Branch = "main"
)

$ErrorActionPreference = "Stop"

$repoRoot = Split-Path -Parent $PSScriptRoot
Set-Location $repoRoot

powershell -ExecutionPolicy Bypass -File ".\scripts\update_youtube.ps1" -ApiKey $ApiKey -ChannelId $ChannelId

git add public/data/content.json

$hasChanges = git diff --cached --name-only
if (-not $hasChanges) {
  Write-Host "No YouTube content changes detected."
  exit 0
}

git commit -m "chore: sync latest YouTube release"
git push origin $Branch

Write-Host "Published updated YouTube content to origin/$Branch."
