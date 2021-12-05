from rest_framework import serializers

from control.models import Book

class ControlSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = ['id', 'book_text', 'loan_date', 'url_image', 'name_user', 'description']
