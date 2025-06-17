from flask import render_template
from app.demo2 import bp
from app.models import get_analytics_context


@bp.route('/')
def index():
    """Demo2 index page with header layout."""
    context = get_analytics_context()
    return render_template('demo2/index.html', **context)


@bp.route('/<page>')
def dynamic_page(page):
    """Dynamic page routing for demo2."""
    context = get_analytics_context()
    try:
        return render_template(f'demo2/{page}.html', **context)
    except:
        return render_template('demo2/index.html', **context)