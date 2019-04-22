from django.shortcuts import render
from rest_framework.views import APIView
from .models import Script

# View for the chat preview component
class ChatPreview(APIView):
    """
    API view used to modify the chat script json data
    so that it can be used by the React-Simple-Chatbot
    """
    def create_script(self, Script):
        queryset = self.get_queryset()
        # Modify the JSON
        print(Script)
