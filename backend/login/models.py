from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.contrib.auth.models import AbstractUser
from django_countries.fields import CountryField


class User(AbstractUser):
    country = CountryField(blank_label='(seleccionar país)')


class Profile(models.Model):
    user = models.OneToOneField(
        User, on_delete=models.CASCADE, related_name='profile')
    biography = models.TextField(max_length=200, blank=True)
    social_network = models.URLField(max_length=200, blank=True)
    photo_profile = models.FileField(
        upload_to='perfiles/%Y/%m/%d/', blank=True, null=True)

    age = models.PositiveIntegerField(null=True, blank=True)

    objects = models.Manager()


@receiver(post_save, sender=User)
def manage_user_profile(instance, created, **kwargs):
    """Create a Profile instance when a new User is created."""
    if created:
        Profile.objects.create(user=instance)
