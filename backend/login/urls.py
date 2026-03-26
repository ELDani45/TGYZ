from django.urls import path
from .views import UserRegisterView, get_countries

urlpatterns = [
    path('register/', UserRegisterView.as_view(), name='user-register'),
    path('countries/', get_countries, name='get-countries'),
]
