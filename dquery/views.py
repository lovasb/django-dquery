import pickle
from django import http
from django.conf import settings
from django.core import urlresolvers
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
def url_reverse(request):
    if (settings.DEBUG == False) and (request.is_ajax() == False):
        # If not DEBUG, we don't enable the non ajax request.
        raise http.Http404('Non ajax query')
    if request.method in ('GET', 'POST'):
        url_name = request.GET.get('url', None)
        if not url_name:
            raise http.Http404('Please specify the reverse url name!')
        try:
            path = urlresolvers.reverse(url_name, args=request.GET.getlist('url_args[]'))
            (view_func, args, kwargs) = urlresolvers.resolve(path)
            return view_func(request, *args, **kwargs)
        except urlresolvers.NoReverseMatch:
            raise http.Http404('URL not found')
    return http.HttpResponseNotAllowed(('GET', 'POST'))
