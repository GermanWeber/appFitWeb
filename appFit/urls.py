from django.urls import path
from . import views

urlpatterns = [
    path("", views.pagPrincipal, name="pagPrincipal"),
    path("", views.inicio, name="inicio"),
]
