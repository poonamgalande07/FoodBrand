from django.urls import path
from .views import (
    CategoryListAPI,
    TasteListAPI,SeasonListAPI,ProductDetailAPI,
    ProductListAPI,FeaturedProductAPI,ContactCreateAPI
)

urlpatterns = [
    path('catagories/',CategoryListAPI.as_view(), name='category-list'),
    path('taste/',TasteListAPI.as_view(), name='taste-list'),
    path('season/',SeasonListAPI.as_view(), name='season-list'),

    path('products/',ProductListAPI.as_view(), name='product-list'),
    path('products/<int:pk>/',ProductDetailAPI.as_view(), name='product-deatil'),
    path('featured-products/',FeaturedProductAPI.as_view(), name='featured-products'),

    # contact
    path('contact/',ContactCreateAPI.as_view(), name='contact-create'),


]