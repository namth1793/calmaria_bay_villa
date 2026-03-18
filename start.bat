@echo off
echo === Starting Calmaria Bay Villa ===
echo Backend: http://localhost:5007
echo Frontend: http://localhost:3000

start "Backend" cmd /k "cd /d %~dp0backend && npm run dev"
timeout /t 2 /nobreak >nul
start "Frontend" cmd /k "cd /d %~dp0frontend && npm run dev"

echo.
echo Both servers are starting...
echo Open http://localhost:3000 in your browser
pause
