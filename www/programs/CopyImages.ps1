$webpfiles = Get-ChildItem program.webp -Recurse
$images = "C:\Users\mike.ACADEMY\OneDrive - Academy of Learning\Desktop\programs\images\"
foreach ($file in $webpfiles) {

    
$newname = $images + (Resolve-Path -Path $file -Relative).Substring(2).Replace("\","_").Replace("program","full_size")
#Write-Host $newname.Substring(2).Replace("\","_").Replace("program","full_size")
Copy-Item -Path $file -Destination $newname
}