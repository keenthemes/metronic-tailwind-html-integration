"""Tests for Demo1 routes and templates."""
import pytest
from app import create_app


@pytest.fixture
def app():
    """Create application for testing."""
    app = create_app('testing')
    return app


@pytest.fixture
def client(app):
    """Create test client."""
    return app.test_client()


def test_demo1_index_route(client):
    """Test demo1 index route."""
    response = client.get('/demo1/')
    assert response.status_code == 200
    assert b'Demo 1 - Sidebar Layout Dashboard' in response.data


def test_demo1_index_template_content(client):
    """Test demo1 index template contains expected content."""
    response = client.get('/demo1/')
    assert response.status_code == 200
    assert b'Dashboard' in response.data
    assert b'Total Users' in response.data
    assert b'Total Sales' in response.data
    assert b'Total Orders' in response.data
    assert b'Conversion Rate' in response.data


def test_demo1_dynamic_page_fallback(client):
    """Test demo1 dynamic page routing fallback."""
    response = client.get('/demo1/nonexistent')
    assert response.status_code == 200
    # Should fall back to index template
    assert b'Demo 1 - Sidebar Layout Dashboard' in response.data


def test_demo1_sidebar_navigation(client):
    """Test that sidebar navigation is rendered."""
    response = client.get('/demo1/')
    assert response.status_code == 200
    assert b'kt-sidebar' in response.data
    assert b'Dashboards' in response.data