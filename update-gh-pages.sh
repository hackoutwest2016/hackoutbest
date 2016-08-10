
cd frontend;
gulp concat;
rm -rf dist/app;
mkdir dist/app;
mkdir dist/app/assets;
mkdir dist/app/templates;
mkdir dist/fonts;
mkdir dist/assets;
cp -r app/templates/ dist/app/templates;
cp -r app/assets/ dist/app/assets;
cp app/assets/Road_Rage.otf dist/assets;
cp node_modules/bootstrap/fonts/* dist/fonts;
cd ..;
git add -A;
git commit -m 'update';
git subtree push --prefix frontend/dist origin gh-pages;
