#!/bin/bash
cd /home/ec2-user/express-app
pm2 stop all || true
pm2 start bin/www --name "express-app"
pm2 save
