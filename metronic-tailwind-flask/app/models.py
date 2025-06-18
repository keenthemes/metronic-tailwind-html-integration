"""Simplified context for Metronic demo templates."""

def get_demo_context():
    """Get minimal context for demo templates."""
    return {
        'page_title': 'Dashboard',
        'current_user': {
            'name': 'Demo User',
            'email': 'demo@example.com'
        }
    }