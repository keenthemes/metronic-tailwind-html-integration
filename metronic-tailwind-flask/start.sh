#!/bin/bash

# Metronic Tailwind Flask - Quick Start Script
# Activates virtual environment and starts the Flask development server

echo "🚀 Starting Metronic Tailwind Flask..."

# Check if virtual environment exists
if [ ! -d "venv" ]; then
    echo "❌ Virtual environment not found!"
    echo "   Please run ./setup.sh first to set up the project."
    exit 1
fi

# Check if requirements.txt exists
if [ ! -f "requirements.txt" ]; then
    echo "❌ requirements.txt not found. Please run this script from the metronic-tailwind-flask directory."
    exit 1
fi

# Activate virtual environment
echo "🔄 Activating virtual environment..."
source venv/bin/activate

# Check if Flask is installed
if ! python3 -c "import flask" 2>/dev/null; then
    echo "❌ Flask not found in virtual environment!"
    echo "   Please run ./setup.sh to install dependencies."
    exit 1
fi

echo "✅ Virtual environment activated"
echo "🌐 Starting Flask development server with auto-reload..."
echo ""
echo "📱 Available routes:"
echo "   - Main: http://127.0.0.1:5000"
echo "   - Demo 1 (Sidebar): http://127.0.0.1:5000/demo1/"
echo "   - Demo 2 (Header): http://127.0.0.1:5000/demo2/"
echo ""
echo "🔄 Auto-reload enabled - server will restart when files change"
echo "🛑 Press Ctrl+C to stop the server"
echo ""

# Set Flask environment variables for development with auto-reload
export FLASK_ENV=development
export FLASK_DEBUG=1

# Start Flask application with debug mode (auto-reload enabled)
python3 run.py