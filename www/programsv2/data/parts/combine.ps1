$partsroot = "C:\xampp\htdocs\programsv2\data\parts\"
# Write-Host $parts
$programsroot = "C:\xampp\htdocs\programs"
$programs = Get-ChildItem -Path $programsroot -Directory
# Write-Host $programs

foreach ($program in $programs) {
    $folderpath = Join-Path $programsroot $program
    $jsonfile = $folderpath + "\" + $program + "_progamdata.json"
    Add-Content -Value (Get-Content "$partsroot\a.json" -Raw) -Path $jsonfile
    Add-Content -Value (Get-Content "$folderpath\admitreq.html" -Raw) -Path $jsonfile
    Add-Content -Value (Get-Content "$partsroot\b.json" -Raw) -Path $jsonfile
    Add-Content -Value (Get-Content "$folderpath\programhighlights.html" -Raw) -Path $jsonfile
    Add-Content -Value (Get-Content "$partsroot\c.json" -Raw) -Path $jsonfile
    Add-Content -Value (Get-Content "$folderpath\careeropp.html" -Raw) -Path $jsonfile
    Add-Content -Value (Get-Content "$partsroot\e.json" -Raw) -Path $jsonfile
    Add-Content -Value (Get-Content "$folderpath\corecourses.html" -Raw) -Path $jsonfile
    Add-Content -Value (Get-Content "$partsroot\f.json" -Raw) -Path $jsonfile
    Add-Content -Value (Get-Content "$folderpath\salarystart.html" -Raw) -Path $jsonfile
    Add-Content -Value (Get-Content "$partsroot\g.json" -Raw) -Path $jsonfile
    Add-Content -Value (Get-Content "$folderpath\salaryend.html" -Raw) -Path $jsonfile
    Add-Content -Value (Get-Content "$partsroot\h.json" -Raw) -Path $jsonfile
}