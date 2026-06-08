$out = 'C:\tmp\jazztronica-260608'
$finalOut = 'C:\Users\user\Desktop\render_260608'

New-Item -ItemType Directory -Force -Path $out | Out-Null
New-Item -ItemType Directory -Force -Path $finalOut | Out-Null

$tracks = @(
    @{ id='260608-01-Paper-Boats';         name='01 - Paper Boats' },
    @{ id='260608-02-Letter-In-Blue';      name='02 - Letter In Blue' },
    @{ id='260608-03-Morning-Tide';        name='03 - Morning Tide' },
    @{ id='260608-04-Sun-Drift';           name='04 - Sun Drift' },
    @{ id='260608-05-First-Light-Rising';  name='05 - First Light Rising' },
    @{ id='260608-06-Skyline-Bloom';       name='06 - Skyline Bloom' },
    @{ id='260608-07-Golden-Descent';      name='07 - Golden Descent' },
    @{ id='260608-08-Evening-Haze';        name='08 - Evening Haze' },
    @{ id='260608-09-Quiet-Compass';       name='09 - Quiet Compass' },
    @{ id='260608-10-Last-Page';           name='10 - Last Page' }
)

foreach ($t in $tracks) {
    Write-Host "Rendering $($t.name)..."
    npx remotion render src/index.ts $t.id "$out\$($t.name).webm" --codec=vp8 --concurrency=8 --muted
    Write-Host "Done: $($t.name)"
}

Write-Host 'Moving WebM files...'
Get-ChildItem "$out\*.webm" | ForEach-Object {
    Move-Item $_.FullName "$finalOut\$($_.Name)" -Force
}

# MP3도 함께 복사
$mp3Src = "C:\Users\user\Desktop\플리\사용한 곡\playlist-video\public\260608"
Get-ChildItem "$mp3Src\*.mp3" | ForEach-Object {
    Copy-Item $_.FullName "$finalOut\$($_.Name)" -Force
}

Write-Host 'All done!'
Start-Process explorer.exe $finalOut
