from django.urls import path
from .views import UserRegisterView, sign_in,  get_countries

urlpatterns = [
    path('register/', UserRegisterView.as_view(), name='user-register'),
    path('sign_in/', sign_in, name='user_sign_in'),
    path('countries/', get_countries, name='get-countries'),
]
