## Technical Specification for Metronic v9 HTML + Flask Integration

### Project Structure
```
metronic-tailwind-flask/
├── app/
│   ├── __init__.py (Application Factory)
│   ├── config.py (Configuration Classes)
│   ├── demo1/
│   │   ├── __init__.py (Demo1 Blueprint)
│   │   ├── routes.py (Demo1 Routes)
│   │   └── forms.py (Demo1 Forms)
│   ├── demo2/
│   │   ├── __init__.py (Demo2 Blueprint)
│   │   ├── routes.py (Demo2 Routes)
│   │   └── forms.py (Demo2 Forms)
│   ├── main/
│   │   ├── __init__.py (Main Blueprint)
│   │   └── routes.py (Main Routes)
│   └── models.py (Mock Data Models)
├── assets/ (Copy of metronic-tailwind-html/src)
├── static/ (Processed assets)
├── templates/
│   ├── base.html (Master Base Template)
│   ├── layouts/
│   │   ├── sidebar_layout.html (Demo1 Layout)
│   │   └── header_layout.html (Demo2 Layout)
│   ├── partials/
│   │   ├── head.html
│   │   ├── header.html
│   │   ├── sidebar.html
│   │   ├── footer.html
│   │   └── scripts.html
│   ├── demo1/
│   │   └── index.html
│   └── demo2/
│       └── index.html
├── tests/
│   ├── __init__.py
│   ├── test_demo1.py
│   └── test_demo2.py
├── requirements.txt
├── .env.example
├── .flaskenv
├── run.py (Application Entry Point)
└── README.md
```

### File-Specific Implementation Details

#### app/__init__.py (Application Factory)
- Import Flask, Blueprint registrations
- Create application factory function `create_app(config_name='default')`
- Register blueprints: main, demo1, demo2
- Configure static folder mapping to serve assets

#### app/config.py (Configuration Classes)
- BaseConfig class with common settings
- DevelopmentConfig with DEBUG=True
- ProductionConfig with optimized settings
- Environment variable loading

#### app/main/__init__.py & routes.py
- Main blueprint for root routes
- Route: '/' -> redirect to demo1
- Route: '/demo1' -> redirect to demo1.index
- Route: '/demo2' -> redirect to demo2.index

#### app/demo1/__init__.py & routes.py
- Demo1 blueprint with url_prefix='/demo1'
- Route: '/demo1/' -> render demo1/index.html with sidebar layout
- Route: '/demo1/<page>' -> dynamic page routing
- Mock data context for template rendering

#### app/demo2/__init__.py & routes.py
- Demo2 blueprint with url_prefix='/demo2'
- Route: '/demo2/' -> render demo2/index.html with header layout
- Route: '/demo2/<page>' -> dynamic page routing
- Mock data context for template rendering

#### app/models.py
- Mock data classes: User, Dashboard, Analytics
- Sample data generators for realistic content
- Helper functions for template context

#### templates/base.html
- DOCTYPE html declaration
- Head section with meta tags, title block
- CSS link blocks for Metronic assets
- Body with content block
- JavaScript blocks for Metronic scripts
- Theme initialization scripts

#### templates/layouts/sidebar_layout.html
- Extends base.html
- Implements sidebar navigation structure from demo1
- Content wrapper with proper CSS classes
- Sidebar toggle functionality
- Mobile responsiveness

#### templates/layouts/header_layout.html
- Extends base.html
- Implements header navigation structure from demo2
- Content wrapper with proper CSS classes
- Header dropdown menus
- Mobile responsiveness

#### templates/partials/head.html
- Meta charset, viewport, title
- Metronic CSS imports: styles.css, plugins
- Favicon and theme color meta tags
- Custom CSS block for extensions

#### templates/partials/sidebar.html
- Navigation menu structure from demo1
- Dynamic active state handling
- User profile section
- Menu items with proper Flask url_for() calls

#### templates/partials/header.html
- Top navigation from demo2
- User dropdown menu
- Notification center
- Theme switcher integration

#### templates/partials/footer.html
- Footer content with proper links
- Copyright information
- Additional footer scripts if needed

#### templates/partials/scripts.html
- Core JavaScript imports: core.bundle.js
- Plugin imports: ApexCharts, etc.
- Custom JavaScript block for extensions
- Theme initialization code

#### templates/demo1/index.html
- Extends layouts/sidebar_layout.html
- Dashboard content from original demo1/index.html
- Jinja2 template variables for dynamic content
- Chart integration with mock data

#### templates/demo2/index.html
- Extends layouts/header_layout.html
- Dashboard content from original demo2/index.html
- Jinja2 template variables for dynamic content
- Different layout-specific components

#### Static Asset Handling
- Copy metronic-tailwind-html/src/* to assets/
- Configure Flask static_url_path to serve from assets/
- Maintain original folder structure for CSS/JS references
- Update asset paths in templates to use url_for('static')

#### requirements.txt
- Flask==2.3.3
- python-dotenv==1.0.0
- Flask-WTF==1.1.1 (for forms)
- pytest==7.4.2 (for testing)
- pytest-flask==1.2.0 (for Flask testing)

#### Testing Setup
- test_demo1.py: Route testing, template rendering
- test_demo2.py: Route testing, template rendering
- Fixtures for app creation and client setup
- Basic smoke tests for all routes

#### Environment Configuration
- .env.example with sample environment variables
- .flaskenv with Flask-specific settings
- FLASK_APP=run.py configuration

#### run.py
- Import create_app from app
- Create application instance
- if __name__ == '__main__': app.run() for development

IMPLEMENTATION CHECKLIST:
1. Create project directory structure: metronic-tailwind-flask/
2. Copy metronic-tailwind-html/src/ contents to assets/ folder
3. Create requirements.txt with specified dependencies
4. Create app/__init__.py with application factory pattern
5. Create app/config.py with configuration classes
6. Create app/models.py with mock data classes
7. Create main blueprint in app/main/ with __init__.py and routes.py
8. Create demo1 blueprint in app/demo1/ with __init__.py and routes.py
9. Create demo2 blueprint in app/demo2/ with __init__.py and routes.py
10. Create templates/base.html master template
11. Create templates/layouts/sidebar_layout.html for demo1
12. Create templates/layouts/header_layout.html for demo2
13. Create all partial templates in templates/partials/
14. Create templates/demo1/index.html extending sidebar layout
15. Create templates/demo2/index.html extending header layout
16. Create .env.example and .flaskenv configuration files
17. Create run.py application entry point
18. Create test files in tests/ directory
19. Create README.md with setup instructions
20. Test Flask application startup and verify both demos render correctly