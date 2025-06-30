from .views import main
from django.urls import path

urlpatterns = [
    path('', main),
    path('home',main),
]