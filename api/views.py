from django.shortcuts import render
from rest_framework import generics, status, permissions
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import FiltersSerializer, ProductFamiliesSerializer, ClaimsSerializer, ValuesSerializer, ProductSerializer
from .models import Filters, ProductFamilies, Claims, Values, Product
from django.http import HttpResponse
import os
# Create your views here.


class ProductFamiliesView(generics.CreateAPIView):
    queryset = ProductFamilies.objects.all()
    serializer_class = ProductFamiliesSerializer

class GetProductFamiliesView(APIView):
    serializer_class = ProductFamiliesSerializer

    def get(self, request, format=None):
        product_families_id = request.GET.get('id')
        product_result = ProductFamilies.objects.filter(id=product_families_id)
        if (product_result.exists()):
            data = ProductFamiliesSerializer(product_result[0]).data
            return Response(data, status=status.HTTP_200_OK)
        return Response("Product family not found", status=status.HTTP_404_NOT_FOUND)

class CreateProductFamiliesView(APIView):

    def post(self, request, format=None):
        posts_serializer = ProductFamiliesSerializer(data=request.data)
        if posts_serializer.is_valid():
            posts_serializer.save()
            return Response(posts_serializer.data, status=status.HTTP_201_CREATED)
        else:
            print('error', posts_serializer.errors)
            return Response(posts_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class DeleteProductFamiliesView(APIView):

    def post(self, request, format=None):
        product_families_id = request.data['product_families_id']
        product_results = ProductFamilies.objects.filter(product_families_id=product_families_id)
        if product_results.exists():
            product = product_results[0]
            product.delete()
            return Response('Product deleted', status=status.HTTP_200_OK)
        return Response('Product not found', status=status.HTTP_404_NOT_FOUND)

class GetProductFamiliesListView(APIView):

    def get(self, request, format=None):
        products = ProductFamilies.objects.all()
        data = ProductFamiliesSerializer(products, many=True).data
        return Response(data, status=status.HTTP_200_OK)

class UpdateProductFamiliesView(APIView):

    def patch(self, request, format=None):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            product_families_id = serializer.data.get('product_families_id')
            name = serializer.data.get('name')
            title = serializer.data.get('title')

            product_result = ProductFamilies.objects.filter(product_families_id=product_families_id)
            if not product_result.exists():
                return Response({'msg': 'Product not found'}, status=status.HTTP_404_NOT_FOUND)
            
            product = product_result[0]
            if (name == None):
                name = ""
            product.name = name
            if (title == None):
                title = ""
            product.name = title
            product.save(update_fields=['name', 'title'])
            return Response(ProductFamiliesSerializer(product).data, status=status.HTTP_200_OK)
        return Response({'Bad Request': 'Invalid Data...'}, status=status.HTTP_400_BAD_REQUEST)


class ClaimsView(generics.CreateAPIView):
    queryset = Claims.objects.all()
    serializer_class = ClaimsSerializer

class GetClaimsView(APIView):
    serializer_class = ClaimsSerializer

    def get(self, request, format=None):
        claims_id = request.GET.get('claims_id')
        product_result = Claims.objects.filter(claims_id=claims_id)
        if (product_result.exists()):
            data = ClaimsSerializer(product_result[0]).data
            return Response(data, status=status.HTTP_200_OK)
        return Response("Claim not found", status=status.HTTP_404_NOT_FOUND)

class CreateClaimsView(APIView):

    def post(self, request, format=None):
        posts_serializer = ClaimsSerializer(data=request.data)
        if posts_serializer.is_valid():
            posts_serializer.save()
            return Response(posts_serializer.data, status=status.HTTP_201_CREATED)
        else:
            print('error', posts_serializer.errors)
            return Response(posts_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class DeleteClaimsView(APIView):

    def post(self, request, format=None):
        claims_id = request.data['claims_id']
        product_results = Claims.objects.filter(claims_id=claims_id)
        if product_results.exists():
            product = product_results[0]
            product.delete()
            return Response('Claim deleted', status=status.HTTP_200_OK)
        return Response('Claim not found', status=status.HTTP_404_NOT_FOUND)

class GetClaimsListView(APIView):

    def get(self, request, format=None):
        products = Claims.objects.all()
        data = ClaimsSerializer(products, many=True).data
        return Response(data, status=status.HTTP_200_OK)

class UpdateClaimsView(APIView):

    def patch(self, request, format=None):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            claims_id = serializer.data.get('claims_id')
            name = serializer.data.get('name')

            product_result = Claims.objects.filter(claims_id=claims_id)
            if not product_result.exists():
                return Response({'msg': 'Claim not found'}, status=status.HTTP_404_NOT_FOUND)
            
            product = product_result[0]
            if (name == None):
                name = ""
            product.name = name
            product.save(update_fields=['name'])
            return Response(ClaimsSerializer(product).data, status=status.HTTP_200_OK)
        return Response({'Bad Request': 'Invalid Data...'}, status=status.HTTP_400_BAD_REQUEST)

class FiltersView(generics.CreateAPIView):
    queryset = Filters.objects.all()
    serializer_class = FiltersSerializer

class GetFiltersView(APIView):
    serializer_class = FiltersSerializer

    def get(self, request, format=None):
        filters_id = request.GET.get('id')
        product_result = Filters.objects.filter(id=filters_id)
        if (product_result.exists()):
            data = FiltersSerializer(product_result[0]).data
            return Response(data, status=status.HTTP_200_OK)
        return Response("Filter not found", status=status.HTTP_404_NOT_FOUND)

class GetFiltersByProductFamilyView(APIView):
    serializer_class = FiltersSerializer

    def get(self, request, format=None):
        product_families_id = request.GET.get('productFamily')
        product_result = Filters.objects.filter(product_family=product_families_id)
        if (product_result.exists()):
            data = FiltersSerializer(product_result, many=True).data
            return Response(data, status=status.HTTP_200_OK)
        return Response([], status=status.HTTP_200_OK)

class CreateFiltersView(APIView):

    def post(self, request, format=None):
        posts_serializer = FiltersSerializer(data=request.data)
        if posts_serializer.is_valid():
            posts_serializer.save()
            return Response(posts_serializer.data, status=status.HTTP_201_CREATED)
        else:
            print('error', posts_serializer.errors)
            return Response(posts_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class DeleteFiltersView(APIView):

    def post(self, request, format=None):
        filters_id = request.data['id']
        product_results = Filters.objects.filter(id=filters_id)
        if product_results.exists():
            product = product_results[0]
            product.delete()
            return Response('Filters deleted', status=status.HTTP_200_OK)
        return Response('Filters not found', status=status.HTTP_404_NOT_FOUND)

class GetFiltersListView(APIView):

    def get(self, request, format=None):
        products = Filters.objects.all()
        data = FiltersSerializer(products, many=True).data
        return Response(data, status=status.HTTP_200_OK)


class UpdateFiltersView(APIView):

    def patch(self, request, format=None):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            filters_id = serializer.data.get('filters_id')
            name = serializer.data.get('name')

            product_result = Filters.objects.filter(filters_id=filters_id)
            if not product_result.exists():
                return Response({'msg': 'Filter not found'}, status=status.HTTP_404_NOT_FOUND)
            
            product = product_result[0]
            if (name == None):
                name = ""
            product.name = name
            product.save(update_fields=['name'])
            return Response(FiltersSerializer(product).data, status=status.HTTP_200_OK)
        return Response({'Bad Request': 'Invalid Data...'}, status=status.HTTP_400_BAD_REQUEST)



class ValuesView(generics.CreateAPIView):
    queryset = Values.objects.all()
    serializer_class = ValuesSerializer

class GetValuesView(APIView):
    serializer_class = ValuesSerializer

    def get(self, request, format=None):
        filters_id = request.GET.get('filters_id')
        product_result = Values.objects.filter(filters_id=filters_id)
        if (product_result.exists()):
            data = ValuesSerializer(product_result, many=True).data
            return Response(data, status=status.HTTP_200_OK)
        return Response("Value not found", status=status.HTTP_404_NOT_FOUND)

class GetValuesByFiltersView(APIView):
    serializer_class = FiltersSerializer

    def get(self, request, format=None):
        filters_id = request.GET.get('filter')
        product_result = Values.objects.filter(filter=filters_id)
        if (product_result.exists()):
            data = ValuesSerializer(product_result, many=True).data
            return Response(data, status=status.HTTP_200_OK)
        return Response([], status=status.HTTP_200_OK)

class CreateValuesView(APIView):

    def post(self, request, format=None):
        posts_serializer = ValuesSerializer(data=request.data)
        if posts_serializer.is_valid():
            posts_serializer.save()
            return Response(posts_serializer.data, status=status.HTTP_201_CREATED)
        else:
            print('error', posts_serializer.errors)
            return Response(posts_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class DeleteValuesView(APIView):

    def post(self, request, format=None):
        values_id = request.data['values_id']
        product_results = Values.objects.filter(values_id=values_id)
        if product_results.exists():
            product = product_results[0]
            product.delete()
            return Response('Values deleted', status=status.HTTP_200_OK)
        return Response('Values not found', status=status.HTTP_404_NOT_FOUND)

class GetValuesListView(APIView):

    def get(self, request, format=None):
        products = Values.objects.all()
        data = ValuesSerializer(products, many=True).data
        return Response(data, status=status.HTTP_200_OK)


class UpdateValuesView(APIView):

    def patch(self, request, format=None):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            values_id = serializer.data.get('values_id')
            name = serializer.data.get('name')

            product_result = Values.objects.filter(values_id=values_id)
            if not product_result.exists():
                return Response({'msg': 'Filter not found'}, status=status.HTTP_404_NOT_FOUND)
            
            product = product_result[0]
            if (name == None):
                name = ""
            product.name = name
            product.save(update_fields=['name'])
            return Response(ValuesSerializer(product).data, status=status.HTTP_200_OK)
        return Response({'Bad Request': 'Invalid Data...'}, status=status.HTTP_400_BAD_REQUEST)

class CreateProductView(APIView):

    def post(self, request, format=None):
        posts_serializer = ProductSerializer(data=request.data)
        if posts_serializer.is_valid():
            posts_serializer.save()
            return Response(posts_serializer.data, status=status.HTTP_201_CREATED)
        else:
            print('error', posts_serializer.errors)
            return Response(posts_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class GetProductsListView(APIView):

    def get(self, request, format=None):
        products = Product.objects.all()
        data = ProductSerializer(products, many=True).data
        return Response(data, status=status.HTTP_200_OK)

class DeleteProductView(APIView):

    def post(self, request, format=None):
        id = request.data['id']
        product_results = Product.objects.filter(id=id)
        if product_results.exists():
            product = product_results[0]
            os.remove(product.image.path)
            product.delete()
            return Response('Product deleted', status=status.HTTP_200_OK)
        return Response('Product not found', status=status.HTTP_404_NOT_FOUND)