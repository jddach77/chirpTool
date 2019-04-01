from django.conf.urls import include, url
from rest_framework import routers

from .api import MessageViewSet

router = routers.DefaultRouter()
router.register('messages', MessageViewSet)

urlpatterns = [
    url("^", include(router.urls)),
]
