from django.urls import path
from . import views

app_name = 'demo2'

urlpatterns = [
    path('', views.IndexView.as_view(), name='index'),
]