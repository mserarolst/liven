from django.urls import path
from .views import index

urlpatterns = [
    path('', index),
    path('products', index),
    path('administracio', index),
    path('administracio/product-families', index),
    path('administracio/product-families/nou', index),
    path('administracio/product-families/<id>', index),
    path('administracio/product-families/<id>/nou', index),
    path('administracio/claims', index),
    path('administracio/claims/nou', index),
    path('administracio/product-families/filter/<id>', index),
    path('administracio/product-families/filter/<id>/nou', index),
    path('administracio/filters/value/<id>', index),
    path('administracio/filters/value/<id>/nou', index),
    path('administracio/products', index),
    path('administracio/products/nou', index),
]