# Metronic HTML to Flask Integration Guide

**Quick guide for integrating Metronic v9 HTML (Tailwind) templates into Flask applications.**

---

## 📋 Overview
This guide covers the essential steps to integrate Metronic v9 HTML templates into Flask, focusing on Metronic-specific setup rather than basic Flask concepts.

**Prerequisites:** Basic knowledge of [Flask](https://flask.palletsprojects.com/), [Jinja2 templating](https://jinja.palletsprojects.com/), and [Tailwind CSS](https://tailwindcss.com/).

---

## 🚀 Essential Setup Steps

### 1. Project Structure
```
metronic-tailwind-flask/
├── app/                           # Flask application package
│   ├── __init__.py               # Application factory
│   ├── models.py                 # Minimal context helpers
│   ├── demo1/                    # Demo 1 blueprint (sidebar layout)
│   └── demo2/                    # Demo 2 blueprint (header layout)
├── templates/                    # Jinja2 templates
│   ├── partials/                 # Global partials
│   ├── demo1/                   # Demo 1 templates (sidebar)
│   └── demo2/                   # Demo 2 templates (header)
└── assets/                      # Metronic assets [GITIGNORED]
    ├── css/, js/, media/, vendors/
```

### 2. Copy Metronic Assets
```bash
# Copy all assets from your Metronic package
cp -r metronic-v9-html/html/tailwind/dist/assets/ metronic-tailwind-flask/assets/
```

### 3. Flask Static Configuration
```python
# app/__init__.py
app = Flask(__name__,
            static_folder='../assets',        # Point to Metronic assets
            static_url_path='/assets')
```

### 4. Convert Asset References
Replace Metronic's relative paths with Flask's `url_for()`:

```html
<!-- Metronic HTML -->
<link href="assets/css/styles.css" rel="stylesheet"/>
<script src="assets/js/core.bundle.js"></script>

<!-- Flask Jinja2 -->
<link href="{{ url_for('static', filename='css/styles.css') }}" rel="stylesheet"/>
<script src="{{ url_for('static', filename='js/core.bundle.js') }}"></script>
```

---

## 🎯 Template Conversion

### Base Template Structure
Create layout templates that extend Metronic's HTML structure:

```html
<!-- templates/demo1/base.html -->
<!DOCTYPE html>
<html class="h-full" data-kt-theme="true" data-kt-theme-mode="light">
<head>
    {% include 'partials/head.html' %}
</head>
<body class="antialiased flex h-full demo1 kt-sidebar-fixed">
    {% include 'partials/theme-mode.html' %}

    <div class="flex grow">
        {% include 'demo1/partials/sidebar.html' %}

        <div class="kt-wrapper flex grow flex-col">
            {% include 'demo1/partials/header.html' %}

            <main class="grow pt-5" id="content">
                {% block content %}{% endblock %}
            </main>

            {% include 'demo1/partials/footer.html' %}
        </div>
    </div>

    {% include 'partials/scripts.html' %}
</body>
</html>
```

### Asset Partials
Break Metronic's head and script sections into reusable partials:

**`templates/partials/head.html`:**
```html
<base href="../../">
<title>{% block title %}Metronic - Tailwind CSS{% endblock %}</title>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1, shrink-to-fit=no" name="viewport"/>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet"/>
<link href="{{ url_for('static', filename='vendors/keenicons/styles.bundle.css') }}" rel="stylesheet"/>
<link href="{{ url_for('static', filename='css/styles.css') }}" rel="stylesheet"/>
```

**`templates/partials/scripts.html`:**
```html
<script src="{{ url_for('static', filename='js/core.bundle.js') }}"></script>
<script src="{{ url_for('static', filename='vendors/apexcharts/apexcharts.min.js') }}"></script>
<script src="{{ url_for('static', filename='js/custom/widgets.js') }}"></script>
```

---

## 🔧 Blueprint Organization

### Simple Route Structure
```python
# app/demo1/routes.py
from flask import render_template
from app.demo1 import bp

@bp.route('/')
def index():
    context = {'page_title': 'Dashboard'}
    return render_template('demo1/index.html', **context)
```

For complex routing patterns, see [Flask routing documentation](https://flask.palletsprojects.com/en/2.3.x/quickstart/#routing).

---

## 🎨 Metronic-Specific Integration

### Theme Mode Toggle
Preserve Metronic's theme switching functionality:
```html
<!-- templates/partials/theme-mode.html -->
<script>
var defaultThemeMode = "light";
var themeMode;
if (document.documentElement) {
    if (localStorage.getItem("kt_theme_mode_value") !== null) {
        themeMode = localStorage.getItem("kt_theme_mode_value");
    } else {
        themeMode = defaultThemeMode;
    }
    if (themeMode === "system") {
        themeMode = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    document.documentElement.setAttribute("data-kt-theme-mode", themeMode);
}
</script>
```

### CSS Classes & Data Attributes
Maintain Metronic's required CSS classes and data attributes:
- `data-kt-theme="true"`
- `data-kt-theme-mode="light"`
- Layout-specific classes: `demo1`, `kt-sidebar-fixed`, `kt-header-fixed`

### Component Integration
For Metronic components (charts, datatables, etc.), refer to:
- [Metronic Documentation](https://keenthemes.com/metronic)
- [Original HTML examples](metronic-v9-html/html/tailwind/dist/)

---

## 🧪 Testing Routes

Keep your route tests simple and focused:
```python
def test_demo1_index_route(client):
    response = client.get('/demo1/')
    assert response.status_code == 200
    assert b'Dashboard' in response.data
```

For comprehensive testing patterns, see [Flask testing documentation](https://flask.palletsprojects.com/en/2.3.x/testing/).

---

## 📚 Additional Resources

- **Flask Blueprints:** [Documentation](https://flask.palletsprojects.com/en/2.3.x/blueprints/)
- **Jinja2 Templates:** [Documentation](https://jinja.palletsprojects.com/en/3.1.x/templates/)
- **Static Files:** [Flask guide](https://flask.palletsprojects.com/en/2.3.x/quickstart/#static-files)
- **Metronic Components:** [Official docs](https://keenthemes.com/metronic)

---

## ⚠️ Important Notes

1. **Assets:** The `assets/` directory is gitignored - copy from your Metronic package
2. **Licensing:** Ensure proper Metronic licensing for your use case
3. **Updates:** When updating Metronic, re-copy assets and check for breaking changes
4. **Customization:** Modify `assets/css/styles.css` for custom styling