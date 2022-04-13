from django.contrib.auth.models import User
from django.db import models


# Create your models here.
class Comment(models.Model):
    user = models.CharField(User, on_delete=models.CASCADE)
    ideo_id = models.CharField(max_length=100)
    text = models.CharField(max_length=100)
    likes = models.IntegerField()
    dislikes = models.IntegerField()
    