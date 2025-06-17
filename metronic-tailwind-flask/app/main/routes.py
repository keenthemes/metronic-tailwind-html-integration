from flask import redirect, url_for
from app.main import bp


@bp.route('/')
def index():
    """Root route redirects to demo1."""
    return redirect(url_for('demo1.index'))


@bp.route('/demo1')
def demo1_redirect():
    """Demo1 route redirects to demo1.index."""
    return redirect(url_for('demo1.index'))


@bp.route('/demo2')
def demo2_redirect():
    """Demo2 route redirects to demo2.index."""
    return redirect(url_for('demo2.index'))