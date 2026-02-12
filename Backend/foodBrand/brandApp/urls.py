from django.urls import path
from .views import (
    CategoryListAPI,
    TasteListAPI,SeasonListAPI,ProductDetailAPI,
    ProductListAPI,FeaturedProductAPI,ContactCreateAPI
)

from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from .views import RegisterView, JobListView, ApplyJobView

urlpatterns = [
    path('catagories/',CategoryListAPI.as_view(), name='category-list'),
    path('taste/',TasteListAPI.as_view(), name='taste-list'),
    path('season/',SeasonListAPI.as_view(), name='season-list'),

    path('products/',ProductListAPI.as_view(), name='product-list'),
    path('products/<int:pk>/',ProductDetailAPI.as_view(), name='product-deatil'),
    path('featured-products/',FeaturedProductAPI.as_view(), name='featured-products'),

    # contact
    path('contact/',ContactCreateAPI.as_view(), name='contact-create'),

# =====================================================================

    path('register/', RegisterView.as_view()),
    path('login/', TokenObtainPairView.as_view()),
    path('token/refresh/', TokenRefreshView.as_view()),

    path('jobs/', JobListView.as_view()),
    path('apply/', ApplyJobView.as_view()),


]