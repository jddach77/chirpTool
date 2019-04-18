from rest_framework import viewsets, permissions

from .models import Message, Script
from .serializers import MessageSerializer, ScriptSerializer

class MessageViewSet(viewsets.ModelViewSet):
    queryset = Message.objects.all()
    permission_classes = [permissions.AllowAny, ]
    serializer_class = MessageSerializer

class ScriptViewSet(viewsets.ModelViewSet):
    queryset = Script.objects.all()
    permission_classes = [permissions.AllowAny, ]
    serializer_class = ScriptSerializer
    def get_serializer(self, *args, **kwargs):
        if "data" in kwargs:
            data = kwargs["data"]

            if isinstance(data, list):
                kwargs["many"] = True

        return super(ScriptViewSet, self).get_serializer(*args, **kwargs)
