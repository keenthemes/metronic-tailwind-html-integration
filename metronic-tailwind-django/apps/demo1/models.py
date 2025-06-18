from django.db import models
from django.contrib.auth.models import User
from typing import Optional
from datetime import datetime


class Team(models.Model):
    """Team model for demo1 dashboard."""

    name: str = models.CharField(max_length=200)
    description: str = models.TextField(blank=True)
    rating: float = models.FloatField(default=0.0)
    created_at: datetime = models.DateTimeField(auto_now_add=True)
    updated_at: datetime = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self) -> str:
        return self.name


class TeamMember(models.Model):
    """Team member model for demo1 dashboard."""

    team: 'Team' = models.ForeignKey(Team, on_delete=models.CASCADE, related_name='members')
    user: Optional[User] = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True)
    name: str = models.CharField(max_length=100)
    email: str = models.EmailField()
    role: str = models.CharField(max_length=100, default='Member')
    avatar: str = models.CharField(max_length=200, blank=True)
    joined_at: datetime = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['name']

    def __str__(self) -> str:
        return f"{self.name} ({self.team.name})"


class SalesData(models.Model):
    """Sales data model for demo1 dashboard."""

    source: str = models.CharField(max_length=100)
    amount: float = models.DecimalField(max_digits=10, decimal_places=2)
    percentage_change: float = models.FloatField()
    date: datetime = models.DateField()

    class Meta:
        ordering = ['-date']

    def __str__(self) -> str:
        return f"{self.source}: ${self.amount}"


class Meeting(models.Model):
    """Meeting model for demo1 dashboard."""

    title: str = models.CharField(max_length=200)
    description: str = models.TextField(blank=True)
    start_time: datetime = models.DateTimeField()
    end_time: datetime = models.DateTimeField()
    location: str = models.CharField(max_length=200, blank=True)
    meeting_url: str = models.URLField(blank=True)
    attendees: models.QuerySet = models.ManyToManyField(TeamMember, blank=True)

    class Meta:
        ordering = ['start_time']

    def __str__(self) -> str:
        return self.title
