from rest_framework import viewsets, permissions

from .models import Message
from .serializers import MessageSerializer

class MessageViewSet(viewsets.ModelViewSet):
    queryset = Message.objects.all()
    permission_classes = [permissions.AllowAny, ]
    serializer_class = MessageSerializer
