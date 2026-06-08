$out = 'C:\tmp\jazztronica-vol01'
$finalOut = 'C:\Users\user\Desktop\렌더_jazztronica-vol01'

New-Item -ItemType Directory -Force -Path $out | Out-Null
New-Item -ItemType Directory -Force -Path $finalOut | Out-Null

$tracks = @(
    @{ id='jazztronica-vol01-01-Morning-Feather';       name='01 - Morning Feather' },
    @{ id='jazztronica-vol01-02-Asahi';                 name='02 - Asahi' },
    @{ id='jazztronica-vol01-03-Tide-Turning';          name='03 - Tide Turning' },
    @{ id='jazztronica-vol01-04-Drift-Along';           name='04 - Drift Along' },
    @{ id='jazztronica-vol01-05-Golden-Avenue';         name='05 - Golden Avenue' },
    @{ id='jazztronica-vol01-06-Joyful-Skyline';        name='06 - Joyful Skyline' },
    @{ id='jazztronica-vol01-07-Dusk-Couleur';          name='07 - Dusk Couleur' },
    @{ id='jazztronica-vol01-08-Sweet-Sunset-Revue';    name='08 - Sweet Sunset Revue' },
    @{ id='jazztronica-vol01-09-Counting-Streetlights'; name='09 - Counting Streetlights' },
    @{ id='jazztronica-vol01-10-Last-Feather';          name='10 - Last Feather' }
)

foreach ($t in $tracks) {
    Write-Host "Rendering $($t.name)..."
    npx remotion render src/index.ts $t.id "$out\$($t.name).webm" --codec=vp8 --concurrency=8 --muted
    Write-Host "Done: $($t.name)"
}

Write-Host 'Moving files...'
Get-ChildItem "$out\*.webm" | ForEach-Object {
    Move-Item $_.FullName "$finalOut\$($_.Name)" -Force
}

# MP3도 함께 복사
$mp3Src = "C:\Users\user\Desktop\플리\사용한 곡\playlist-video\public\jazztronica-vol01"
Get-ChildItem "$mp3Src\*.mp3" | ForEach-Object {
    Copy-Item $_.FullName "$finalOut\$($_.Name)" -Force
}

Write-Host 'All done!'
Start-Process explorer.exe $finalOut
