from .serializer import RegisterSerializer
from .models import UserRegister
from rest_framework import viewsets
# Create your views here.


class UserRegisterView(viewsets.ModelViewSet):
    serializer_class = RegisterSerializer
    queryset = UserRegister.objects.all()
