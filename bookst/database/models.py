from django.db import models
from django.utils import timezone

import datetime


class Book(models.Model):
    book_text = models.CharField(max_length=60)
    loan_date = models.DateTimeField('Loan Date')
    url_image = models.CharField(max_length=200)
    name_user = models.CharField(max_length=60)

    def __str__(self):
        return self.book_text
    def was_published_recently(self):
        return self.loan_date >= timezone.now() - datetime.timedelta(days=1)


class Choice(models.Model):
    book = models.ForeignKey(Book, on_delete=models.CASCADE, null=True)
    choice_text = models.CharField(max_length=200)

    def __str__(self):
        return self.choice_text
    