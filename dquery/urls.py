from django.conf.urls.defaults import patterns, url
from .views import url_reverse

urlpatterns = patterns('',
    url(r'^$', url_reverse, name='dquery-urlreverse'),
)