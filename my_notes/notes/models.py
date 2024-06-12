from django.db import models

# Create your models here.




class Note(models.Model):
    title = models.CharField(max_length=30)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now=True)
    
    
    def __str__(self):
        return self.title
    