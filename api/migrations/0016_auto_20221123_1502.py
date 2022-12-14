# Generated by Django 3.1.7 on 2022-11-23 15:02

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0015_product_value'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='claim',
            field=models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, to='api.claims'),
        ),
        migrations.AlterField(
            model_name='product',
            name='filter',
            field=models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, to='api.filters'),
        ),
        migrations.AlterField(
            model_name='product',
            name='product_family',
            field=models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, to='api.productfamilies'),
        ),
        migrations.AlterField(
            model_name='product',
            name='value',
            field=models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, to='api.values'),
        ),
    ]
