from django.db import models
from django.contrib.auth.models import User
from typing import Optional
from datetime import datetime


class Project(models.Model):
    """Project model for demo2 dashboard."""

    name: str = models.CharField(max_length=200)
    description: str = models.TextField(blank=True)
    status: str = models.CharField(max_length=50, choices=[
        ('planning', 'Planning'),
        ('active', 'Active'),
        ('completed', 'Completed'),
        ('on_hold', 'On Hold'),
    ], default='planning')
    progress: int = models.IntegerField(default=0)
    budget: float = models.DecimalField(max_digits=12, decimal_places=2, default=0.00)
    start_date: datetime = models.DateField()
    end_date: datetime = models.DateField(null=True, blank=True)
    created_at: datetime = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self) -> str:
        return self.name


class Client(models.Model):
    """Client model for demo2 dashboard."""

    name: str = models.CharField(max_length=200)
    email: str = models.EmailField()
    phone: str = models.CharField(max_length=20, blank=True)
    company: str = models.CharField(max_length=200, blank=True)
    address: str = models.TextField(blank=True)
    avatar: str = models.CharField(max_length=200, blank=True)
    created_at: datetime = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['name']

    def __str__(self) -> str:
        return self.name


class Task(models.Model):
    """Task model for demo2 dashboard."""

    project: 'Project' = models.ForeignKey(Project, on_delete=models.CASCADE, related_name='tasks')
    title: str = models.CharField(max_length=200)
    description: str = models.TextField(blank=True)
    assignee: Optional[User] = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True)
    status: str = models.CharField(max_length=50, choices=[
        ('todo', 'To Do'),
        ('in_progress', 'In Progress'),
        ('review', 'Under Review'),
        ('done', 'Done'),
    ], default='todo')
    priority: str = models.CharField(max_length=20, choices=[
        ('low', 'Low'),
        ('medium', 'Medium'),
        ('high', 'High'),
        ('urgent', 'Urgent'),
    ], default='medium')
    due_date: datetime = models.DateTimeField(null=True, blank=True)
    created_at: datetime = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self) -> str:
        return self.title


class Revenue(models.Model):
    """Revenue model for demo2 dashboard."""

    project: Optional['Project'] = models.ForeignKey(Project, on_delete=models.CASCADE, null=True, blank=True)
    client: Optional['Client'] = models.ForeignKey(Client, on_delete=models.CASCADE, null=True, blank=True)
    amount: float = models.DecimalField(max_digits=12, decimal_places=2)
    date: datetime = models.DateField()
    description: str = models.CharField(max_length=200, blank=True)

    class Meta:
        ordering = ['-date']

    def __str__(self) -> str:
        return f"${self.amount} - {self.date}"
