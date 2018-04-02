"""back_end URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include, re_path
from django.views.generic.base import TemplateView

from rest_framework import routers, serializers, viewsets
from pizza_maker.models import Topping, Pizza


class ToppingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Topping
        fields = ('id', 'name', 'on_pizzas')


class PizzaSerializer(serializers.ModelSerializer):
    # toppings = serializers.RelatedField(source='toppings.name', many=True, read_only=True)

    class Meta:
        model = Pizza
        fields = ('id', 'name', '_toppings')


class ToppingViewSet(viewsets.ModelViewSet):
    queryset = Topping.objects.all()
    serializer_class = ToppingSerializer


class PizzaViewSet(viewsets.ModelViewSet):
    queryset = Pizza.objects.all()
    serializer_class = PizzaSerializer


router = routers.DefaultRouter()
router.register(r'topping', ToppingViewSet)
router.register(r'pizza', PizzaViewSet)


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    re_path(r'.*', TemplateView.as_view(template_name='pizza_maker/index.html'), name='home')
]
