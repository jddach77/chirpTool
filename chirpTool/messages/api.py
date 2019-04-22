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
            for row in data['json_data']:
                if row['messageType'] == 'link':
                    row['message'] = '<a href="' + row['secondaryText'] + '">' + row['message'] + '</a>'
                    del row['secondaryText']
                    del row['messageType']
                elif row['messageType'] == 'image':
                    row['component'] = '<div><img src="' + row['secondaryText'] + '/></div>'
                    del row['secondaryText']
                    del row['messageType']
                else:
                    del row['secondaryText']
                    del row['messageType']
            for row in data['json_data'][:-1]:
                row['trigger'] = row['id'] + 1
            if isinstance(data, list):
                kwargs["many"] = True
        return super(ScriptViewSet, self).get_serializer(*args, **kwargs)
