from django.contrib import admin
from django.urls import path, include

from . views import *

urlpatterns = [
    path('Pryvedenets_Ivan/', main, name='main_url'),
    path('resume/', resume, name='resume_url'),
    path('services/', services, name='services_url'),
    path('portfolio/', portfolio, name='portfolio_url'),
    path('contacts/', Contacts.as_view(), name='contacts_url'),
]
