import datetime
from django.db import models
from django.utils import timezone
from django.contrib import admin


class Book(models.Model):
    book_text = models.CharField(max_length=60,default='')
    loan_date = models.CharField(max_length=60,default='')
    url_image = models.CharField(max_length=200,default='')
    name_user = models.CharField(max_length=60,default='')
    description = models.CharField(max_length=20000,default='')

    def __str__(self):
        return self.book_text

    @admin.display(
        boolean=True,
        ordering='Date',
        description='Published recently?',
    )
    
    def was_published_recently(self):
        return self.loan_date >= timezone.now() - datetime.timedelta(days=1)



    