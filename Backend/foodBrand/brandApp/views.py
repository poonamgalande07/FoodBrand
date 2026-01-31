from django.shortcuts import render
from rest_framework.generics import ListAPIView, RetrieveAPIView, CreateAPIView
from .models import Category,Product ,Taste,Season,Contact
from .serializers import CategorySerializer,ProductSerializer,SeasonSerializer,TasteSerializer,ContactSerializer

# Create your views here.

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