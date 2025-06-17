import os
from dotenv import load_dotenv

basedir = os.path.abspath(os.path.dirname(__file__))
load_dotenv(os.path.join(basedir, '.env'))


class BaseConfig:
    """Base configuration class with common settings."""
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'dev-secret-key-change-in-production'
    WTF_CSRF_ENABLED = True


class DevelopmentConfig(BaseConfig):
    """Development configuration with debug enabled."""
    DEBUG = True
    DEVELOPMENT = True


class ProductionConfig(BaseConfig):
    """Production configuration with optimized settings."""
    DEBUG = False
    DEVELOPMENT = False


class TestingConfig(BaseConfig):
    """Testing configuration."""
    TESTING = True
    WTF_CSRF_ENABLED = False


config = {
    'development': DevelopmentConfig,
    'production': ProductionConfig,
    'testing': TestingConfig,
    'default': DevelopmentConfig
}