# Generated by Django 5.0.7 on 2024-07-19 06:46

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='user',
            old_name='phone',
            new_name='mobile',
        ),
    ]
