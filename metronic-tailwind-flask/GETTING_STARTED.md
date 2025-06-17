# Getting Started with Metronic v9 HTML + Flask Integration

Welcome to the complete Metronic v9 HTML Tailwind CSS integration with Flask! This guide will help you understand and start using this powerful combination.

## 📋 What You Get

This integration provides:

- ✅ **Complete Flask Application** with modern architecture patterns
- ✅ **Two Demo Layouts** showcasing different Metronic designs
- ✅ **Full Asset Integration** with all Metronic CSS, JS, and media files
- ✅ **Responsive Design** maintaining Metronic's professional appearance
- ✅ **Mock Data System** for realistic dashboard content
- ✅ **Testing Framework** for reliable development
- ✅ **Automated Setup Scripts** for quick installation

## 🚀 Quick Start (3 Steps)

### 1. Setup the Environment

**Automated Setup (Recommended):**
```bash
# macOS/Linux
./setup.sh

# Windows
setup.bat
```

**Manual Setup:**
```bash
python3 -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
cp .env.example .env
```

### 2. Start the Application

```bash
# Using start scripts
./start.sh        # macOS/Linux
start.bat         # Windows

# Or manually
python3 run.py
```

### 3. Explore the Demos

Open your browser and visit:
- **Demo 1 (Sidebar Layout):** http://127.0.0.1:5000/demo1/
- **Demo 2 (Header Layout):** http://127.0.0.1:5000/demo2/

## 🎯 Demo Layouts Overview

### Demo 1 - Sidebar Layout
- **URL:** `/demo1/`
- **Features:** Fixed sidebar navigation, dashboard metrics, charts
- **Use Case:** Traditional admin dashboards, internal tools
- **Layout:** `templates/layouts/sidebar_layout.html`

### Demo 2 - Header Layout
- **URL:** `/demo2/`
- **Features:** Top header navigation, analytics dashboard, traffic sources
- **Use Case:** Public-facing dashboards, analytics platforms
- **Layout:** `templates/layouts/header_layout.html`

## 📁 Project Structure

```
metronic-tailwind-flask/
├── 📄 Documentation
│   ├── README.md              # Main project overview
│   ├── INSTALLATION.md        # Detailed setup instructions
│   └── GETTING_STARTED.md     # This file
│
├── 🔧 Setup Scripts
│   ├── setup.sh / setup.bat   # Initial project setup
│   └── start.sh / start.bat   # Daily development startup
│
├── 🐍 Flask Application
│   ├── app/                   # Main application package
│   │   ├── __init__.py       # Application factory
│   │   ├── config.py         # Configuration management
│   │   ├── models.py         # Mock data models
│   │   ├── main/             # Main blueprint (redirects)
│   │   ├── demo1/            # Demo 1 blueprint (sidebar)
│   │   └── demo2/            # Demo 2 blueprint (header)
│   │
│   ├── templates/            # Jinja2 templates
│   │   ├── base.html         # Master template
│   │   ├── layouts/          # Layout templates
│   │   ├── partials/         # Reusable components
│   │   ├── demo1/            # Demo 1 pages
│   │   └── demo2/            # Demo 2 pages
│   │
│   └── tests/                # Test suite
│
├── 🎨 Assets (from Metronic)
│   ├── css/                  # Stylesheets
│   ├── js/                   # JavaScript files
│   ├── media/                # Images and icons
│   └── vendors/              # Third-party libraries
│
└── ⚙️ Configuration
    ├── requirements.txt      # Python dependencies
    ├── run.py               # Application entry point
    ├── .env.example         # Environment template
    └── .flaskenv           # Flask settings
```

## 🛠️ Development Guide

### Adding New Pages

1. **Create Route:** Add to appropriate blueprint (`app/demo1/routes.py` or `app/demo2/routes.py`)
2. **Create Template:** Add HTML file in `templates/demo1/` or `templates/demo2/`
3. **Update Navigation:** Modify partials if needed

**Example:**
```python
# In app/demo1/routes.py
@bp.route('/new-page')
def new_page():
    context = get_dashboard_context()
    return render_template('demo1/new-page.html', **context)
```

### Customizing Layouts

- **Sidebar Layout:** Edit `templates/layouts/sidebar_layout.html`
- **Header Layout:** Edit `templates/layouts/header_layout.html`
- **Common Elements:** Modify files in `templates/partials/`

### Working with Mock Data

Mock data is generated in `app/models.py`:
```python
# Get dashboard data
context = get_dashboard_context()

# Get analytics data
context = get_analytics_context()

# Create custom data
user = User("John Doe", "john@example.com")
```

## 🧪 Testing

```bash
# Run all tests
pytest

# Run with coverage
pytest --cov=app

# Run specific tests
pytest tests/test_demo1.py -v
```

## 📚 Key Files Reference

| File | Purpose |
|------|---------|
| `app/__init__.py` | Application factory, blueprint registration |
| `app/config.py` | Environment-specific configurations |
| `app/models.py` | Mock data classes and generators |
| `templates/base.html` | Master template with common HTML structure |
| `templates/partials/head.html` | HTML head with CSS imports |
| `templates/partials/scripts.html` | JavaScript imports and initialization |
| `run.py` | Application entry point |

## 🎨 Customization Tips

### Changing Colors/Themes
- Metronic uses CSS custom properties
- Modify `assets/css/styles.css` or add custom CSS
- Use Metronic's built-in theme switching

### Adding New Components
- Copy component HTML from Metronic documentation
- Create Jinja2 macros for reusable components
- Update asset imports if needed

### Database Integration
- Replace mock data in `app/models.py`
- Add SQLAlchemy or your preferred ORM
- Update context functions to use real data

## 🔍 Troubleshooting

### Common Issues

1. **Assets not loading:** Check `url_for('static', filename='...')` paths
2. **Template errors:** Verify template inheritance and block names
3. **Import errors:** Ensure virtual environment is activated
4. **Styling issues:** Check CSS file paths and Metronic documentation

### Getting Help

- **Installation Issues:** See `INSTALLATION.md`
- **Flask Questions:** [Flask Documentation](https://flask.palletsprojects.com/)
- **Metronic Styling:** [Metronic Docs](https://keenthemes.com/metronic/tailwind/docs)
- **Tailwind CSS:** [Tailwind Documentation](https://tailwindcss.com/docs)

## 🚀 Next Steps

1. **Explore Both Demos:** Compare sidebar vs header layouts
2. **Review Code Structure:** Understand the Flask blueprint pattern
3. **Customize Templates:** Modify layouts to match your needs
4. **Add Real Data:** Replace mock data with your data sources
5. **Deploy:** Prepare for production deployment

## 📝 Additional Resources

- **Flask Best Practices:** Application factory pattern, blueprints, configuration
- **Metronic Components:** Buttons, cards, tables, forms, charts
- **Tailwind Utilities:** Responsive design, spacing, colors
- **Jinja2 Templates:** Template inheritance, macros, filters

---

**Happy Coding!** 🎉

This integration gives you a solid foundation for building professional web applications with Flask and Metronic's beautiful UI components.