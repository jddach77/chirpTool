# Generated by Django 2.1.7 on 2019-04-22 11:21

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('messagesconfigruation', '0005_script'),
    ]

    operations = [
        migrations.RenameField(
            model_name='message',
            old_name='text',
            new_name='message',
        ),
    ]
