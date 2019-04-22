from django.db import models
from jsonfield import JSONField

# Message Django DB model.
class Message(models.Model):
    message = models.CharField(max_length=255)
    secondaryText = models.CharField(max_length=255, blank=True, null=True)
    messageType = models.CharField(max_length=70)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.message

# Chatscript DB model.
class Script(models.Model):
    json_data = JSONField()
