$out = 'C:\tmp\lofi-rb-vol01'
$finalOut = 'C:\Users\user\Desktop\플리\사용한 곡\playlist-video\260602\renders'

New-Item -ItemType Directory -Force -Path $out | Out-Null
New-Item -ItemType Directory -Force -Path $finalOut | Out-Null

$tracks = @(
    @{ id='260602-01-Wasting-My-20s';     name='01 - Wasting My 20s' },
    @{ id='260602-02-Still-Water';        name='02 - Still Water' },
    @{ id='260602-03-Aint-Mine';          name='03 - Aint Mine' },
    @{ id='260602-04-Amber-Hour';         name='04 - Amber Hour' },
    @{ id='260602-05-Love-Me-On-Purpose'; name='05 - Love Me On Purpose' },
    @{ id='260602-06-Low-Light';          name='06 - Low Light' },
    @{ id='260602-07-Talking-Reckless';   name='07 - Talking Reckless' },
    @{ id='260602-08-Soft-Static';        name='08 - Soft Static' },
    @{ id='260602-09-You-Lost-Me-Slow';   name='09 - You Lost Me Slow' },
    @{ id='260602-10-Heavy-Peace';        name='10 - Heavy Peace' }
)

foreach ($t in $tracks) {
    Write-Host "Rendering $($t.name)..."
    npx remotion render src/index.ts $t.id "$out\$($t.name).webm" --codec=vp8 --concurrency=8 --muted
    Write-Host "Done: $($t.name)"
}

Write-Host 'Moving files to final destination...'
Get-ChildItem "$out\*.webm" | ForEach-Object {
    Move-Item $_.FullName "$finalOut\$($_.Name)" -Force
}
Write-Host 'All done!'
Start-Process explorer.exe $finalOut
