from typing import Generic
from rest_framework import generics
from rest_framework.response import Response
from .serializers import UserSignUpSerializer, UserSerializer, UserSignInSerializer
from .models import User
from .mixins import CustomLoginRequiredMixin

# Create your views here.


class UserSignUp(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSignUpSerializer


class UserSignIn(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSignInSerializer


class UserCheckLogin(CustomLoginRequiredMixin, generics.RetrieveAPIView):

    def get(self, request, *args, **kwargs):
        serializers = UserSerializer([request.login_user], many=True)
        return Response(serializers.data[0])


class UserList(CustomLoginRequiredMixin, generics.ListAPIView):
    queryset = User.objects.all()[:20]
    serializer_class = UserSerializer
