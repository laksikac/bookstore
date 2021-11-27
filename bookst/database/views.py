from django.shortcuts import render
from django.http import Http404

from .models import Book


def index(request):
    latest_book_list = Book.objects.order_by('-pub_date')[:5]
    context = {'latest_book_list': latest_book_list}
    return render(request, 'database/index.html', context)

def detail(request, book_id):
    try:
        book = Book.objects.get(pk=book_id)
    except Book.DoesNotExist:
        raise Http404("Book does not exist")
    return render(request, 'database/detail.html', {'Book': book})
