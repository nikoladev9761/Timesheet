# Generated by Django 3.2.9 on 2022-05-03 11:55

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('ts_app', '0016_alter_clients_country'),
    ]

    operations = [
        migrations.RenameField(
            model_name='clients',
            old_name='country',
            new_name='pickedCountry',
        ),
    ]