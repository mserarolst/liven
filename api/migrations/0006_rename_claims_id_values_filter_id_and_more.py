# Generated by Django 4.1 on 2022-09-22 14:57

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0005_values'),
    ]

    operations = [
        migrations.RenameField(
            model_name='values',
            old_name='claims_id',
            new_name='filter_id',
        ),
        migrations.RemoveField(
            model_name='values',
            name='description',
        ),
        migrations.RemoveField(
            model_name='values',
            name='image',
        ),
    ]
