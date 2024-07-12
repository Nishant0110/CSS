from django.shortcuts import render
from .models import Student, Teacher, Club, Book

def dashboard(request):
    students = Student.objects.all().count()
    teachers = Teacher.objects.all().count()
    clubs = Club.objects.all().count()
    books = Book.objects.all().count()
    context = {
        'students': students,
        'teachers': teachers,
        'clubs': clubs,
        'books': books
    }
    return render(request, 'dashboard.html', context)
