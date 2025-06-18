"""Tests for Demo2 routes and templates."""
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


def test_demo2_index_route(client):
    """Test demo2 index route."""
    response = client.get('/demo2/')
    assert response.status_code == 200
    assert b'Dashboard' in response.data


def test_demo2_index_template_content(client):
    """Test demo2 index template contains expected content."""
    response = client.get('/demo2/')
    assert response.status_code == 200
    assert b'Personal info' in response.data
    assert b'Login & Security' in response.data
    assert b'Billing & Payments' in response.data
    assert b'Members, Teams & Roles' in response.data
    assert b'My Balance' in response.data


def test_demo2_dynamic_page_fallback(client):
    """Test demo2 dynamic page routing fallback."""
    response = client.get('/demo2/nonexistent')
    assert response.status_code == 200
    # Should fall back to index template
    assert b'Dashboard' in response.data


def test_demo2_header_navigation(client):
    """Test that header navigation is rendered."""
    response = client.get('/demo2/')
    assert response.status_code == 200
    assert b'Dashboard' in response.data


def test_main_routes_redirect(client):
    """Test main routes redirect properly."""
    response = client.get('/')
    assert response.status_code == 302  # Redirect to demo1

    response = client.get('/demo1')
    assert response.status_code == 302  # Redirect to demo1.index

    response = client.get('/demo2')
    assert response.status_code == 302  # Redirect to demo2.index