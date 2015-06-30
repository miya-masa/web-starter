@echo off
pushd %0\..
cls

npm -g install gulp bower
npm install
bower install

pause
