from django.contrib import admin
from .models import User
from django_countries.filters import CountryFilter


@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = ['username', 'email', 'country']
    list_filter = [('country', CountryFilter)]
    search_fields = ['username', 'country']
