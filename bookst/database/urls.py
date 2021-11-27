from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
     # ex: /polls/
    # ex: /polls/5/
    path('<int:book_id>/', views.detail, name='detail'),
    
]