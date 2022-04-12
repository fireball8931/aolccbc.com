$programfolders = Get-ChildItem -Directory
$maindir = Get-Location
foreach ($folder in $programfolders) {
    Write-Host $folder

Set-Location $folder.FullName
    $programname = (Get-Content -Path progtitle.html -Raw).value
    $admitreq = Get-Content -Path admitreq.html
    $programhighlights = (Get-Content -Path programhighlights.html).Replace("</","<\/").Replace("`r`n","")
    Write-Host $programhighlights
    $careeropp = (Get-Content -Path careeropp.html).Replace("</","<\/").Replace("`r`n","")
    $corecourses = (Get-Content -Path corecourses.html).Replace("</","<\/").Replace("`r`n","")
    $programtype = Get-Content -Path programtype.html
    $salarystart = Get-Content -Path salarystart.html
    $salaryend = Get-Content -Path salaryend.html
    $programhours = Get-Content -Path programhours.html
    $programduration = Get-Content -Path programduration.html
    $domestic_fees_tuition = Get-Content -Path dtuition.html
    $domestic_fees_application = Get-Content -Path dapp.html
    $domestic_fees_assessment = Get-Content -Path dassess.html
    $domestic_fees_other = Get-Content -Path dother.html
    $syllabuslink = (Get-ChildItem *.pdf).Name
    
$MyJsonHashTable = @"
{
    "programname": $programname
    "admitreq": $admitreq
    "programhighlights": $programhighlights
    "careeropp": $careeropp
    "corecourses": $corecourses
    "programtype": $programtype
    "salarystart": $salarystart
    "salaryend": $salaryend
    "programhours": $programhours
    "programduration": $programduration
    "domestic_fees": @{
        "tuition": $domestic_fees_tuition
        "application": $domestic_fees_application
        "assessment": $domestic_fees_assessment
        "other": $domestic_fees_other
    }
    "syllabuslink": $syllabuslink
    "prog_video": ""
}
"@

$MyJsonVariable = $MyJsonHashTable | ConvertTo-Json -Depth 1

$err = $null
$MyJsonObject = [Microsoft.PowerShell.Commands.JsonObject]::ConvertFromJson($MyJsonVariable, [ref]$err)
Add-Content  $MyJsonVariable -Path programdata.json
}
Set-Location $maindir