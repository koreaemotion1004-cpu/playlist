$out = 'C:\tmp\vol03-260611'
$finalOut = 'C:\Users\user\Desktop\render_260611'

New-Item -ItemType Directory -Force -Path $out | Out-Null
New-Item -ItemType Directory -Force -Path $finalOut | Out-Null

$tracks = @(
    @{ id='260611-01-Highlight-Reel';   name='01 - Highlight Reel' },
    @{ id='260611-02-Sunday-Night';     name='02 - Sunday Night' },
    @{ id='260611-03-Numb';             name='03 - Numb' },
    @{ id='260611-04-Half-Open-Window'; name='04 - Half Open Window' },
    @{ id='260611-05-Too-Good';         name='05 - Too Good' },
    @{ id='260611-06-Last-Streetlight'; name='06 - Last Streetlight' },
    @{ id='260611-07-Read-At-1142';     name='07 - Read At 1142' },
    @{ id='260611-08-Cold-Coffee';      name='08 - Cold Coffee' },
    @{ id='260611-09-Still-Guessing';   name='09 - Still Guessing' },
    @{ id='260611-10-Folding-The-Day';  name='10 - Folding The Day' }
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

$mp3Src = "C:\Users\user\Desktop\플리\사용한 곡\playlist-video\public\260611"
Get-ChildItem "$mp3Src\*.mp3" | ForEach-Object {
    Copy-Item $_.FullName "$finalOut\$($_.Name)" -Force
}

Write-Host 'All done!'
Start-Process explorer.exe $finalOut
