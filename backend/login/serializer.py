from rest_framework import serializers
from django_countries.serializers import CountryFieldMixin
from .models import User


class RegisterSerializer(CountryFieldMixin, serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('__all__')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        return User.objects.create_user(**validated_data)
