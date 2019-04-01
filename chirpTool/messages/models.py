from django.db import models

# Create your models here.
class Message(models.Model):
    messageType = models.CharField(max_length=70)
    text = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.text
