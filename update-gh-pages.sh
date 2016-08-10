
cd frontend;
gulp concat;
rm -rf dist/app;
mkdir dist/app;
mkdir dist/app/assets;
mkdir dist/app/templates;
cp -r app/templates dist/app/templates;
cp -r app/assets dist/app/assets;
cd ..;
git add -A;
git commit -m 'update';
git subtree push --prefix frontend/dist origin gh-pages;
