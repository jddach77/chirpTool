from django.apps import AppConfig
from django.core.signals import request_finished

class MessagesConfig(AppConfig):
    name = 'messages'
    label = 'messagesconfigruation'
