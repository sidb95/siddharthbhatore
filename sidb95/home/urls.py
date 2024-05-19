from django.urls import path, re_path
from . import views
from django.conf.urls.static import static
from django.conf import settings
import os

STATIC_ROOT = os.path.join(settings.BASE_DIR, "static/home")

app_name = 'home'
urlpatterns = [
	path('', views.index, name='index'),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
