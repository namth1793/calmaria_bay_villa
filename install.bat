@echo off
echo === Calmaria Bay Villa - Installation ===

echo [1/2] Installing backend...
cd backend
npm install
cd ..

echo [2/2] Installing frontend...
cd frontend
npm install
cd ..

echo.
echo === Installation complete! Run start.bat to launch ===
pause
