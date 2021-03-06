# Generated by Django 4.0.4 on 2022-04-14 14:50

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('ts_app', '0002_clients'),
    ]

    operations = [
        migrations.CreateModel(
            name='Projects',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('project_name', models.CharField(max_length=30)),
                ('description', models.CharField(max_length=200)),
                ('status', models.BooleanField(default=True)),
                ('customer', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='ts_app.clients', to_field='client_name')),
                ('project_lead', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='ts_app.users', to_field='user_full_name')),
            ],
        ),
    ]
