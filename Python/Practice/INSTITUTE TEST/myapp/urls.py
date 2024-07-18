from django.urls import path
from . import views
urlpatterns = [
    path('',views.index,name='index'),
    path('signup/',views.signup,name='signup'),
    path('login/',views.login,name='login'),
    path('logout/',views.logout,name='logout'),
    path('student/',views.student,name='student'),
    path('add-student/',views.add_student,name='add-student'),  
    path('view-student/',views.view_student,name='view-student'),
    path('edit/<int:pk>/', views.edit, name='edit'),
    path('delete/<int:pk>/', views.delete, name='delete'),
    path('student-edit/<int:pk>/',views.student_edit,name='student-edit')
]