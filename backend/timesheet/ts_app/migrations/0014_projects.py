# Generated by Django 4.0.4 on 2022-04-18 22:14

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('ts_app', '0013_clients'),
    ]

    operations = [
        migrations.CreateModel(
            name='Projects',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('projectName', models.CharField(max_length=30, unique=True)),
                ('description', models.CharField(max_length=200)),
                ('status', models.BooleanField(default=True)),
                ('customer', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='ts_app.clients', to_field='clientName')),
                ('projectLead', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='ts_app.users')),
            ],
        ),
    ]
