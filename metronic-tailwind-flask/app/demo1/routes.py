from flask import render_template
from app.demo1 import bp
from app.models import get_dashboard_context


@bp.route('/')
def index():
    """Demo1 index page with sidebar layout."""
    context = get_dashboard_context()
    return render_template('demo1/index.html', **context)


@bp.route('/<page>')
def dynamic_page(page):
    """Dynamic page routing for demo1."""
    context = get_dashboard_context()
    try:
        return render_template(f'demo1/{page}.html', **context)
    except:
        return render_template('demo1/index.html', **context)