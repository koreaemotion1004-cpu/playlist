$out = 'C:\tmp\lofi-rb-vol02'
$finalOut = 'C:\Users\user\Desktop\렌더_260605'

New-Item -ItemType Directory -Force -Path $out | Out-Null
New-Item -ItemType Directory -Force -Path $finalOut | Out-Null

$tracks = @(
    @{ id='260605-01-Fine-Is-Pulling-Overtime'; name='01 - Fine Is Pulling Overtime' },
    @{ id='260605-02-3AM';                       name='02 - 3AM' },
    @{ id='260605-03-Missing-You-In-The-Room';   name='03 - Missing You In The Room' },
    @{ id='260605-04-First-Cold-Snap';           name='04 - First Cold Snap' },
    @{ id='260605-05-Wrote-And-Deleted';         name='05 - Wrote And Deleted' },
    @{ id='260605-06-Vacancy';                   name='06 - Vacancy' },
    @{ id='260605-07-You-Got-Up-First';          name='07 - You Got Up First' },
    @{ id='260605-08-Cloudy-No-Rain';            name='08 - Cloudy No Rain' },
    @{ id='260605-09-Now-I-See-The-Start';       name='09 - Now I See The Start' },
    @{ id='260605-10-Everything-Fades-Slowly';   name='10 - Everything Fades Slowly' }
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
$mp3Src = "C:\Users\user\Desktop\플리\사용한 곡\playlist-video\public\260605"
Get-ChildItem "$mp3Src\*.mp3" | ForEach-Object {
    Copy-Item $_.FullName "$finalOut\$($_.Name)" -Force
}

Write-Host 'All done!'
Start-Process explorer.exe $finalOut
