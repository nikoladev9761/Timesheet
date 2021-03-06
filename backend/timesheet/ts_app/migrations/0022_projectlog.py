# Generated by Django 3.2.9 on 2022-05-08 14:23

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('ts_app', '0021_users_stillactive'),
    ]

    operations = [
        migrations.CreateModel(
            name='ProjectLog',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('logDescription', models.CharField(blank=True, max_length=200)),
                ('hours', models.FloatField()),
                ('overtime', models.FloatField()),
                ('todays_date', models.DateField(auto_now_add=True)),
                ('clientName', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='ts_app.clients', to_field='clientName')),
                ('projectName', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='ts_app.projects', to_field='projectName')),
                ('userFullName', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='ts_app.users')),
            ],
        ),
    ]
