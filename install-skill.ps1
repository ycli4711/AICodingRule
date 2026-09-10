[CmdletBinding(SupportsShouldProcess)]
param(
    [string]$CodexDirectory = $(if ($env:CODEX_HOME) { $env:CODEX_HOME } else { Join-Path $env:USERPROFILE '.codex' })
)

$ErrorActionPreference = 'Stop'
$source = Join-Path $PSScriptRoot 'skills/controlled-development'
$destination = Join-Path ([IO.Path]::GetFullPath($CodexDirectory)) 'skills/controlled-development'
if (-not (Test-Path -LiteralPath (Join-Path $source 'SKILL.md') -PathType Leaf)) {
    throw 'Missing source SKILL.md.'
}

# Refuse linked destinations so installation does not write through to another repository.
for ($probe = $destination; $probe; $probe = Split-Path -Parent $probe) {
    if (Test-Path -LiteralPath $probe) {
        if ((Get-Item -LiteralPath $probe -Force).Attributes -band [IO.FileAttributes]::ReparsePoint) {
            throw "Linked destination is not supported: $probe"
        }
    }
}

if (Test-Path -LiteralPath $destination -PathType Container) {
    $linked = Get-ChildItem -LiteralPath $destination -Recurse -Force |
        Where-Object { $_.Attributes -band [IO.FileAttributes]::ReparsePoint } |
        Select-Object -First 1
    if ($linked) { throw "Linked skill content is not supported: $($linked.FullName)" }
}
$source_files = @(Get-ChildItem -LiteralPath $source -Recurse -File)
$same = Test-Path -LiteralPath $destination -PathType Container
foreach ($file in $source_files) {
    $relative = $file.FullName.Substring($source.Length).TrimStart([char[]]'\/')
    $target_file = Join-Path $destination $relative
    if (-not (Test-Path -LiteralPath $target_file -PathType Leaf)) {
        $same = $false
    } elseif ((Get-FileHash -LiteralPath $file.FullName).Hash -ne (Get-FileHash -LiteralPath $target_file).Hash) {
        $same = $false
    }
}
if ($same) {
    Write-Output "Already up to date: $destination"
    return
}
if (-not $PSCmdlet.ShouldProcess($destination, 'Back up existing skill and install repository version')) { return }

if (Test-Path -LiteralPath $destination) {
    $backup_root = Join-Path $CodexDirectory 'skill-backups'
    $backup = Join-Path $backup_root ('controlled-development-' + (Get-Date -Format 'yyyyMMdd-HHmmss-fff') + '-' + [guid]::NewGuid().ToString('N').Substring(0, 8))
    New-Item -ItemType Directory -Path $backup_root -Force | Out-Null
    Copy-Item -LiteralPath $destination -Destination $backup -Recurse
    Write-Output "Backup: $backup"
}
New-Item -ItemType Directory -Path $destination -Force | Out-Null
foreach ($file in $source_files) {
    $relative = $file.FullName.Substring($source.Length).TrimStart([char[]]'\/')
    $target_file = Join-Path $destination $relative
    New-Item -ItemType Directory -Path (Split-Path -Parent $target_file) -Force | Out-Null
    Copy-Item -LiteralPath $file.FullName -Destination $target_file -Force
    if ((Get-FileHash -LiteralPath $file.FullName).Hash -ne (Get-FileHash -LiteralPath $target_file).Hash) {
        throw "Installed file verification failed: $relative"
    }
}
Write-Output "Installed and hash-verified: $destination"
