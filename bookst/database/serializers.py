from rest_framework import serializers

from database.models import Book

class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = ['id', 'book_text', 'loan_date', 'url_image', 'name_user', 'description']