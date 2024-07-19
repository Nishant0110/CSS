from django.shortcuts import render
from django.shortcuts import redirect
from .models import Faculty,Student
from django.conf import settings
from django.core.mail import send_mail
# Create your views here.
def index(request):
    return render(request, 'index.html')

def signup(request):
    if request.method == "POST":
        try:
            faculty=Faculty.object.get(femail=request.POST['f_email'])
            msg="email already registered"
            return render(request,'index.html',{'msg':msg})
        except:
            if request.POST['f_password']==request.POST['f_cpassword']:
                Faculty.objects.create(
                        f_name=request.POST['f_name'],
                        f_email=request.POST['f_email'],
                        f_password=request.POST['f_password'],
                    )
                msg="user sign up sucessfully"
                return render(request,'login.html',{'msg':msg})
            else:
                msg="password and confirm password does not match"
                return render(request,'signup.html',{'msg':msg})   
    else:
        return render(request,'signup.html')
	
def login(request):
    if request.method == "POST":
        try:
            faculty = Faculty.objects.get(f_email=request.POST['f_email'])
            if faculty.f_password == request.POST['f_password']:
                request.session['f_name'] = faculty.f_name
                request.session['f_email'] = faculty.f_email
                msg = "Login successful"
                return render(request, 'f_home.html', {'msg': msg})
            else: 
                msg = "Incorrect Password"
                return render(request, 'login.html', {'msg': msg})
        except Faculty.DoesNotExist:
            msg = "Email Not Registered"
            return render(request, 'login.html', {'msg': msg})
    else:
        return render(request, 'login.html')
    
def logout(request):
    if 'f_email' in request.session:
        del request.session['f_name']
        del request.session['f_email']
        msg = "User Logged Out Successfully"
        return render(request,'logout.html',{'msg':msg})
    else:
        msg = "Session Expired. Please Login Again."
    return render(request, 'login.html', {'msg': msg})

def add_student(request):
    return render(request,'add-student.html')

def student(request):
    if request.method == "POST":
            faculty=Faculty.objects.get(f_email=request.session['f_email'])
            email=request.POST['email']            
            student=Student.objects.create(
            faculty=faculty,
            fname=request.POST['fname'],
            lname=request.POST['lname'],
            email=request.POST['email'],
            password=request.POST['password'],
            gender=request.POST['gender'],
            qualification=request.POST['qualification'],
            address=request.POST['address'],
            )
            # email 
            subject = 'welcome to GFG world'
            message = f'Hi {student.fname},\n\nYou have been successfully registered as a student.\n\nThank you,\nSchool Administration'
            # email_from = settings.EMAIL_HOST_USER
            email_from = request.session.get('f_email', settings.EMAIL_HOST_USER)
            recipient_list = [student.email, ]
            send_mail( subject, message, email_from, recipient_list )
            return redirect('view-student')
    else:
        return render(request,'f_home.html')

def view_student(request):
   faculty=Faculty.objects.get(f_email=request.session['f_email'])
   msg1=Student.objects.filter(faculty=faculty)
   return render(request,'view-student.html',{'msg1':msg1})

def delete(request, pk):
        student = Student.objects.get(pk=pk)
        student.delete()
        msg = "Student deleted successfully."
        return redirect('view-student')
        
def edit(request,pk):
    student = Student.objects.get(pk=pk)
    return render(request,'student-edit.html',{'student':student})

def student_edit(request,pk):
    student = Student.objects.get(pk=pk)
    if request.method == "POST":
        student.fname=request.POST['fname']
        student.lname=request.POST['lname']
        student.email=request.POST['email']
        student.qualification=request.POST['qualification']
        student.gender=request.POST['gender']
        student.address=request.POST['address']
        student.save()
        msg = "student Updated Successfully"
        return redirect('view-student')
    else:
        msg="student not updated"
        return render(request,'student-edit.html',{'student':student,'msg':msg})