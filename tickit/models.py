from django.db import models

# Create your models here.

class Venue(models.Model):
    name = models.CharField(max_length=100)
    location = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Event(models.Model):
    venue = models.ForeignKey(Venue, related_name='events', on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    event_date = models.DateTimeField()
    ticket_price = models.DecimalField(max_digits=6, decimal_places=2)

    def __str__(self):
        return f"{self.name} at {self.venue.name}"