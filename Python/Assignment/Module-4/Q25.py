# Explain Inheritance in Python with an example? What is init? Or What Is A Constructor In Python?
'''
1. INHERITANCE
>   Inheritance is a fundamental concept in object-oriented programming (OOP) that allows you to create a hierarchy of classes. It enables a child class (also known as a derived class) to inherit properties and methods from a parent class (also known as a base class)
'''
# Example
class Human:
    def __init__(self, name):
        self.name = name

    def speak(self):
        raise NotImplementedError("Subclass must implement abstract method")

class Men(Human):
    def speak(self):
        return f"Hello! {self.name}"

class Women(Human):
    def speak(self):
        return f"Hello! {self.name}"
        
men = Men("Virat")
women = Women("Anushka")
print(men.speak())  # Output: Buddy says Woof!
print(women.speak()) 


'''
2. __INIT__:-
              In Python, __init__ is a special method known as the constructor.
              It is automatically called when a new instance of a class is created.
              The primary purpose of the __init__ method is to initialize the instance's attributes.
              
'''
