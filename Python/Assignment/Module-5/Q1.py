# Why Django should be used for web-development? Explain how you can create a project in Django?

'''
-> It provides robusrt security features,protacting against common vulneribilities like SQL injection ,csrf(cross site request forgery).It handles user authentication and authorization securly and eficiently.
-> Django is designed to handle high-traffic websites and can scale smoothly. It uses a shared-nothing architecture, which means each part of the architecture (database servers, web servers, etc.) can be independently scaled.
-> Django has a large, active community that contributes to its continuous improvement and offers extensive documentation and support resources.

Create a project step:
1.Create virtual environment : python -m venv environmentname
2.Activate a  virtual environment :projectname\Scripts\activate
3.Install Django:pip install django
4.Create a Django Project: django-admin startproject projectname
5.Start the Development Server: python manage.py runserver
