from rest_framework import serializers
from .models import ProductFamilies, Claims, Filters, Values, Product
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