# Django Project Technical Specification (2024)

## Project Overview
Integration of Metronic v9 HTML Tailwind templates into a modern Django project, following 2024 best practices with comprehensive testing and documentation.

## Project Structure (Updated for Modern Django)
```
metronic-tailwind-django/
├── manage.py
├── pyproject.toml                    # Modern Python dependency management
├── requirements.txt                  # Fallback for traditional environments
├── .gitignore
├── pytest.ini                       # pytest configuration
├── INSTALLATION.md
├── INTEGRATION.md
├── GETTING_STARTED.md
├── README.md
├── metronic_project/
│   ├── __init__.py
│   ├── settings/
│   │   ├── __init__.py
│   │   ├── base.py
│   │   ├── development.py
│   │   └── production.py
│   ├── urls.py
│   ├── wsgi.py
│   └── asgi.py
├── apps/                             # Modern Django structure
│   ├── __init__.py
│   ├── demo1/
│   │   ├── __init__.py
│   │   ├── admin.py
│   │   ├── apps.py
│   │   ├── models.py
│   │   ├── views.py
│   │   ├── urls.py
│   │   └── migrations/
│   └── demo2/
│       ├── __init__.py
│       ├── admin.py
│       ├── apps.py
│       ├── models.py
│       ├── views.py
│       ├── urls.py
│       └── migrations/
├── templates/
│   ├── partials/
│   │   ├── head.html
│   │   ├── scripts.html
│   │   └── theme-mode.html
│   ├── demo1/
│   │   ├── base.html
│   │   ├── index.html
│   │   └── partials/
│   │       ├── header.html
│   │       ├── sidebar.html
│   │       └── footer.html
│   └── demo2/
│       ├── base.html
│       ├── index.html
│       └── partials/
│           ├── header.html
│           ├── navbar.html
│           ├── toolbar.html
│           └── footer.html
├── static/
│   ├── dist/                         # Processed/compiled assets
│   ├── src/                          # Source assets requiring processing
│   └── public/                       # Direct-serve assets
└── tests/
    ├── __init__.py
    ├── conftest.py
    ├── demo1/
    │   ├── __init__.py
    │   ├── test_models.py
    │   ├── test_views.py
    │   └── test_urls.py
    └── demo2/
        ├── __init__.py
        ├── test_models.py
        ├── test_views.py
        └── test_urls.py
```

## Core Components Specification (Updated)

### Django Project Configuration
- **File**: `metronic_project/settings/base.py`
- **Split Settings**: Multi-file settings structure (base.py, development.py, production.py)
- **Apps Directory**: Use `apps/` directory for better organization
- **Django Version**: Django 5.1.x (latest stable)
- **Database**: SQLite for development, PostgreSQL configuration for production

### Static Files Configuration (Modern Approach)
- **WhiteNoise Integration**: For production static file serving
- **STORAGES Setting**: Use modern STORAGES setting instead of deprecated STATICFILES_STORAGE
- **Directory Structure**: Separate src/, dist/, and public/ folders for better asset management
- **File**: `metronic_project/settings/base.py`
- **Configuration**: Modern staticfiles setup with WhiteNoise and compression

### Apps Structure (Updated)
- **Directory**: `apps/demo1/` and `apps/demo2/`
- **Models**: Mock data models with proper type hints
- **Views**: Class-based views using Django 5.1 features
- **URLs**: Modern path() syntax with proper namespacing

## Testing Specification (Modern pytest Approach)

### pytest Configuration
- **File**: `pytest.ini`
- **Framework**: pytest-django instead of unittest
- **Settings**: Use pytest-django for better Django integration
- **Configuration**: Parallel test execution with pytest-xdist
- **Coverage**: Integration with coverage.py

### Test Structure
- **Framework**: pytest with fixtures
- **Organization**: Top-level tests/ directory
- **Fixtures**: Use pytest fixtures instead of setUp methods
- **Database**: @pytest.mark.django_db decorator
- **Markers**: Custom pytest markers for different test types

### Demo1 Tests
- **File**: `tests/demo1/test_views.py`
- **Methods**: pytest functions using fixtures
- **Assertions**: pytest-django assertions (assertContains, etc.)
- **Database**: Proper database handling with pytest-django

### Demo2 Tests
- **File**: `tests/demo2/test_views.py`
- **Methods**: pytest functions using fixtures
- **Assertions**: pytest-django assertions
- **Database**: Proper database handling with pytest-django

## Static Files Management (Updated)

### Modern Asset Management
- **WhiteNoise**: For serving static files in production
- **Compression**: Built-in compression with CompressedManifestStaticFilesStorage
- **Caching**: Proper cache headers and file versioning
- **CDN Ready**: Easy integration with CDN services

