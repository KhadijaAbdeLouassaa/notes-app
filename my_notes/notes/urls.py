from django.urls import path
from . import views

app_name= "notes"




urlpatterns = [

    path('index/', views.index, name="index"),
    path('add_note/', views.add_note, name="add_note"),
    path('delete_note/<int:pk>/', views.delete_note, name="delete_note"),
    
]