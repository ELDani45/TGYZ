from rest_framework import generics
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django_countries import countries
from .serializer import RegisterSerializer
from .models import User


class UserRegisterView(generics.CreateAPIView):  # para que solo permita POST
    queryset = User.objects.all()
    serializer_class = RegisterSerializer


@api_view(['GET'])
def get_countries(_request):
    # Convertimos las tuplas de django-countries en una lista de diccionarios para que react renderize los paises que django-countries tiene
    lista_paises = [{"code": code, "name": str(
        name)} for code, name in countries]
    return Response(lista_paises)
