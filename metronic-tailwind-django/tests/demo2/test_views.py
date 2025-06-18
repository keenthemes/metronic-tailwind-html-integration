import pytest
from django.test import Client
from django.urls import reverse


@pytest.mark.django_db
class TestDemo2Routes:
    """Test suite for Demo2 route testing."""

    def setup_method(self):
        """Set up test client for each test method."""
        self.client = Client()

    def test_index_route_get(self):
        """Test GET request to index route."""
        url = reverse('demo2:index')
        response = self.client.get(url)

        assert response.status_code == 200
        assert 'demo2/index.html' in [t.name for t in response.templates]

    def test_index_route_resolves(self):
        """Test that index route resolves correctly."""
        url = reverse('demo2:index')
        assert url == '/demo2/'

    def test_index_route_context_exists(self):
        """Test that basic context exists in index route."""
        url = reverse('demo2:index')
        response = self.client.get(url)

        assert response.status_code == 200
        assert 'page_title' in response.context
        assert response.context['page_title'] == 'Dashboard'


class TestDemo2URLPatterns:
    """Test suite for Demo2 URL pattern configuration."""

    def test_app_name_configured(self):
        """Test that app_name is properly configured."""
        from apps.demo2 import urls
        assert hasattr(urls, 'app_name')
        assert urls.app_name == 'demo2'

    def test_urlpatterns_exist(self):
        """Test that URL patterns are defined."""
        from apps.demo2 import urls
        assert hasattr(urls, 'urlpatterns')
        assert len(urls.urlpatterns) > 0


@pytest.mark.django_db
class TestMainURLPatterns:
    """Test suite for main URL configuration."""

    def test_demo1_url_included(self):
        """Test that demo1 URLs are included in main URLconf."""
        url = reverse('demo1:index')
        assert url == '/'

    def test_demo2_url_included(self):
        """Test that demo2 URLs are included in main URLconf."""
        url = reverse('demo2:index')
        assert url == '/demo2/'

    def test_admin_url_exists(self):
        """Test that admin URL exists."""
        from django.urls import reverse
        admin_url = reverse('admin:index')
        assert admin_url == '/admin/'