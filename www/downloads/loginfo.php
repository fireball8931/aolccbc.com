<?php
$myfile = fopen("newfile.txt", "a") or die("Unable to open file!");
$txt = $_POST["hi"];
fwrite($myfile, $txt);
$txt = "Jane Doe\n";
fwrite($myfile, $txt);
fclose($myfile);
?>