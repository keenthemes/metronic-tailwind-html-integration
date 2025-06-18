from django.shortcuts import render
from django.views.generic import TemplateView
from typing import Dict, Any


class IndexView(TemplateView):
    """Main dashboard view for demo1 with hardcoded data."""

    template_name = 'demo1/index.html'

    def get_context_data(self, **kwargs) -> Dict[str, Any]:
        context = super().get_context_data(**kwargs)

        # Hardcoded dashboard data
        context.update({
            'page_title': 'Dashboard',
            'page_description': 'Central Hub for Personal Customization',
        })

        return context
