from django.urls import path, include
from .views import CreateFiltersView, CreateValuesView, DeleteFiltersView, DeleteValuesView, FiltersView, GetFiltersByProductFamilyView, GetFiltersListView, GetFiltersView, GetValuesByFiltersView, GetValuesListView, GetValuesView, ProductFamiliesView, CreateProductFamiliesView, DeleteProductFamiliesView, GetProductFamiliesView, GetProductFamiliesListView, UpdateFiltersView, UpdateProductFamiliesView, ClaimsView, CreateClaimsView, DeleteClaimsView, GetClaimsView, GetClaimsListView, UpdateClaimsView, UpdateValuesView, ValuesView, CreateProductView, GetProductsListView, DeleteProductView, SearchProductView, SearchProductByNameView

urlpatterns = [
    path('product-families', ProductFamiliesView.as_view()),
    path('create-product-families', CreateProductFamiliesView.as_view()),
    path('delete-product-families', DeleteProductFamiliesView.as_view()),
    path('get-product-families', GetProductFamiliesView.as_view()),
    path('get-product-families-list', GetProductFamiliesListView.as_view()),
    path('update-product-families', UpdateProductFamiliesView.as_view()),

    path('claims', ClaimsView.as_view()),
    path('create-claims', CreateClaimsView.as_view()),
    path('delete-claims', DeleteClaimsView.as_view()),
    path('get-claims', GetClaimsView.as_view()),
    path('get-claims-list', GetClaimsListView.as_view()),
    path('update-claims', UpdateClaimsView.as_view()),

    path('filters', FiltersView.as_view()),
    path('create-filters', CreateFiltersView.as_view()),
    path('delete-filters', DeleteFiltersView.as_view()),
    path('get-filters', GetFiltersView.as_view()),
    path('get-filters-by-product-families', GetFiltersByProductFamilyView.as_view()),
    path('get-filters-list', GetFiltersListView.as_view()),
    path('update-filters', UpdateFiltersView.as_view()),

    path('values', ValuesView.as_view()),
    path('create-values', CreateValuesView.as_view()),
    path('delete-values', DeleteValuesView.as_view()),
    path('get-values', GetValuesView.as_view()),
    path('get-values-by-filters', GetValuesByFiltersView.as_view()),
    path('get-values-list', GetValuesListView.as_view()),
    path('update-values', UpdateValuesView.as_view()),

    path('create-product', CreateProductView.as_view()),
    path('delete-product', DeleteProductView.as_view()),
    path('get-products-list', GetProductsListView.as_view()),
    path('search-products', SearchProductView.as_view()),
    path('search-products-by-name', SearchProductByNameView.as_view())
]