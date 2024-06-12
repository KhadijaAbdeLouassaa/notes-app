from django.contrib import admin
from .models import Note
# Register your models here.

@admin.register(Note)
class NoteModelAdmin(admin.ModelAdmin):
    list_display = ['title', 'created_at']
