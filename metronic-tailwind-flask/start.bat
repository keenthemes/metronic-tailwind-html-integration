@echo off
REM Metronic Tailwind Flask - Quick Start Script for Windows
REM Activates virtual environment and starts the Flask development server

echo 🚀 Starting Metronic Tailwind Flask...

REM Check if virtual environment exists
if not exist "venv" (
    echo ❌ Virtual environment not found!
    echo    Please run setup.bat first to set up the project.
    pause
    exit /b 1
)

REM Check if requirements.txt exists
if not exist "requirements.txt" (
    echo ❌ requirements.txt not found. Please run this script from the metronic-tailwind-flask directory.
    pause
    exit /b 1
)

REM Activate virtual environment
echo 🔄 Activating virtual environment...
call venv\Scripts\activate.bat

REM Check if Flask is installed
python -c "import flask" >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Flask not found in virtual environment!
    echo    Please run setup.bat to install dependencies.
    pause
    exit /b 1
)

echo ✅ Virtual environment activated
echo 🌐 Starting Flask development server...
echo.
echo 📱 Available routes:
echo    - Main: http://127.0.0.1:5000
echo    - Demo 1 (Sidebar): http://127.0.0.1:5000/demo1/
echo    - Demo 2 (Header): http://127.0.0.1:5000/demo2/
echo.
echo 🛑 Press Ctrl+C to stop the server
echo.

REM Start Flask application
python run.py