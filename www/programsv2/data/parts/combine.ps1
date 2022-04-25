$partsroot = "C:\xampp\htdocs\programsv2\data\parts\"
# Write-Host $parts
$programsroot = "C:\xampp\htdocs\programs"
$programs = Get-ChildItem -Path $programsroot -Directory
# Write-Host $programs

foreach ($program in $programs) {
    $folderpath = Join-Path $programsroot $program
    $jsonfile = $folderpath + "\" + $program + "_progamdata.json"
   Copy-Item -Path $jsonfile -Destination "C:\xampp\htdocs\programsv2\data\"
}