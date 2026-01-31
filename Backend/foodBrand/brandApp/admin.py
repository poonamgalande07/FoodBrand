from django.contrib import admin
from .models import Category, Product,Taste,Season,Contact

# Register your models here.

admin.site.register(Category)
admin.site.register(Taste)
admin.site.register(Season)

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = (
        'name','price','category',
        'taste','season',
        'is_featured','is_available'
    )
    list_filter = ('category','taste','season','is_featured')
    search_fields = ('name',)


@admin.register(Contact)
class ContactAdmin(admin.ModelAdmin):
    list_display = ('name','email','query_type','created_at')