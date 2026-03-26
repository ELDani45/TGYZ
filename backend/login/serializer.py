""" Serializador para el modelo de User(usuario) """
from rest_framework import serializers
# este [vCountryFieldMixin ] ayuda a DRF a que los datos se pasen correctamente a formato JSON debido a que por defecto django_countries pasa un objeto complejo que DRf no sabe convertir a JSON
from django_countries.serializers import CountryFieldMixin
from .models import User


class RegisterSerializer(CountryFieldMixin, serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('__all__')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        return User.objects.create_user(**validated_data)
