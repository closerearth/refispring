rsync -avzP ~/Code/app.closer.earth/* ~/Code/refispring.com/.local --exclude=.git --exclude=.next  --exclude=node_modules --exclude=.local;
rsync -avzP ~/Code/refispring.com/* ~/Code/refispring.com/.local --exclude=.git --exclude=.next  --exclude=node_modules --exclude=.local;
cd ~/Code/refispring.com/.local;
npm i;
node ./scripts/update_package.js;
cd ~/Code/refispring.com/;
