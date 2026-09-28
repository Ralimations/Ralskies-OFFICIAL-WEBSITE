param(
  [string]$CommitMessage = "",
  [switch]$SkipBuild
)

$ErrorActionPreference = "Stop"

function Get-ProjectRoot {
  return (Resolve-Path (Join-Path $PSScriptRoot "..")).Path
}

function Run-Step([string]$Label, [scriptblock]$Action) {
  Write-Host "==> $Label"
  & $Action
}

$projectRoot = Get-ProjectRoot
Set-Location -LiteralPath $projectRoot

Run-Step "Syncing fan art and testimonials" {
  & powershell -ExecutionPolicy Bypass -File ".\scripts\update_fanarts_and_testimonials.ps1"
  if ($LASTEXITCODE -ne 0) {
    throw "Content sync failed."
  }
}

if (-not $SkipBuild) {
  Run-Step "Building site" {
    & npm run build
    if ($LASTEXITCODE -ne 0) {
      throw "Build failed."
    }
  }
}

Run-Step "Staging content updates" {
  & git add -- "public/data/content.json" "public/data/fanart.json" "public/data/testimonials.json" "public/fanart" "public/designs/thumbnails"
  if ($LASTEXITCODE -ne 0) {
    throw "git add failed."
  }
}

$stagedFiles = @(
  (& git diff --cached --name-only)
  | Where-Object { $_ }
)

if (-not $stagedFiles.Count) {
  Write-Host "No staged content changes to commit."
  exit 0
}

if (-not $CommitMessage.Trim()) {
  $timestamp = Get-Date -Format "yyyy-MM-dd HH:mm"
  $CommitMessage = "Update fanart/testimonials ($timestamp)"
}

Run-Step "Creating commit" {
  & git commit -m $CommitMessage
  if ($LASTEXITCODE -ne 0) {
    throw "git commit failed."
  }
}

Run-Step "Pushing to remote" {
  & git push
  if ($LASTEXITCODE -ne 0) {
    throw "git push failed."
  }
}

Write-Host "Pushed content update successfully."
