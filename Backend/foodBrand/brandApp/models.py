from django.db import models

# Create your models here.

class Category(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(blank=True)
    image = models.ImageField(
        upload_to='categories/',
        default='categories/default.jpg'
    )

    def __str__(self):
        return self.name
    
# TASTE MODEL
class Taste(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name
    

# Season Model
class Season(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name
    

#  PRODUCT MODEL
class Product(models.Model):
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    taste = models.ForeignKey(Taste, on_delete=models.SET_NULL , null=True)
    season = models.ForeignKey(Season, on_delete=models.SET_NULL, null=True)

    name = models.CharField(max_length=200)
    price = models.FloatField()
    description = models.TextField()
    image = models.ImageField(upload_to='products/')

    rating = models.FloatField(default=0)
    is_featured = models.BooleanField(default=False)
    is_available = models.BooleanField(default=True)

    def __str__(self):
        return self.name
    

# Contact

class Contact(models.Model):
    QUERY_TYPES = [
        ('order','Order'),
        ('complaint','Complaint'),
        ('general','General'),
    ]

    name = models.CharField(max_length=100)
    email = models.EmailField()
    query_type = models.CharField(max_length=20, choices=QUERY_TYPES)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
    

