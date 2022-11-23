from django.db import models
import string
import random
import datetime
from django.utils.translation import gettext_lazy as _

def upload_to(instance, filename):
    return 'post_images/{filename}'.format(filename=filename)

# Create your models here.

class ProductFamilies(models.Model):
    name = models.CharField(max_length=240, default="")
    title = models.CharField(max_length=240, default="Product Families")

    def __str__(self):
        return "%s %s" % (self.name, self.title)

class Claims(models.Model):
    name = models.CharField(max_length=240, default="")
    title = models.CharField(max_length=240, default="Claims")

    def __str__(self):
        return "%s %s" % (self.name, self.title)

class Filters(models.Model):
    name = models.CharField(max_length=240, default="")
    product_family = models.ForeignKey(ProductFamilies, on_delete=models.CASCADE)

    def __str__(self):
        return self.name

    class Meta:
        ordering = ['name']

class Values(models.Model):
    name = models.CharField(max_length=240, default="")
    filter = models.ForeignKey(Filters, on_delete=models.CASCADE)

class Product(models.Model):
    name = models.CharField(max_length=240, default="")
    description = models.CharField(max_length=2048, default="")
    image = models.ImageField(_("Image"), upload_to=upload_to, default="post_images/default.jpg")
    product_family = models.ForeignKey(ProductFamilies, on_delete=models.CASCADE)
    claim = models.ForeignKey(Claims, on_delete=models.CASCADE)
    filter = models.ForeignKey(Filters, on_delete=models.CASCADE)

    class Meta:
        ordering = ['name']
