from django.shortcuts import render, redirect
from django.views import View
from django.core.mail import send_mail

from .forms import EmailForm
from django.conf import settings


def main(request):
    return render(request, 'Performer/main.html')


def resume(request):
    return render(request, 'Performer/resume.html')


def services(request):
    return render(request, 'Performer/services.html')


def portfolio(request):
    return render(request, 'Performer/portfolio.html')


class Contacts(View):
    def get(self, request):
        forms = EmailForm()

        return render(request, 'Performer/contacts.html', context={'forms': forms})

    def post(self, request):
        if request.method == 'POST':
            forms = EmailForm(request.POST)

            if forms.is_valid():
                name = forms.cleaned_data['name']
                email = forms.cleaned_data['email']
                message = forms.cleaned_data['message']

                email_message = 'Пише: ' + name + ' - ' + email + '\n' + message

                send_mail('Portfolio', email_message, settings.EMAIL_HOST_USER, ['pryvivan@gmail.com'], fail_silently=False)

                successful = 'Повідомлення успішно відправлено'

                forms = EmailForm()

                return render(request, 'Performer/contacts.html', context={'forms': forms, 'successful': successful})


