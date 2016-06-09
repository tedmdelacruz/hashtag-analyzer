from django.conf.urls import url
from django.contrib import admin

import views
import twitterapi_client.views

urlpatterns = [
    url(r'^$', views.index, name='index'),

    url(r'^get_tweets/', twitterapi_client.views.get, name='get_tweets'),

    url(r'^admin/', admin.site.urls),
]
