# Generated by Django 5.1.4 on 2024-12-20 11:06

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Hospital',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('location', models.CharField(max_length=255)),
                ('bed_availability', models.IntegerField(default=0)),
                ('no_of_doctors', models.IntegerField(default=0)),
                ('no_of_nurses', models.IntegerField(default=0)),
                ('no_of_icu_beds', models.IntegerField(default=0)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]
