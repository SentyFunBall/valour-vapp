@echo off
cls
set release=0.1.4c
set root=%userprofile%\AppData\Roaming\Nautilus
color 0A 
echo using Valour Aplication ide version %release%!!
pause
color 07
set /p folderpath=where did you unzip the file, if you did on the desktop area will be: C:\Users\(user)\desktop\Nautilus
IF EXIST %root% () ELSE (
    mkdir %root%
)
move %folderpath%\wrapper %root%
move %folderpath%\nautilus\* %root%
cd %root%
echo done!
echo check %root% hehehe
pause
