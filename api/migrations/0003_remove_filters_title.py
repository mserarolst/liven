# Generated by Django 4.1 on 2022-09-21 17:08

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_filters'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='filters',
            name='title',
        ),
    ]
