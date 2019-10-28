from django import forms


class EmailForm(forms.Form):

    name = forms.CharField(max_length=30, label='', required=True)
    email = forms.EmailField(max_length=40, label='', required=True)
    message = forms.CharField(widget=forms.Textarea, label='', required=True)

    name.widget.attrs.update({'placeholder': "Ваше Ім'я"})
    email.widget.attrs.update({'placeholder': "Ваш Email"})
    message.widget.attrs.update({'placeholder': "Повідомлення"})

