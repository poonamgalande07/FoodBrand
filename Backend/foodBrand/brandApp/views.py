from django.shortcuts import render
from rest_framework.generics import ListAPIView, RetrieveAPIView, CreateAPIView
from .models import Category,Product ,Taste,Season,Contact
from .serializers import CategorySerializer,ProductSerializer,SeasonSerializer,TasteSerializer,ContactSerializer

from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.response import Response
from rest_framework.decorators import api_view

from rest_framework import status

# Create your views here.

from .serializers import RegisterSerializer

@api_view(['POST'])
def register_view(request):
    serializer = RegisterSerializer(data=request.data)
    if serializer.is_valid():
        user = serializer.save()

        # create JWT token
        refresh = RefreshToken.for_user(user)
        return Response({
            "refresh": str(refresh),
            "access": str(refresh.access_token)
        })
    return Response(serializer.errors, status=400)





class CategoryListAPI(ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class TasteListAPI(ListAPIView):
    queryset = Taste.objects.all()
    serializer_class = TasteSerializer


class SeasonListAPI(ListAPIView):
    queryset = Season.objects.all()
    serializer_class = SeasonSerializer


class ProductListAPI(ListAPIView):
    queryset = Product.objects.filter(is_available=True)
    serializer_class = ProductSerializer


class FeaturedProductAPI(ListAPIView):
    queryset = Product.objects.filter(is_featured=True)
    serializer_class = ProductSerializer


class ProductDetailAPI(RetrieveAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


class ContactCreateAPI(CreateAPIView):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer
    # permission_classes = [IsAuthenticated]


# from rest_framework.generics import CreateAPIView
# from rest_framework.permissions import IsAuthenticated
# from django.core.mail import send_mail
# from .models import Contact
# from .serializers import ContactSerializer

# class ContactCreateAPI(CreateAPIView):
#     queryset = Contact.objects.all()
#     serializer_class = ContactSerializer
#     permission_classes = [IsAuthenticated]

#     def perform_create(self, serializer):

#         # Login user data auto set ...
#         contact = serializer.save(
#             name=self.request.user.username,
#             email=self.request.user.email
#         )

#         # send email to admin
#         send_mail(
#             subject=f"New {contact.query_type} Query",
#             message=contact.message,
#             from_email=self.request.user.email,
#             recipient_list=['galandep02@gmail.com'],  # admin email
#             fail_silently=False,
#         )


# ================================================================

from rest_framework import generics, permissions
from django.contrib.auth.models import User
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.permissions import IsAuthenticated
from .models import Job, JobApplication
from .serializers import (
    RegisterSerializer,
    JobSerializer,
    JobApplicationSerializer
)

class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = RegisterSerializer


class JobListView(generics.ListAPIView):
    queryset = Job.objects.all()
    serializer_class = JobSerializer


class ApplyJobView(generics.CreateAPIView):
    serializer_class = JobApplicationSerializer
    # permission_classes = [permissions.IsAuthenticated]
    # permission_classes = [IsAuthenticated]
    permission_classes = []


    def perform_create(self, serializer):
        serializer.save(user=self.request.user)






















# from rest_framework.decorators import api_view
# from rest_framework.response import Response
# from rest_framework import status
# from django.core.mail import send_mail
# from django.conf import settings
# from django.views.decorators.csrf import csrf_exempt


# @csrf_exempt                     
# @api_view(['POST'])
# def contact_view(request):
#     print("Data Received:", request.data)

#     name = request.data.get('name')
#     email = request.data.get('email')
#     subject = request.data.get('subject')
#     message = request.data.get('message')

#     #  Better validation
#     if not all([name, email, message]):
#         return Response(
#             {"error": "Name, email and message are required"},
#             status=status.HTTP_400_BAD_REQUEST
#         )

#     full_message = f"""
# Name: {name}
# Email: {email}

# Message:
# {message}
# """

#     send_mail(
#         subject if subject else "New Contact Message",
#         full_message,
#         settings.EMAIL_HOST_USER,        # from
#         [settings.EMAIL_HOST_USER],      # to (your mail)
#         fail_silently=False,
#     )

#     return Response(
#         {"success": "Message sent successfully"},
#         status=status.HTTP_200_OK
#     )