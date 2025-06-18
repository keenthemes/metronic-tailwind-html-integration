import pytest
from django.test import Client
from django.urls import reverse


@pytest.mark.django_db
class TestDemo1Routes:
    """Test suite for Demo1 route testing."""

    def setup_method(self):
        """Set up test client for each test method."""
        self.client = Client()

    def test_index_route_get(self):
        """Test GET request to index route."""
        url = reverse('demo1:index')
        response = self.client.get(url)

        assert response.status_code == 200
        assert 'demo1/index.html' in [t.name for t in response.templates]

    def test_index_route_resolves(self):
        """Test that index route resolves correctly."""
        url = reverse('demo1:index')
        assert url == '/'

    def test_index_route_template_used(self):
        """Test that correct template is used for index route."""
        url = reverse('demo1:index')
        response = self.client.get(url)

        assert response.status_code == 200
        assert 'demo1/index.html' in [t.name for t in response.templates]

    def test_index_route_context_exists(self):
        """Test that basic context exists in index route."""
        url = reverse('demo1:index')
        response = self.client.get(url)

        assert response.status_code == 200
        assert 'page_title' in response.context
        assert response.context['page_title'] == 'Dashboard'


class TestDemo1URLPatterns:
    """Test suite for Demo1 URL pattern configuration."""

    def test_app_name_configured(self):
        """Test that app_name is properly configured."""
        from apps.demo1 import urls
        assert hasattr(urls, 'app_name')
        assert urls.app_name == 'demo1'

    def test_urlpatterns_exist(self):
        """Test that URL patterns are defined."""
        from apps.demo1 import urls
        assert hasattr(urls, 'urlpatterns')
        assert len(urls.urlpatterns) > 0