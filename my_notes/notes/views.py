from django.shortcuts import render,redirect
from .models import Note
from django.contrib import messages
# Create your views here.





def index(request):
    all_notes = Note.objects.all()
    
    return render(request,"index.html", {'all_notes':all_notes})
    
    
def add_note(request):
    if request.method== "POST" and 'btn_add':
        title = request.POST['title']
        content = request.POST['content']
        if title and content :
            note= Note.objects.create(title=title,content=content)
            note.save()
        else : 
           messages.add_message(request,messages.ERROR,'please fill all !')
    return redirect('notes:index')
    
def delete_note(request,pk):
    note_id =  Note.objects.get(pk=pk)
    note_id.delete()
    return redirect('notes:index')
    
    
    
