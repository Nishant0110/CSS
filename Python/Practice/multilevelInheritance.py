class A:
    def getA(self,a):
        self.a=a
    def putA(self):
        print("a:",self.a)
class B(A):
    def getB(self,b):
        self.b=b
    def putB(self):
        print("b:",self.b)
class C(B):
    def getC(self,c):
        self.c=c
    def putC(self):
        print("c:",self.c)
obj1=C()
obj1.getA(10)
obj1.putA()

obj1.getB(20)
obj1.putB()

obj1.getC(30)
obj1.putC()
