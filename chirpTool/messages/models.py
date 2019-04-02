from django.db import models

# Create your models here.
class Message(models.Model):
    text = models.CharField(max_length=255)
    messageType = models.CharField(max_length=70)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.text
