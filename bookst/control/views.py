from django.db.models import Q
from control.serializers import ControlSerializer
from control.models import Control
from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from django.http.response import Http404
class ControlViewSet(viewsets.ModelViewSet):
    """
    This viewset automatically provides `list`, `create`, `retrieve`,
    `update` and `destroy` actions.

    Additionally we also provide an extra `highlight` action.
    """
    queryset = Control.objects.all()
    serializer_class = ControlSerializer
    
    
    @action(detail=False, methods=['GET'])
    def search(self, request, *args, **kwargs):
        search_post = request.GET.get('_name')
        if search_post or search_post =='':
            try:
                dataSet = self.queryset.filter(Q(name__icontains=search_post))
            except Control.DoesNotExist:
                raise Http404('Heroes does not exist')
        else:
            dataSet= self.queryset.all()
        heroes = self.serializer_class(dataSet, many = True)
        return Response(heroes.data)