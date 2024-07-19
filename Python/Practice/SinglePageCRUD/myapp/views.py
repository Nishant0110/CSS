from django.shortcuts import render, redirect, get_object_or_404
from .models import User

# Create your views here.
# def index(request):
#     return render(request, 'index.html')
from django.shortcuts import render, redirect, get_object_or_404
from .models import User

def index(request):
    if request.method == 'POST':
        if 'create' in request.POST:
            fname = request.POST.get('fname')
            lname = request.POST.get('lname')
            email = request.POST.get('email')
            mobile = request.POST.get('mobile')
            User.objects.create(fname=fname, lname=lname, email=email, mobile=mobile)
        elif 'update' in request.POST:
            user_id = request.POST.get('user_id')
            user = User.objects.filter(id=user_id).first()
            if user:
                user.fname = request.POST.get('fname')
                user.lname = request.POST.get('lname')
                user.email = request.POST.get('email')
                user.mobile = request.POST.get('mobile')
                user.save()
        elif 'delete' in request.POST:
            user_id = request.POST.get('user_id')
            user = User.objects.filter(id=user_id).first()
            if user:
                user.delete()
        return redirect('index')
    
    users = User.objects.all()
    return render(request, 'index.html', {'users': users})