### Directory Structure
- **static/src/**: Source files requiring processing (CSS, JS, images)
- **static/public/**: Files served directly (fonts, vendor files)
- **static/dist/**: Processed/compiled output files
- **STATICFILES_DIRS**: Point to dist/ and public/ directories

## Template Integration Specification

### Base Templates
- **File**: `templates/demo1/base.html`
- **Structure**: HTML5 doctype, modern Django template patterns
- **Blocks**: title, content blocks for inheritance
- **Includes**: partials for head, scripts, theme-mode, header, sidebar, footer

- **File**: `templates/demo2/base.html`
- **Structure**: HTML5 doctype, modern Django template patterns
- **Blocks**: title, content blocks for inheritance
- **Includes**: partials for head, scripts, theme-mode, header, navbar, toolbar, footer

### Content Templates
- **File**: `templates/demo1/index.html`
- **Source**: Convert from metronic-tailwind-html/dist/html/demo1/index.html
- **Extends**: demo1/base.html
- **Blocks**: Override title and content blocks

- **File**: `templates/demo2/index.html`
- **Source**: Convert from metronic-tailwind-html/dist/html/demo2/index.html
- **Extends**: demo2/base.html
- **Blocks**: Override title and content blocks

### Partial Templates
- **Files**: All partial templates in templates/partials/ and demo-specific partials/
- **Conversion**: Extract from source HTML with proper Django template syntax
- **Asset References**: Convert to Django's static template tag syntax

## Documentation Specification (Updated)

### Integration Guide Format
- **Follow Latest Patterns**: Based on 2024 Django documentation style
- **Modern Deployment**: Include Docker, WhiteNoise, and cloud deployment
- **Security Best Practices**: Include OWASP recommendations
- **Performance**: Include caching, compression, and optimization

### Installation Guide Updates
- **Python 3.10+**: Minimum Python version requirement
- **Virtual Environment**: Modern venv usage patterns
- **Dependency Management**: Both pip and poetry support
- **Django 5.1**: Latest stable Django version

### Getting Started Guide
- **File**: `GETTING_STARTED.md`
- **Sections**: Quick Start, Project Structure, Development Workflow, Testing Instructions
- **Content**: Practical usage instructions for developers

### README
- **File**: `README.md`
- **Sections**: Overview, Features, Installation, Usage, Documentation Links, License
- **Format**: Clear, professional documentation with badges and links

## Dependencies Specification (Updated)

### Core Dependencies
- **Django**: 5.1.x (latest stable)
- **pytest-django**: Latest version for testing
- **whitenoise**: For static file serving
- **coverage**: For test coverage reporting

### Development Dependencies
- **pytest-xdist**: For parallel test execution
- **pytest-randomly**: For test order randomization
- **pre-commit**: For code quality hooks
- **black**: For code formatting

## Configuration Files (Updated)

### Modern Python Configuration
- **File**: `pyproject.toml`
- **Tool Configuration**: Centralized tool configuration (pytest, black, coverage)
- **Dependency Management**: Modern Python packaging standards
- **Build System**: Proper build system specification

### Updated Git Ignore
- **Modern Patterns**: Updated for Django 5.1 and modern tools
- **Static Files**: Ignore dist/ and processed files
- **Development**: Ignore modern development tools and caches

### Requirements
- **File**: `requirements.txt`
- **Dependencies**: Django 5.1.x, pytest-django, whitenoise, coverage
- **Development**: Separate development dependencies or use pyproject.toml

## IMPLEMENTATION CHECKLIST:

1. Create Django project using django-admin startproject metronic_project . in metronic-tailwind-django directory
2. Restructure project to use apps/ directory for better organization
3. Split settings into base.py, development.py, and production.py in settings/ directory
4. Create apps/demo1 Django app using python manage.py startapp demo1 apps/demo1
5. Create apps/demo2 Django app using python manage.py startapp demo2 apps/demo2
6. Configure metronic_project/settings/base.py with modern STORAGES, INSTALLED_APPS, and TEMPLATES settings
7. Create metronic_project/urls.py with URL routing to demo apps
8. Create apps/demo1/urls.py with modern URL patterns using path()
9. Create apps/demo2/urls.py with modern URL patterns using path()
10. Create apps/demo1/models.py with type-hinted mock data models
11. Create apps/demo2/models.py with type-hinted mock data models
12. Create apps/demo1/views.py with class-based views using Django 5.1 features
13. Create apps/demo2/views.py with class-based views using Django 5.1 features
14. Create static directory structure with src/, dist/, and public/ subdirectories
15. Create templates directory structure with partials, demo1, and demo2 subdirectories
16. Create templates/partials/head.html by extracting and modernizing from source HTML
17. Create templates/partials/scripts.html by extracting and modernizing from source HTML
18. Create templates/partials/theme-mode.html by extracting from source HTML
19. Create templates/demo1/base.html using modern Django template patterns
20. Create templates/demo1/index.html by converting from metronic-tailwind-html/dist/html/demo1/index.html
21. Create templates/demo1/partials/header.html by extracting from source HTML
22. Create templates/demo1/partials/sidebar.html by extracting from source HTML
23. Create templates/demo1/partials/footer.html by extracting from source HTML
24. Create templates/demo2/base.html using modern Django template patterns
25. Create templates/demo2/index.html by converting from metronic-tailwind-html/dist/html/demo2/index.html
26. Create templates/demo2/partials/header.html by extracting from source HTML
27. Create templates/demo2/partials/navbar.html by extracting from source HTML
28. Create templates/demo2/partials/toolbar.html by extracting from source HTML
29. Create templates/demo2/partials/footer.html by extracting from source HTML
30. Configure static files with WhiteNoise and modern STORAGES setting
31. Create symbolic link from static/ to metronic-tailwind-html/dist/assets/
32. Create pytest.ini with modern pytest-django configuration
33. Create tests directory structure with conftest.py and app-specific test directories
34. Create tests/conftest.py with project-wide pytest fixtures
35. Create tests/demo1/test_views.py with pytest-style test functions
36. Create tests/demo2/test_views.py with pytest-style test functions
37. Create tests/demo1/test_models.py with pytest-style model tests
38. Create tests/demo2/test_models.py with pytest-style model tests
39. Create pyproject.toml with modern Python packaging and tool configuration
40. Create requirements.txt with Django 5.1.x and essential dependencies
41. Create .gitignore with modern Django and Python patterns
42. Create INSTALLATION.md with updated Django 5.1 setup instructions
43. Create INTEGRATION.md following modern Django documentation patterns and 2024 best practices
44. Create GETTING_STARTED.md with practical usage guide for Django 5.1
45. Create README.md with project overview, badges, and modern documentation links
