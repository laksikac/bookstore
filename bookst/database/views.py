from django.shortcuts import render
from django.http import Http404
from django.http import HttpResponse

from .models import Book


def index(request):
      return HttpResponse("Hello, world. You're at the database index.")

def detail(request, book_id):
    return HttpResponse("You're looking at book %s." % book_id)
