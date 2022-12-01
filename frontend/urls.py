from django.urls import path
from .views import index

urlpatterns = [
    path('', index),
    path('products', index),
    path('sustainability', index),
    path('administracio', index),
    path('administracio/product-families', index),
    path('administracio/product-families/nou', index),
    path('administracio/product-families/<id>/filters', index),
    path('administracio/product-families/<id>/filter/nou', index),
    path('administracio/claims', index),
    path('administracio/claims/nou', index),
    path('administracio/product-families/<id_pf>/filters/<id_f>/value', index),
    path('administracio/product-families/<id_pf>/filters/<id_f>/value/nou', index),
    path('administracio/product-families/<id_pf>/filters/<id_f>/value/<id_v>/products', index),
    path('administracio/product-families/<id_pf>/filters/<id_f>/value/<id_v>/products/nou', index),
    path('administracio/products', index),
    path('administracio/products/nou', index),
    path('administracio/pages', index),
    path('administracio/pages/<id>', index),
]