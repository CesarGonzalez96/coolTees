# Generated by Django 4.0.3 on 2022-05-12 04:43

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('user_name', models.CharField(db_index=True, max_length=50, verbose_name='User Name')),
                ('password', models.CharField(db_index=True, max_length=50, verbose_name='Password')),
                ('email', models.EmailField(db_index=True, max_length=200, verbose_name='email')),
                ('token', models.CharField(db_index=True, max_length=200, verbose_name='token')),
                ('token_expires', models.DateTimeField(blank=True, null=True, verbose_name='token_expires')),
                ('created_at', models.DateTimeField(auto_now_add=True, verbose_name='created at')),
                ('updated_at', models.DateTimeField(auto_now=True, verbose_name='updated at')),
            ],
            options={
                'db_table': 'user',
            },
        ),
    ]
