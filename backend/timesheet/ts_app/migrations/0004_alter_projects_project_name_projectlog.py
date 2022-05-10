# Generated by Django 4.0.4 on 2022-04-14 20:13

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('ts_app', '0003_projects'),
    ]

    operations = [
        migrations.AlterField(
            model_name='projects',
            name='project_name',
            field=models.CharField(max_length=30, unique=True),
        ),
        migrations.CreateModel(
            name='ProjectLog',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('todays_date', models.DateField(auto_now_add=True)),
                ('hours', models.FloatField()),
                ('overtime', models.FloatField()),
                ('client_name', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='ts_app.clients', to_field='client_name')),
                ('project_name', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='ts_app.projects', to_field='project_name')),
                ('user_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='ts_app.users')),
            ],
        ),
    ]
