@echo off

cls
set release=0.1.4c
set root=%userprofile%\AppData\Roaming\Nautilus
color 0A 
echo using Valour Aplication ide version %release%!!
echo this installer works for repair and for installing nautilus / wrappers
pause
color 07
set /p folderpath=where did you unzip the file, if you did on the desktop area will be: C:\Users\(user)\desktop\Nautilus
IF EXIST %root% () ELSE (
    mkdir %root%
)
move %folderpath%\wrapper %root%
move %folderpath%\Nautilus\* %root%
cd %root%\Nautilus 
unzip -o %root%\Nautilus\blockly.zip -d %root%\Nautilus\blockly 
del /f %root%\Nautilus\blockly.zip
echo done!
echo check %root% hehehe
pause
