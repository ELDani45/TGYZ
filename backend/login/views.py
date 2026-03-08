from .serializer import RegisterSerializer
from .models import User
from rest_framework import viewsets
# Create your views here.


class UserRegisterView(viewsets.ModelViewSet):
    serializer_class = RegisterSerializer
    queryset = User.objects.all()
