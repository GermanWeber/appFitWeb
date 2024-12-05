from django.shortcuts import render

# Create your views here.


def pagPrincipal(request):
    return render(request, "appFit/index.html")


def inicio(request):
    user_agent = request.META["HTTP_USER_AGENT"]
    is_mobile = any(
        device in user_agent.lower()
        for device in [
            "iphone",
            "android",
            "ipad",
            "ipod",
            "blackberry",
            "iemobile",
            "opera mini",
        ]
    )
    return render(request, "index.html", {"is_mobile": is_mobile})
