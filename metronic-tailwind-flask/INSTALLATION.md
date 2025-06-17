# Metronic v9 HTML + Flask Integration - Complete Installation Guide

This guide provides step-by-step instructions to set up and run the Metronic v9 HTML Tailwind CSS integration with Flask.

## Prerequisites

Before starting, ensure you have the following installed on your system:

- **Python 3.8+** (Check with `python3 --version`)
- **pip** (Python package manager)
- **Git** (for version control)

### Installing Python (if needed)

#### macOS:
```bash
# Using Homebrew
brew install python3

# Or download from python.org
# https://www.python.org/downloads/
```

#### Ubuntu/Debian:
```bash
sudo apt update
sudo apt install python3 python3-pip python3-venv
```

#### Windows:
Download Python from [python.org](https://www.python.org/downloads/) and install with "Add to PATH" option checked.

## Complete Setup Instructions

### Step 1: Navigate to Project Directory

```bash
cd metronic-tailwind-flask
```

### Step 2: Create Virtual Environment

Creating a virtual environment isolates your project dependencies from system Python packages.

#### Option A: Using `venv` (Recommended)

```bash
# Create virtual environment
python3 -m venv venv

# Alternative names you can use:
# python3 -m venv flask-env
# python3 -m venv .venv
```

#### Option B: Using `virtualenv` (if installed)

```bash
# Install virtualenv if not available
pip3 install virtualenv

# Create virtual environment
virtualenv venv
```

### Step 3: Activate Virtual Environment

#### macOS/Linux:
```bash
source venv/bin/activate
```

#### Windows (Command Prompt):
```cmd
venv\Scripts\activate
```

#### Windows (PowerShell):
```powershell
venv\Scripts\Activate.ps1
```

**Note:** After activation, your terminal prompt should show `(venv)` at the beginning, indicating the virtual environment is active.

### Step 4: Upgrade pip (Recommended)

```bash
pip install --upgrade pip
```

### Step 5: Install Dependencies

```bash
pip install -r requirements.txt
```

This will install:
- Flask==2.3.3
- python-dotenv==1.0.0
- Flask-WTF==1.1.1
- pytest==7.4.2
- pytest-flask==1.2.0

### Step 6: Environment Configuration

```bash
# Copy environment template
cp .env.example .env

# Edit the .env file with your preferred settings
# You can use any text editor:
nano .env
# or
code .env
# or
vim .env
```

**Default .env contents:**
```env
SECRET_KEY=your-secret-key-here
FLASK_APP=run.py
FLASK_ENV=development
FLASK_DEBUG=1
```

**Important:** Change the `SECRET_KEY` to a random string for security:
```bash
# Generate a secure secret key
python3 -c "import secrets; print(secrets.token_hex(32))"
```

### Step 7: Verify Installation

Test that the Flask app can be imported without errors:

```bash
python3 -c "from app import create_app; app = create_app(); print('✅ Flask app created successfully!')"
```

### Step 8: Run the Application

#### Method 1: Using Python directly
```bash
python3 run.py
```

#### Method 2: Using Flask CLI
```bash
flask run
```

#### Method 3: With custom host/port
```bash
flask run --host=0.0.0.0 --port=8000
```

### Step 9: Access the Application

Open your web browser and navigate to:

- **Main Application:** http://127.0.0.1:5000
- **Demo 1 (Sidebar Layout):** http://127.0.0.1:5000/demo1/
- **Demo 2 (Header Layout):** http://127.0.0.1:5000/demo2/

## Testing the Installation

### Run Basic Tests

```bash
# Run all tests
pytest

# Run with verbose output
pytest -v

# Run specific test file
pytest tests/test_demo1.py

# Run with coverage report
pytest --cov=app
```

### Manual Testing Checklist

1. ✅ **Home page redirects:** Visit http://127.0.0.1:5000 → should redirect to demo1
2. ✅ **Demo 1 loads:** Visit http://127.0.0.1:5000/demo1/ → sidebar layout with dashboard
3. ✅ **Demo 2 loads:** Visit http://127.0.0.1:5000/demo2/ → header layout with analytics
4. ✅ **Navigation works:** Click between demo1 and demo2 links
5. ✅ **Assets load:** Check browser developer tools for CSS/JS errors
6. ✅ **Responsive design:** Test on different screen sizes

## Troubleshooting

### Common Issues and Solutions

#### 1. Python Command Not Found
```bash
# Try these alternatives:
python3 --version
python --version
py --version  # Windows
```

#### 2. Virtual Environment Activation Issues

**macOS/Linux:**
```bash
# If source command fails, try:
. venv/bin/activate

# Or use full path:
/path/to/your/project/venv/bin/activate
```

**Windows PowerShell Execution Policy:**
```powershell
# If you get execution policy error:
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

#### 3. Package Installation Errors

```bash
# Upgrade pip first:
pip install --upgrade pip

# Clear pip cache:
pip cache purge

# Install with verbose output:
pip install -r requirements.txt -v
```

#### 4. Flask Import Errors

```bash
# Ensure virtual environment is activated
source venv/bin/activate  # macOS/Linux
venv\Scripts\activate     # Windows

# Verify Flask installation
pip list | grep Flask

# Reinstall if needed
pip uninstall Flask
pip install Flask==2.3.3
```

#### 5. Template Not Found Errors

```bash
# Verify directory structure
ls -la templates/
ls -la templates/layouts/
ls -la templates/partials/

# Check Flask is looking in correct directory
python3 -c "from app import create_app; app = create_app(); print(app.template_folder)"
```

#### 6. Static Files Not Loading

```bash
# Verify assets directory
ls -la assets/
ls -la assets/css/
ls -la assets/js/

# Check Flask static configuration
python3 -c "from app import create_app; app = create_app(); print(app.static_folder)"
```

## Development Workflow

### Daily Development Setup

```bash
# 1. Navigate to project
cd metronic-tailwind-flask

# 2. Activate virtual environment
source venv/bin/activate  # macOS/Linux
# or
venv\Scripts\activate     # Windows

# 3. Start development server
flask run

# 4. When done, deactivate virtual environment
deactivate
```

### Adding New Dependencies

```bash
# Install new package
pip install package-name

# Update requirements file
pip freeze > requirements.txt
```

### Project Structure Verification

```bash
# Check complete project structure
find . -type f -name "*.py" | sort
find . -type f -name "*.html" | sort
```

## Production Deployment Notes

### Environment Variables for Production

```env
SECRET_KEY=your-production-secret-key
FLASK_ENV=production
FLASK_DEBUG=0
```

### Security Considerations

1. **Change SECRET_KEY:** Use a strong, unique secret key
2. **Environment Variables:** Never commit `.env` file to version control
3. **Debug Mode:** Ensure `FLASK_DEBUG=0` in production
4. **HTTPS:** Use HTTPS in production environments

## Additional Resources

- **Flask Documentation:** https://flask.palletsprojects.com/
- **Metronic Documentation:** https://keenthemes.com/metronic/tailwind/docs
- **Python Virtual Environments:** https://docs.python.org/3/tutorial/venv.html
- **Tailwind CSS:** https://tailwindcss.com/docs

## Support

If you encounter issues:

1. Check this troubleshooting guide
2. Verify your Python and pip versions
3. Ensure virtual environment is properly activated
4. Check Flask and dependency versions match requirements.txt
5. Review browser developer console for frontend errors

For Metronic-specific styling issues, refer to the official Metronic documentation.

---

**Next Steps:** Once installation is complete, see `README.md` for usage instructions and development guidelines.