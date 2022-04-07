del www/programs/compiled.html
copy www/programs/images/*.html www/programs/compiled.html
git add .
git commit -m "Update"
git push
ssh root@100.70.85.39 "git -C /root/websites/aolccbccom/ pull"