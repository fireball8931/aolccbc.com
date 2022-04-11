$templatedir="template_files_with_code"
$folders=Get-ChildItem -Directory -Exclude $templatedir
$srcfiles=$templatedir + '\*.html'

foreach ($folder in $folders) {
    if(!($folder -eq $templatedir)) {
        Copy-Item -Path $srcfiles -Destination $folder -Include *.html
    }
}