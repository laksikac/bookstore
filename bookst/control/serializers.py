from rest_framework import serializers
from control.models import Control, LANGUAGE_CHOICES, STYLE_CHOICES

class ControlSerializer(serializers.ModelSerializer):
    class Meta:
        model = Control
        fields = ['id', 'title', 'code', 'linenos', 'language', 'style']