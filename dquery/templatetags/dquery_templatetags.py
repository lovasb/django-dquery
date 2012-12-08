import logging

from django import template
from django.middleware.csrf import get_token
from django.conf import settings
from django.core.files.storage import get_storage_class
from django.template.loader import render_to_string

staticfiles_storage = get_storage_class(settings.STATICFILES_STORAGE)()

register = template.Library()

@register.simple_tag(takes_context=True)
def dquery_js_import(context, template_name='dquery/dquery.core.js'):
    """ 
        Renders the dquery.core.js file.
    """
    return render_to_string(template_name)