# Generated by Django 2.2 on 2019-04-18 16:21

from django.db import migrations, models
import jsonfield.fields


class Migration(migrations.Migration):

    dependencies = [
        ('messagesconfigruation', '0004_auto_20190418_1324'),
    ]

    operations = [
        migrations.CreateModel(
            name='Script',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('json_data', jsonfield.fields.JSONField()),
            ],
        ),
    ]
