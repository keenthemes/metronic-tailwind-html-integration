@echo off
REM Metronic Tailwind Flask - Quick Setup Script for Windows
REM This script automates the virtual environment setup and dependency installation

echo 🚀 Metronic Tailwind Flask - Quick Setup (Windows)
echo ================================================

REM Check if Python is available
python --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Python is not installed or not in PATH.
    echo    Please install Python 3.8+ from https://www.python.org/downloads/
    echo    Make sure to check "Add Python to PATH" during installation.
    pause
    exit /b 1
)

REM Display Python version
for /f "tokens=*" %%i in ('python --version') do set PYTHON_VERSION=%%i
echo ✅ Found %PYTHON_VERSION%

REM Check if we're in the correct directory
if not exist "requirements.txt" (
    echo ❌ requirements.txt not found. Please run this script from the metronic-tailwind-flask directory.
    pause
    exit /b 1
)

echo.
echo 📁 Current directory: %CD%

REM Create virtual environment if it doesn't exist
if not exist "venv" (
    echo.
    echo 🔧 Creating virtual environment...
    python -m venv venv
    echo ✅ Virtual environment created: venv\
) else (
    echo.
    echo ✅ Virtual environment already exists: venv\
)

REM Activate virtual environment
echo.
echo 🔄 Activating virtual environment...
call venv\Scripts\activate.bat

REM Upgrade pip
echo.
echo ⬆️  Upgrading pip...
python -m pip install --upgrade pip

REM Install dependencies
echo.
echo 📦 Installing dependencies from requirements.txt...
pip install -r requirements.txt

REM Create .env file if it doesn't exist
if not exist ".env" (
    echo.
    echo ⚙️  Creating .env file from template...
    copy .env.example .env >nul

    REM Generate a secure secret key
    for /f "tokens=*" %%i in ('python -c "import secrets; print(secrets.token_hex(32))"') do set SECRET_KEY=%%i

    REM Update the .env file with the generated secret key
    powershell -Command "(Get-Content .env) -replace 'your-secret-key-here', '%SECRET_KEY%' | Set-Content .env"
    echo ✅ Generated secure SECRET_KEY in .env file
) else (
    echo.
    echo ✅ .env file already exists
)

REM Test Flask app creation
echo.
echo 🧪 Testing Flask application...
python test_setup.py
if %errorlevel% equ 0 (
    echo ✅ All Flask application tests passed
) else (
    echo ❌ Flask application tests failed
    echo    Please check the error messages above
    pause
    exit /b 1
)

echo.
echo 🎉 Setup completed successfully!
echo.
echo Next steps:
echo 1. Activate virtual environment: venv\Scripts\activate
echo 2. Run the application: python run.py
echo 3. Open browser: http://127.0.0.1:5000
echo.
echo Available routes:
echo   - Demo 1 (Sidebar): http://127.0.0.1:5000/demo1/
echo   - Demo 2 (Header):  http://127.0.0.1:5000/demo2/
echo.
echo To run tests: pytest
echo To deactivate venv: deactivate
echo.
echo 📖 See INSTALLATION.md for detailed documentation
echo.
pause