# Metronic v9 HTML + Flask Integration

**A professional, production-ready integration of Metronic v9 HTML (Tailwind version) with Flask, featuring two demo layouts, modular architecture, and complete asset management.**

---

## 📋 Project Summary
This project provides a robust Flask starter kit using Metronic v9 HTML (Tailwind) UI. It demonstrates best practices in Flask app structure, asset management, and template modularity, with two distinct demo layouts:
- **Demo 1 (Sidebar Layout):** Classic admin dashboard with sidebar navigation.
- **Demo 2 (Header Layout):** Modern analytics dashboard with top header navigation.

---

## 🚦 Prerequisites
- Python 3.8+
- pip (Python package manager)
- Git
- A valid Metronic license (for commercial use)

---

## ⚠️ Assets Directory Notice
The `assets/` directory contains all Metronic CSS, JS, images, and vendor files. **It is gitignored by default** to avoid repository bloat and licensing issues. If you clone this repo, you must manually copy the Metronic assets into `assets/` as described in [INSTALLATION.md](INSTALLATION.md).

---

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

---

## Access the Application
- **Main Application:** http://localhost:5000
- **Demo 1 (Sidebar):** http://localhost:5000/demo1/
- **Demo 2 (Header):** http://localhost:5000/demo2/

---

## Demo Routes
- **Root:** `/` → Redirects to Demo 1
- **Demo 1:** `/demo1/` → Sidebar-based dashboard layout (classic admin)
- **Demo 2:** `/demo2/` → Header-based analytics layout (modern, topbar)

---

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
├── assets/                # Metronic assets (CSS, JS, images) [GITIGNORED]
├── templates/             # Jinja2 templates
│   ├── base.html          # Master base template
│   ├── layouts/           # Layout templates
│   ├── partials/          # Reusable template parts
│   ├── demo1/             # Demo1 pages
│   └── demo2/             # Demo2 pages
├── tests/                 # Test files
├── requirements.txt       # Python dependencies
├── run.py                 # Application entry point
└── README.md              # This file
```

---

## Testing
Run the test suite:
```bash
pytest tests -v
```
With coverage:
```bash
pytest tests --cov=app
```

---

## Development
- **Add new pages:** Create a route in the appropriate blueprint and a template in `templates/demo1/` or `templates/demo2/`.
- **Customize layouts:** Edit `templates/layouts/sidebar_layout.html` or `templates/layouts/header_layout.html`.
- **Mock data:** Defined in `app/models.py`.

---

## Configuration
- **Environments:** Development, Production, Testing (set via `.env`)
- **Assets:** Place all Metronic files in `assets/` (see [INSTALLATION.md](INSTALLATION.md))

---

## Browser Support
All modern browsers supporting Tailwind CSS v3+, ES6+, CSS Grid, and Flexbox.

---

## License
This integration follows the Metronic license terms. **You must have a valid Metronic license for commercial use.**

---

## Support & Resources
- [GETTING_STARTED.md](GETTING_STARTED.md): Beginner-friendly guide
- [INSTALLATION.md](INSTALLATION.md): Detailed setup and troubleshooting
- [Flask Documentation](https://flask.palletsprojects.com/)
- [Metronic Documentation](https://keenthemes.com/metronic/tailwind/docs)

---

## Contributing
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Submit a pull request