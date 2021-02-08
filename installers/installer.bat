@echo off

cls
set release=0.1.4c
set root=%userprofile%\AppData\Roaming\Nautilus
color 0A 
echo using Valour Aplication ide version %release%!!
echo this installer works for repair and for installing nautilus / wrappers
pause
color 07
cls
set /p folderpath=where did you unzip the file, if you did on the desktop area will be: C:\Users\(user)\desktop\Nautilus
IF EXIST %root% () ELSE (
    mkdir %root%
)
move %folderpath%\wrapper %root%
move %folderpath%\Nautilus\* %root%
move %folderpath%\run.bat %root%
cd %root%\Nautilus 
unzip -o %root%\Nautilus\blockly.zip -d %root%\Nautilus\blockly 
del /f %root%\Nautilus\blockly.zip
echo installing dependencies, ignore things that will pop up in the screen
pause
cls
npm install
cls
shortcut /a:c /f:%root%\run.bat /t:%userprofile%\desktop
echo done!
echo check %root% hehehe
pause
