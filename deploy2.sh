#!/bin/bash
cd /home/ec2-user/deploy_nextjs_app
git pull origin master
npm install &&
npm run build &&
systemctl restart next.js-app.service
