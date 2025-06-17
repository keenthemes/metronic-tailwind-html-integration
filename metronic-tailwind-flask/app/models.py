"""Mock data models for template context."""
from datetime import datetime, timedelta
import random


class User:
    """Mock user data class."""
    def __init__(self, name, email, avatar=None, role="User"):
        self.name = name
        self.email = email
        self.avatar = avatar or "assets/media/avatars/300-1.jpg"
        self.role = role
        self.last_login = datetime.now() - timedelta(hours=random.randint(1, 24))


class Dashboard:
    """Mock dashboard data class."""
    def __init__(self):
        self.total_users = random.randint(1000, 5000)
        self.total_sales = random.randint(50000, 200000)
        self.total_orders = random.randint(500, 2000)
        self.conversion_rate = round(random.uniform(2.5, 8.5), 2)

    def get_chart_data(self):
        """Generate mock chart data."""
        return {
            'sales': [random.randint(1000, 5000) for _ in range(12)],
            'orders': [random.randint(50, 200) for _ in range(12)],
            'labels': ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        }


class Analytics:
    """Mock analytics data class."""
    def __init__(self):
        self.page_views = random.randint(10000, 50000)
        self.unique_visitors = random.randint(5000, 25000)
        self.bounce_rate = round(random.uniform(30, 70), 2)
        self.avg_session_duration = f"{random.randint(2, 8)}:{random.randint(10, 59):02d}"


def get_sample_user():
    """Get a sample user for template context."""
    return User(
        name="John Doe",
        email="john.doe@example.com",
        avatar="assets/media/avatars/300-1.jpg",
        role="Administrator"
    )


def get_dashboard_context():
    """Get dashboard context data."""
    dashboard = Dashboard()
    return {
        'dashboard': dashboard,
        'chart_data': dashboard.get_chart_data(),
        'user': get_sample_user()
    }


def get_analytics_context():
    """Get analytics context data."""
    return {
        'analytics': Analytics(),
        'user': get_sample_user()
    }