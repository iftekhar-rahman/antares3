@echo off
echo Compiling canute.min.css in dir:
set current_dir=%cd%
echo %current_dir% 
echo.

sass --watch compile.scss:../css/canute.min.css --style compressed