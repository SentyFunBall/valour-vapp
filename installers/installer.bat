@echo off

cls
set release=0.1.7c
set root=%userprofile%\AppData\Roaming\Nautilus
echo %cd%
cd ..
if exist %root% (
    rmdir /S %root%
)
cd nautilus
move %cd%\* %root%