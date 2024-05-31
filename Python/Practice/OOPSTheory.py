'''

Main OOP Concept

1. class
    - It is a group of different type of data and function.

2. object
    - It is an instance of class.
    
3. inheritance
    - The object of one class can aquire the properties of object of another
    class is called inheritance.
    - Creating a new class from an existing class is called inheritance.
    1. Single
    2. Multilevel
    3. Multiple
    4. Hierarchical
    5. Hybrid
    
4. polymorphisam: one name multiple form its cald poli
    1. Compile Time Polymorphism - (Method Overloading) - When there is a more
    than one method in a single class having the same name but with different
    number of arguments then it is called method overloading.
    2. Run Time Polymorphism - (Method Overriding) - When there is a same
    method prototype in your both base class & derived class & if you call
    that method using the object of derived class, then only derived class
    method will be called. So you can say that method of derived class overrides
    method of base class.
    
5. abstraction - Data hiding
6. encapsulation - To bind a data and code into a single unit is called.

'''
class student:
    def getData(self,fname,lname):
        print("get data called")
        self.f=fname
        self.l=lname
    def putData(self):
        print("put data called")
        print("first name :",self.f)
        print("last name :",self.l)
s1=student()
s1.getData("nishant","lakhani")

s1.putData()
