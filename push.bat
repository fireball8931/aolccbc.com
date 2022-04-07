del www/programs/images/compiled.html
copy www/programs/images/*.html www/programs/images/compiled.html
git add .
git commit -m "Update"
git push
ssh root@100.70.85.39 "git -C /root/websites/aolccbccom/ pull"