# Write a Python class named Rectangle constructed by a length and width and a method which will compute the area of a rectangle

class Rectangle:
    def __init__(self, length, width):
        self.length = length
        self.width = width

    def area(self):
        return self.length * self.width

# Example usage:
length = int(input("enter length:"))
width = int(input("enter width:"))
rectangle = Rectangle(length, width)
print("Area of the rectangle:", rectangle.area())


