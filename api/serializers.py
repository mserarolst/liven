from rest_framework import serializers
from .models import ProductFamilies, Claims, Filters, Values, Product, Page, Text, Image
from django.contrib.auth.models import User
from django.contrib.auth import authenticate

class ProductFamiliesSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductFamilies
        fields = ('id', 'name', 'title')

class ClaimsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Claims
        fields = ('id', 'name', 'title')

class FiltersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Filters
        fields = ('id', 'name', 'product_family')

class ValuesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Values
        fields = ('id', 'name', 'filter')

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ('id', 'name', 'description', 'image', 'product_family', 'claim', 'filter', 'value')

class PageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Page
        fields = ('id', 'name')

class TextSerializer(serializers.ModelSerializer):
    class Meta:
        model = Text
        fields = ('id', 'name', 'content', 'page')

class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Image
        fields = ('id', 'name', 'content', 'page')