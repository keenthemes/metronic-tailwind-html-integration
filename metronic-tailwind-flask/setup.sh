#!/bin/bash

# Metronic Tailwind Flask - Quick Setup Script
# This script automates the virtual environment setup and dependency installation

set -e  # Exit on any error

echo "🚀 Metronic Tailwind Flask - Quick Setup"
echo "========================================"

# Check if Python 3 is available
if ! command -v python3 &> /dev/null; then
    echo "❌ Python 3 is not installed. Please install Python 3.8+ first."
    echo "   Visit: https://www.python.org/downloads/"
    exit 1
fi

# Display Python version
PYTHON_VERSION=$(python3 --version)
echo "✅ Found $PYTHON_VERSION"

# Check if we're in the correct directory
if [ ! -f "requirements.txt" ]; then
    echo "❌ requirements.txt not found. Please run this script from the metronic-tailwind-flask directory."
    exit 1
fi

echo ""
echo "📁 Current directory: $(pwd)"

# Create virtual environment if it doesn't exist
if [ ! -d "venv" ]; then
    echo ""
    echo "🔧 Creating virtual environment..."
    python3 -m venv venv
    echo "✅ Virtual environment created: venv/"
else
    echo ""
    echo "✅ Virtual environment already exists: venv/"
fi

# Activate virtual environment
echo ""
echo "🔄 Activating virtual environment..."
source venv/bin/activate

# Upgrade pip
echo ""
echo "⬆️  Upgrading pip..."
pip install --upgrade pip

# Install dependencies
echo ""
echo "📦 Installing dependencies from requirements.txt..."
pip install -r requirements.txt

# Create .env file if it doesn't exist
if [ ! -f ".env" ]; then
    echo ""
    echo "⚙️  Creating .env file from template..."
    cp .env.example .env

    # Generate a secure secret key
    SECRET_KEY=$(python3 -c "import secrets; print(secrets.token_hex(32))")

    # Update the .env file with the generated secret key
    if command -v sed &> /dev/null; then
        sed -i.bak "s/your-secret-key-here/$SECRET_KEY/" .env
        rm .env.bak 2>/dev/null || true
        echo "✅ Generated secure SECRET_KEY in .env file"
    else
        echo "⚠️  Please manually update SECRET_KEY in .env file"
    fi
else
    echo ""
    echo "✅ .env file already exists"
fi

# Test Flask app creation
echo ""
echo "🧪 Testing Flask application..."
if python3 test_setup.py; then
    echo "✅ All Flask application tests passed"
else
    echo "❌ Flask application tests failed"
    echo "   Please check the error messages above"
    exit 1
fi

echo ""
echo "🎉 Setup completed successfully!"
echo ""
echo "Next steps:"
echo "1. Activate virtual environment: source venv/bin/activate"
echo "2. Run the application: python3 run.py"
echo "3. Open browser: http://127.0.0.1:5000"
echo ""
echo "Available routes:"
echo "  - Demo 1 (Sidebar): http://127.0.0.1:5000/demo1/"
echo "  - Demo 2 (Header):  http://127.0.0.1:5000/demo2/"
echo ""
echo "To run tests: pytest"
echo "To deactivate venv: deactivate"
echo ""
echo "📖 See INSTALLATION.md for detailed documentation"