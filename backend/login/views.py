from rest_framework import generics
from rest_framework.response import Response
from rest_framework import status
from rest_framework.authtoken.models import Token
from rest_framework.decorators import api_view
from django.shortcuts import get_object_or_404
from django_countries import countries
from .serializer import RegisterSerializer, UserLoginSerializer
from .models import User


class UserRegisterView(generics.CreateAPIView):
    """ vista para registrarse en la plataforma """
    queryset = User.objects.all()
    serializer_class = RegisterSerializer


@api_view(['GET'])
def get_countries(_request):
    """ Convertimos las tuplas de django-countries en una lista de diccionarios para que react renderize los paises que django-countries tiene """
    lista_paises = [{"code": code, "name": str(
        name)} for code, name in countries]
    return Response(lista_paises)


@api_view(['POST'])
def sign_in(request):
    """ autenticacion de usuario en l aplataforma """
    email = request.data.get('email')
    password = request.data.get('password')

    user = get_object_or_404(User, email=email)

    if not user.check_password(password):
        return Response({'error': 'La contraseña es inválida'}, status=status.HTTP_401_UNAUTHORIZED)

    token, _ = Token.objects.get_or_create(user=user)

    serializer = UserLoginSerializer(instance=user)

    return Response({
        'token': token.key,
        'user': serializer.data
    }, status=status.HTTP_200_OK)
