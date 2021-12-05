from django.urls import path, include
from rest_framework.routers import DefaultRouter
from control import views
from django.conf.urls import url
# Create a router and register our viewsets with it.
router = DefaultRouter()
router.register(r'control', views.ControlViewSet)


# The API URLs are now determined automatically by the router.
urlpatterns = [
    path('', include(router.urls)),
    url(r'^book/$',views.bookApi),
    url(r'^book/([0-9]+)$',views.bookApi),
]



