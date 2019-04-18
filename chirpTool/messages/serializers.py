from rest_framework import serializers

from .models import Message, Script

class MessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Message
        fields = ('id', 'text', 'secondaryText', 'messageType', )

class ScriptSerializer(serializers.ModelSerializer):
    json_data = serializers.JSONField()
    class Meta:
        model = Script
        fields = ('id', 'json_data', )
