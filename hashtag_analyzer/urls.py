from django.conf.urls import url
from django.contrib import admin

import views
import twitterapi_client.views
import alchemyapi_client.views


urlpatterns = [
    url(r'^$', views.index, name='index'),

    url(r'^analyze/(?P<query>[\w-]+)/$', views.analyze, name='analyze'),

    url(r'^get_tweets/(?P<query>[\w-]+)/$', twitterapi_client.views.get, name='get_tweets'),

    url(r'^get_analysis/$', alchemyapi_client.views.analyze, name='get_analysis'),

    url(r'^admin/', admin.site.urls),
]
