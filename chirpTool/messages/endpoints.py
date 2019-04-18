from django.conf.urls import include, url
from rest_framework import routers

from .api import MessageViewSet, ScriptViewSet

router = routers.DefaultRouter()
router.register('messages', MessageViewSet)
router.register('scripts', ScriptViewSet)

urlpatterns = [
    url("^", include(router.urls)),
]
