# Metronic v9 HTML + Flask Integration

**A streamlined Flask starter kit with Metronic v9 HTML (Tailwind CSS) templates, focusing on essential setup and integration.**

---

## 🎯 What This Is

A simplified Flask integration that demonstrates how to use Metronic v9 HTML templates with Flask, featuring:
- **Minimal setup** with essential components only
- **Two demo layouts** showcasing different UI patterns
- **Hardcoded dashboard HTML** for quick demo purposes
- **Clean architecture** following Flask best practices
- **Focus on Metronic integration** rather than complex data models

---

## 🚀 Quick Start

```bash
# 1. Setup (automated)
./setup.sh        # macOS/Linux
setup.bat         # Windows

# 2. Copy Metronic assets (required)
cp -r /path/to/metronic-v9-html/html/tailwind/dist/assets/ ./assets/

# 3. Start development server
./start.sh        # macOS/Linux
start.bat         # Windows
```

**Demo URLs:**
- **Demo 1 (Sidebar Layout):** http://127.0.0.1:5000/demo1/
- **Demo 2 (Header Layout):** http://127.0.0.1:5000/demo2/

---

## 📁 Project Structure

```
metronic-tailwind-flask/
├── app/
│   ├── models.py          # Minimal context helpers
│   ├── demo1/             # Sidebar layout demo
│   └── demo2/             # Header layout demo
├── templates/
│   ├── partials/          # Global partials (head, scripts, theme)
│   ├── demo1/             # Sidebar layout templates
│   └── demo2/             # Header layout templates
├── assets/                # Metronic assets [GITIGNORED - must copy manually]
└── tests/                 # Route and integration tests
```

---

## ✨ Key Features

### Simplified Integration
- **Minimal data context** - No complex mock data generators
- **Hardcoded HTML** - Perfect for demos and prototyping
- **Essential setup only** - Focus on Metronic-specific integration
- **External references** - Links to Flask/Jinja2 docs instead of basic examples

### Two Layout Demos
- **Demo 1:** Traditional sidebar navigation layout
- **Demo 2:** Modern header/toolbar navigation layout

### Developer Experience
- **Fast setup** with automated scripts
- **Clean tests** for routes and controllers
- **Documentation** focused on Metronic specifics
- **Easy customization** with clear template structure

---

## 📚 Documentation

| File | Purpose |
|------|---------|
| [INSTALLATION.md](INSTALLATION.md) | Setup and requirements |
| [GETTING_STARTED.md](GETTING_STARTED.md) | Quick start guide |
| [INTEGRATION.md](INTEGRATION.md) | Metronic-specific integration details |

---

## 🧪 Testing

```bash
# Activate environment and run tests
source venv/bin/activate  # Windows: venv\Scripts\activate
pytest tests/ -v
```

All route and controller tests are maintained to ensure functionality.

---

## 🎨 Customization

### Adding Pages
1. Create route in appropriate blueprint (`app/demo1/routes.py` or `app/demo2/routes.py`)
2. Add template in `templates/demo1/` or `templates/demo2/`

### Template Structure
Templates use minimal context for maximum flexibility:
```python
@bp.route('/my-page')
def my_page():
    context = {'page_title': 'My Page'}
    return render_template('demo1/my-page.html', **context)
```

### External Resources
For advanced Flask patterns, see:
- [Flask Documentation](https://flask.palletsprojects.com/)
- [Jinja2 Templates](https://jinja.palletsprojects.com/)
- [Metronic Components](https://keenthemes.com/metronic)

---

## 📋 Requirements

- **Python 3.8+**
- **Flask** and basic dependencies (see [requirements.txt](requirements.txt))
- **Metronic v9 license** (for commercial use)
- **Metronic assets** (must be copied manually)

---

## ⚠️ Important Notes

1. **Assets Required:** Copy Metronic assets to `assets/` directory (gitignored)
2. **Demo Purpose:** Hardcoded HTML is perfect for demos, replace with real data for production
3. **Licensing:** Ensure proper Metronic licensing for your use case

---

## 🤝 Contributing

This is a simplified integration focused on essential setup. For suggestions or improvements, please consider:
- Keeping the focus on Metronic-specific integration
- Avoiding complex data models or extensive Flask examples
- Referencing external documentation for common patterns

---

## 📄 License

This integration code is provided as-is. Metronic UI components require a separate license from [Keen Themes](https://keenthemes.com/metronic).

---

**Ready to build beautiful dashboards with Metronic + Flask!** 🎉