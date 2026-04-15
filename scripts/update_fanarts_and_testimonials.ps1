$ErrorActionPreference = "Stop"

function Get-ProjectPath([string]$RelativePath) {
  return Join-Path $PSScriptRoot "..\$RelativePath"
}

function Convert-FileNameToTitle([string]$FileName) {
  $baseName = [System.IO.Path]::GetFileNameWithoutExtension($FileName)
  $cleaned = $baseName -replace "_\d{8,}$", ""
  $cleaned = $cleaned -replace "_", " "
  $words = $cleaned -split "\s+" | Where-Object { $_ }
  if (-not $words.Count) {
    return "Untitled Fan Art"
  }

  return (($words | ForEach-Object {
    if ($_.Length -gt 1) {
      $_.Substring(0,1).ToUpper() + $_.Substring(1).ToLower()
    } else {
      $_.ToUpper()
    }
  }) -join " ")
}

function Read-JsonFile([string]$Path) {
  if (-not (Test-Path $Path)) {
    throw "Missing file: $Path"
  }

  return Get-Content -LiteralPath $Path -Raw | ConvertFrom-Json
}

function ConvertTo-NormalizedArray([object]$Value) {
  if ($null -eq $Value) {
    return @()
  }

  if ($Value -is [System.Array]) {
    return @($Value)
  }

  return ,$Value
}

$contentPath = Resolve-Path (Get-ProjectPath "public\data\content.json")
$fanartPath = Resolve-Path (Get-ProjectPath "public\data\fanart.json")
$testimonialsPath = Resolve-Path (Get-ProjectPath "public\data\testimonials.json")
$fanartDir = Resolve-Path (Get-ProjectPath "public\fanart")
$testimonialCsv = Get-ChildItem -LiteralPath (Resolve-Path (Get-ProjectPath ".")) -File |
  Where-Object { $_.Extension -eq ".csv" -and $_.Name -like "Ralskies Testimonial*" } |
  Sort-Object LastWriteTime -Descending |
  Select-Object -First 1

$content = Read-JsonFile $contentPath
$fanartEntries = ConvertTo-NormalizedArray (Read-JsonFile $fanartPath)
$testimonials = if ($testimonialCsv) {
  @(Import-Csv -LiteralPath $testimonialCsv.FullName)
} else {
  ConvertTo-NormalizedArray (Read-JsonFile $testimonialsPath)
}
$fanartFiles = @(Get-ChildItem -LiteralPath $fanartDir -File | Where-Object {
  $_.Extension -in @(".png", ".jpg", ".jpeg", ".webp")
} | Sort-Object Name)

$validTestimonials = @()
foreach ($entry in $testimonials) {
  $quote = if ($entry.PSObject.Properties["quote"]) {
    [string]$entry.quote
  } elseif ($entry.PSObject.Properties["This is a message regarding my experience collaborating with Ralskies. "]) {
    [string]$entry."This is a message regarding my experience collaborating with Ralskies. "
  } else {
    ""
  }

  $name = if ($entry.PSObject.Properties["name"]) {
    [string]$entry.name
  } elseif ($entry.PSObject.Properties["Artist Name "]) {
    [string]$entry."Artist Name "
  } else {
    ""
  }

  $role = if ($entry.PSObject.Properties["role"]) {
    [string]$entry.role
  } elseif ($entry.PSObject.Properties["Channel Link"] -and $entry."Channel Link") {
    "Creator"
  } else {
    ""
  }

  $link = if ($entry.PSObject.Properties["href"]) {
    [string]$entry.href
  } elseif ($entry.PSObject.Properties["Channel Link"]) {
    [string]$entry."Channel Link"
  } else {
    ""
  }

  $highlight = if ($entry.PSObject.Properties["highlight"]) {
    [bool]$entry.highlight
  } else {
    $false
  }

  if (-not $quote -or -not $name) {
    Write-Warning "Skipping testimonial missing quote or name."
    continue
  }

  $validTestimonials += [pscustomobject]@{
    quote = $quote.Trim()
    name = $name.Trim()
    role = $role.Trim()
    href = $link.Trim()
    highlight = $highlight
  }
}

if (-not $validTestimonials.Count) {
  throw "No valid testimonials found in public/data/testimonials.json"
}

$highlightCount = @($validTestimonials | Where-Object { $_.highlight }).Count
if ($highlightCount -eq 0) {
  $validTestimonials[0].highlight = $true
} elseif ($highlightCount -gt 1) {
  $first = $true
  foreach ($entry in $validTestimonials) {
    if ($entry.highlight -and $first) {
      $first = $false
      continue
    }

    $entry.highlight = $false
  }
}

$fanartByImage = @{}
foreach ($entry in $fanartEntries) {
  if ($entry.imageUrl) {
    $fanartByImage[[string]$entry.imageUrl] = $entry
  }
}

$validFanart = @()
foreach ($file in $fanartFiles) {
  $publicPath = "/fanart/$($file.Name)"
  $existing = $fanartByImage[$publicPath]
  $title = if ($existing -and $existing.title) { [string]$existing.title } else { Convert-FileNameToTitle $file.Name }
  $artistName = if ($existing -and $existing.artistName) { [string]$existing.artistName } else { "Community Artist" }
  $description = if ($existing -and $existing.description) { [string]$existing.description } else { "Update this description when you want a more specific caption on the site." }
  $href = if ($existing -and $existing.href) { [string]$existing.href } else { $publicPath }
  $ctaLabel = if ($existing -and $existing.ctaLabel) { [string]$existing.ctaLabel } else { "Open Art" }
  $thumbnailAlt = if ($existing -and $existing.thumbnailAlt) { [string]$existing.thumbnailAlt } else { "Fan art for $title" }

  $validFanart += [pscustomobject]@{
    title = $title
    artistName = $artistName
    description = $description
    imageUrl = $publicPath
    href = $href
    ctaLabel = $ctaLabel
    thumbnailAlt = $thumbnailAlt
  }
}

if (-not $validFanart.Count) {
  Write-Warning "No fan art files found in public/fanart"
}

$content.testimonials = $validTestimonials
$content.fanArtGallery = $validFanart

$jsonDepth = 100
ConvertTo-Json -InputObject ([object[]]$validFanart) -Depth $jsonDepth | Set-Content -LiteralPath $fanartPath -Encoding UTF8
ConvertTo-Json -InputObject ([object[]]$validTestimonials) -Depth $jsonDepth | Set-Content -LiteralPath $testimonialsPath -Encoding UTF8
ConvertTo-Json -InputObject $content -Depth $jsonDepth | Set-Content -LiteralPath $contentPath -Encoding UTF8

Write-Host "Updated fan art and testimonials."
Write-Host "Fan art files checked: $($fanartFiles.Count)"
Write-Host "Fan art entries written: $($validFanart.Count)"
Write-Host "Testimonials written: $($validTestimonials.Count)"
