# myapp/views.py
from django.shortcuts import render
from .models import Post

def create_post(request):
    new_post = Post.objects.create(title='My First Post', content='This is the content of my first post.')
    return render(request, 'post_created.html', {'post': new_post})
