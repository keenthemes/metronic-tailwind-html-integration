from django.shortcuts import render
from django.views.generic import TemplateView
from typing import Dict, Any


class IndexView(TemplateView):
    """Main dashboard view for demo2 with hardcoded data."""

    template_name = 'demo2/index.html'

    def get_context_data(self, **kwargs) -> Dict[str, Any]:
        context = super().get_context_data(**kwargs)

        # Hardcoded dashboard data
        context.update({
            'page_title': 'Dashboard',
            'page_description': 'Project Management Overview',
        })

        return context
