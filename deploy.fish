rsync -avzP ~/Code/app.closer.earth/* crocodile:/var/app/refispring.com --exclude=.git --exclude=.next --exclude=node_modules  --exclude=.local;
rsync -avzP ~/Code/refispring.com/* crocodile:/var/app/refispring.com --exclude=.git --exclude=.next --exclude=node_modules  --exclude=.local;
ssh crocodile "cd /var/app/refispring.com; npm i; node ./scripts/update_package.js; npm run build; pm2 restart refispring.com;";
