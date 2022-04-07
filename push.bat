del www\programs\indexfiles\b.html
type www\programs\images\*.html >> www\programs\indexfiles\b.html
del www\programs\index.html
type www\programs\indexfiles\*.html >> www\programs\index.html
git add .
git commit -m "Update"
git push
ssh root@100.70.85.39 "git -C /root/websites/aolccbccom/ pull"