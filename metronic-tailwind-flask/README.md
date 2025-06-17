# Metronic v9 HTML + Flask Integration

This project integrates Metronic v9 HTML (Tailwind version) with Flask, providing two demo layouts:
- **Demo 1**: Sidebar-based layout
- **Demo 2**: Header-based layout

## Features

- ✅ Flask Application Factory Pattern
- ✅ Blueprint-based modular architecture
- ✅ Two distinct Metronic demo layouts
- ✅ Jinja2 template inheritance
- ✅ Mock data integration
- ✅ Responsive design with Tailwind CSS
- ✅ Complete asset integration
- ✅ Basic testing setup

## Project Structure

```
metronic-tailwind-flask/
├── app/                    # Flask application package
│   ├── __init__.py        # Application factory
│   ├── config.py          # Configuration classes
│   ├── models.py          # Mock data models
│   ├── main/              # Main blueprint
│   ├── demo1/             # Demo1 blueprint (sidebar layout)
│   └── demo2/             # Demo2 blueprint (header layout)
├── assets/                # Metronic assets (CSS, JS, images)
├── templates/             # Jinja2 templates
│   ├── base.html          # Master base template
│   ├── layouts/           # Layout templates
│   ├── partials/          # Reusable template parts
│   ├── demo1/             # Demo1 pages
│   └── demo2/             # Demo2 pages
├── tests/                 # Test files
├── requirements.txt       # Python dependencies
├── run.py                 # Application entry point
└── README.md             # This file
```

## Quick Start

### Option 1: Automated Setup (Recommended)

**macOS/Linux:**
```bash
cd metronic-tailwind-flask
./setup.sh
```

**Windows:**
```cmd
cd metronic-tailwind-flask
setup.bat
```

### Option 2: Manual Setup

```bash
cd metronic-tailwind-flask
python3 -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
cp .env.example .env
python3 run.py
```

### Access the Application

Open your browser and visit:
- **Main Application:** http://localhost:5000
- **Demo 1 (Sidebar):** http://localhost:5000/demo1/
- **Demo 2 (Header):** http://localhost:5000/demo2/

📖 **For detailed setup instructions, troubleshooting, and platform-specific guidance, see [INSTALLATION.md](INSTALLATION.md)**

### Daily Development

After initial setup, use these scripts for daily development:

**macOS/Linux:**
```bash
./start.sh
```

**Windows:**
```cmd
start.bat
```

## Demo Routes

- **Root**: `/` → Redirects to Demo 1
- **Demo 1**: `/demo1/` → Sidebar-based dashboard layout
- **Demo 2**: `/demo2/` → Header-based analytics layout

## Testing

Run the test suite:

```bash
pytest
```

Run with coverage:

```bash
pytest --cov=app
```

## Development

### Adding New Pages

1. Create new route in appropriate blueprint (`app/demo1/routes.py` or `app/demo2/routes.py`)
2. Create corresponding template in `templates/demo1/` or `templates/demo2/`
3. Add navigation links in partials if needed

### Customizing Layouts

- **Sidebar Layout**: Edit `templates/layouts/sidebar_layout.html`
- **Header Layout**: Edit `templates/layouts/header_layout.html`
- **Partials**: Modify files in `templates/partials/`

### Mock Data

Mock data models are defined in `app/models.py`. Customize the data generation functions to suit your needs.

## Assets

All Metronic assets are located in the `assets/` directory:
- `assets/css/` - Stylesheets
- `assets/js/` - JavaScript files
- `assets/media/` - Images and media files
- `assets/vendors/` - Third-party libraries

## Configuration

The application supports multiple environments:
- **Development**: Debug enabled, detailed error pages
- **Production**: Optimized for deployment
- **Testing**: Configured for automated testing

Configure via environment variables in `.env` file.

## Browser Support

Supports all modern browsers that are compatible with:
- Tailwind CSS v3+
- ES6+ JavaScript features
- CSS Grid and Flexbox

## License

This integration follows the Metronic license terms. Please ensure you have a valid Metronic license for commercial use.

## Support

For Flask-specific issues, refer to the Flask documentation.
For Metronic-specific issues, refer to the [Metronic documentation](https://keenthemes.com/metronic/tailwind/docs).

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Submit a pull request