#with no arg no return val
def printLine():
    print('hello')

printLine()

#fun with arg but no return val

def add(a,b):
    print("addition:",a+b)

add(10,20)#anotherway x=int(input("enter value:"))
#y=int(input("enter value:"))

#fun with arg & ret value

def sub(a,b):
    return a-b
x=int(input("enter value"))
y=int(input("enter value"))
print("subtraction:",sub(x,y))
