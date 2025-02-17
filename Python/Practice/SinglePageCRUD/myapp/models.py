from django.db import models

# Create your models here.
class User(models.Model):
    fname = models.CharField(max_length=100)
    lname = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    mobile = models.PositiveBigIntegerField(max_length=10)
    
    def __str__(self):
        return f'{self.fname} {self.lname}'