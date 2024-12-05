from django.shortcuts import render

# Create your views here.


def pagPrincipal(request):
    return render(request, "appFit/index.html")
