#  What is Django URLs?make program to create django urls

'''

It mapped to views, which are Python functions or classes that handle the logic for what should be returned to the user when a particular URL is accessed

--> first  Define Views in views.py
    In the views.py file of your app (appname), define some views.
    Example:
    def login(request):
        return render(request,'login.html')
--> Django uses a URLconf (URL configuration) to manage these mappings.

Example :urlpatterns = [path('login', views.login, name='login'),
    path('', views.home, name='home'),]
'''
