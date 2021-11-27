from django.contrib import admin

from .models import Book

class BookAdmin(admin.ModelAdmin):
    fieldsets = [
        (None,                    {'fields': ['book_text']}),
        ('Loan Date information', {'fields': ['loan_date']}),
        ('URL Image',             {'fields': ['url_image']}),
        ('Name User',             {'fields': ['name_user']}),
    ]


admin.site.register(Book, BookAdmin)