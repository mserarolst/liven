# Generated by Django 3.1.7 on 2022-11-23 14:25

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0014_product_image'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='value',
            field=models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, to='api.values'),
            preserve_default=False,
        ),
    ]
