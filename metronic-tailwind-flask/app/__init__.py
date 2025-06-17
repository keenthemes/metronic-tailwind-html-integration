import os
from flask import Flask
from app.config import config


def create_app(config_name='default'):
    """Application factory pattern for Flask app creation."""
    # Get the directory containing this file (app/__init__.py)
    basedir = os.path.abspath(os.path.dirname(__file__))
    # Go up one level to the project root
    project_root = os.path.dirname(basedir)

    app = Flask(__name__,
                static_folder=os.path.join(project_root, 'assets'),
                static_url_path='/assets',
                template_folder=os.path.join(project_root, 'templates'))

    # Load configuration
    app.config.from_object(config[config_name])

    # Register blueprints
    from app.main import bp as main_bp
    app.register_blueprint(main_bp)

    from app.demo1 import bp as demo1_bp
    app.register_blueprint(demo1_bp, url_prefix='/demo1')

    from app.demo2 import bp as demo2_bp
    app.register_blueprint(demo2_bp, url_prefix='/demo2')

    return app