from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.contrib.auth.models import AbstractUser
from django_countries.fields import CountryField


class User(AbstractUser):
    """ modelo de usuario """
    country = CountryField(blank_label='(seleccionar país)')


class Profile(models.Model):
    """ modelo de perfil de usuario """
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
    """Crea un perifl cuando la instancia User se crea ."""
    if created:
        Profile.objects.create(user=instance)
