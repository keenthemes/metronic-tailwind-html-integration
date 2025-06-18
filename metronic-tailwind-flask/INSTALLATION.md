# Metronic v9 HTML + Flask Integration - Complete Installation Guide

---

## 🏁 Quick Reference
- **Project summary:** See [README.md](README.md)
- **Beginner setup:** See [GETTING_STARTED.md](GETTING_STARTED.md)
- **This guide:** Full installation, troubleshooting, and deployment

---

## Prerequisites
- Python 3.8+
- pip
- Git
- Metronic license & assets (see below)

---

## ⚠️ Restoring the `assets/` Directory
The `assets/` directory is **gitignored** to keep the repository lightweight and avoid licensing issues. **You must manually copy the Metronic assets into `assets/` after cloning.**

**How to restore:**
1. Download the Metronic v9 HTML (Tailwind) package from your Keenthemes account.
2. Copy the contents of the Metronic `html/tailwind/dist/assets/` directory into your project's `assets/` directory.
3. Your structure should look like:
   ```
   metronic-tailwind-flask/
   └── assets/
       ├── css/
       ├── js/
       ├── media/
       └── vendors/
   ```

---

## Complete Setup Instructions

### 1. Navigate to Project Directory
```bash
cd metronic-tailwind-flask
```

### 2. Create Virtual Environment
```bash
python3 -m venv venv
```

### 3. Activate Virtual Environment
- **macOS/Linux:**
  ```bash
  source venv/bin/activate
  ```
- **Windows (CMD):**
  ```cmd
  venv\Scripts\activate
  ```
- **Windows (PowerShell):**
  ```powershell
  venv\Scripts\Activate.ps1
  ```

### 4. Upgrade pip (Recommended)
```bash
pip install --upgrade pip
```

### 5. Install Dependencies
```bash
pip install -r requirements.txt
```

### 6. Environment Configuration
```bash
cp .env.example .env
# Edit .env as needed (set SECRET_KEY, etc)
```

### 7. Restore Metronic Assets
See the section above on restoring the `assets/` directory.

### 8. Verify Installation
```bash
python3 -c "from app import create_app; app = create_app(); print('✅ Flask app created successfully!')"
```

### 9. Run the Application
```bash
python3 run.py
# or
flask run
```

---

## 📝 Post-Install Checklist
- [ ] Home page redirects to Demo 1
- [ ] Demo 1 loads with sidebar layout
- [ ] Demo 2 loads with header layout
- [ ] Navigation works between demos
- [ ] All assets (CSS/JS/images) load (check browser dev tools)
- [ ] Responsive design works on all screen sizes

---

## 🛠️ Development Workflow
- Activate your virtual environment before working
- Use `pytest` to run tests
- Add new dependencies with `pip install` and update `requirements.txt`
- See [README.md](README.md) for project structure and customization tips

---

## 🚀 Production Deployment
- Set `FLASK_ENV=production` and `FLASK_DEBUG=0` in your `.env`
- Use a strong, unique `SECRET_KEY`
- Serve with a production WSGI server (e.g., Gunicorn or uWSGI)
- Use HTTPS in production
- Never commit your `.env` file

---

## ❓ Where to Get Help
- [GETTING_STARTED.md](GETTING_STARTED.md): Beginner-friendly guide
- [README.md](README.md): Project summary and structure
- [Flask Documentation](https://flask.palletsprojects.com/)
- [Metronic Docs](https://keenthemes.com/metronic/tailwind/docs)

---

**If you encounter issues:**
1. Double-check the `assets/` directory and all file paths
2. Ensure your virtual environment is activated
3. Review error messages and consult the troubleshooting section above
4. Search the official Flask and Metronic documentation

---

*Happy building with Flask & Metronic!*