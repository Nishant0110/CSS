''' 3. inheritance
    - The object of one class can aquire the properties of object of another
    class is called inheritance.
    - Creating a new class from an existing class is called inheritance.
    1. Single
    2. Multilevel
    3. Multiple
    4. Hierarchical
    5. Hybrid
'''
class A:
    def getA(self,a):
        self.a=a
    def putA(self):
        print("a",self.a)
class B(A):
    def getB(self,b):
        self.b=b
    def putB(self):
        print("b",self.b)
class C(B):
    def getC(self,c):
        self.c=c
    def putC(self):
        print("c",self.c)
b1=C()
b1.getA(10)
b1.getB(20)
b1.getC(30)
b1.putA()
b1.putB()
b1.putC()
