# Getting Started with Metronic v9 HTML + Flask Integration

Welcome to the Metronic v9 HTML Tailwind CSS integration with Flask! This guide helps you quickly get started with this powerful combination.

---

## 👤 Who Is This For?
- Developers seeking a modern Flask starter with Metronic v9 (Tailwind) UI
- Teams building admin dashboards or SaaS platforms
- Anyone wanting a production-ready Flask + Tailwind project

---

## ✅ Prerequisites
- Python 3.8+ ([download](https://www.python.org/downloads/))
- Basic knowledge of [Flask](https://flask.palletsprojects.com/) and [Jinja2](https://jinja.palletsprojects.com/)
- A valid Metronic license (for commercial use)
- Downloaded Metronic assets (see [INSTALLATION.md](INSTALLATION.md))

---

## ⚠️ Assets Directory Notice
The `assets/` directory is **gitignored**. **You must manually copy the Metronic assets into `assets/` after cloning.**
- See [INSTALLATION.md](INSTALLATION.md#restoring-assets) for asset restoration details.

---

## 🚀 Quick Start (3 Steps)

### 1. Setup Environment
```bash
# Automated setup (Recommended)
./setup.sh        # macOS/Linux
setup.bat         # Windows

# Manual setup
python3 -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
```

### 2. Start Application
```bash
./start.sh        # macOS/Linux
start.bat         # Windows
# Or: python3 run.py
```

### 3. Explore Demos
- **Demo 1 (Sidebar):** http://127.0.0.1:5000/demo1/
- **Demo 2 (Header):** http://127.0.0.1:5000/demo2/

---

## 📁 Project Structure

```
metronic-tailwind-flask/
├── 📄 Documentation
│   ├── README.md, INSTALLATION.md, GETTING_STARTED.md
│
├── 🐍 Flask Application
│   ├── app/                   # Main application package
│   │   ├── demo1/, demo2/     # Blueprint demos
│   │   └── models.py          # Minimal context helpers
│   │
│   ├── templates/             # Jinja2 templates
│   │   ├── partials/          # Global partials
│   │   ├── demo1/, demo2/     # Demo-specific templates
│   │
│   └── tests/                 # Test suite
│
├── 🎨 Assets (from Metronic)
│   ├── css/, js/, media/, vendors/
│
└── ⚙️ Configuration
    ├── requirements.txt, run.py, .env.example
```

---

## 🛠️ Development Essentials

### Adding New Pages
1. **Create Route:** Add to appropriate blueprint in `app/demo1/routes.py` or `app/demo2/routes.py`
2. **Create Template:** Add HTML file in `templates/demo1/` or `templates/demo2/`

For routing patterns, see [Flask routing docs](https://flask.palletsprojects.com/en/2.3.x/quickstart/#routing).

### Template Structure
Templates extend Metronic layouts with minimal context:
```python
# Simple route example
@bp.route('/new-page')
def new_page():
    context = {'page_title': 'My Page'}
    return render_template('demo1/new-page.html', **context)
```

For templating patterns, see [Jinja2 docs](https://jinja.palletsprojects.com/en/3.1.x/templates/).

---

## 🧪 Testing

```bash
pytest                    # Run all tests
pytest --cov=app         # Run with coverage
pytest tests/test_demo1.py -v  # Run specific tests
```

For testing patterns, see [Flask testing docs](https://flask.palletsprojects.com/en/2.3.x/testing/).

---

## 🎨 Customization

### Layouts
- **Sidebar Layout:** `templates/demo1/base.html`
- **Header Layout:** `templates/demo2/base.html`
- **Common Elements:** `templates/partials/`

### Styling
- Modify `assets/css/styles.css` for custom styles
- Use Metronic's built-in theme switching
- See [Tailwind CSS docs](https://tailwindcss.com/docs) for utility classes

### Components
For Metronic-specific components (charts, datatables, etc.), refer to [Metronic documentation](https://keenthemes.com/metronic).

---

## 📚 Key Resources

| Resource | Purpose |
|----------|---------|
| [Flask Documentation](https://flask.palletsprojects.com/) | Framework fundamentals |
| [Jinja2 Templates](https://jinja.palletsprojects.com/) | Template syntax |
| [Metronic Docs](https://keenthemes.com/metronic) | UI components |
| [INTEGRATION.md](INTEGRATION.md) | Detailed integration guide |

---

## 🚀 Next Steps

1. **Explore Templates:** Check out both demo layouts
2. **Read Integration Guide:** See [INTEGRATION.md](INTEGRATION.md) for detailed setup
3. **Customize:** Modify templates and add your own pages
4. **Deploy:** Follow [Flask deployment patterns](https://flask.palletsprojects.com/en/2.3.x/deploying/)

---

**Ready to build amazing dashboards!** 🎉