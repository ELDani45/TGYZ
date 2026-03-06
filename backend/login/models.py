from django.db import models
from django_countries.fields import CountryField

# Create your models here.


class UserRegister(models.Model):
    username = models.TextField(max_length=20)
    email = models.EmailField()
    password = models.CharField(max_length=16)
    country = CountryField()
