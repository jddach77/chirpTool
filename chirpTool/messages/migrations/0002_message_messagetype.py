# Generated by Django 2.1.7 on 2019-04-01 20:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('messagesconfigruation', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='message',
            name='messageType',
            field=models.CharField(default='text', max_length=70),
            preserve_default=False,
        ),
    ]
