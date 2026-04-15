param(
  [string]$TaskName = "RalskiesYouTubeSync",
  [string]$Time = "00:00",
  [string]$Branch = "main"
)

$ErrorActionPreference = "Stop"

$repoRoot = Split-Path -Parent $PSScriptRoot
$publishScript = Join-Path $PSScriptRoot "publish_youtube_update.ps1"

if (-not $env:YOUTUBE_API_KEY) {
  throw "YOUTUBE_API_KEY is not set in your user environment. Set it before registering the scheduled task."
}

if (-not $env:YOUTUBE_CHANNEL_ID) {
  throw "YOUTUBE_CHANNEL_ID is not set in your user environment. Set it before registering the scheduled task."
}

$taskAction = New-ScheduledTaskAction `
  -Execute "powershell.exe" `
  -Argument "-ExecutionPolicy Bypass -File `"$publishScript`" -Branch `"$Branch`""

$taskTrigger = New-ScheduledTaskTrigger -Daily -At $Time
$taskSettings = New-ScheduledTaskSettingsSet -StartWhenAvailable

Register-ScheduledTask `
  -TaskName $TaskName `
  -Action $taskAction `
  -Trigger $taskTrigger `
  -Settings $taskSettings `
  -Description "Updates public/data/content.json from YouTube and pushes changes to GitHub." `
  -Force | Out-Null

Write-Host "Registered scheduled task '$TaskName' for daily execution at $Time."
