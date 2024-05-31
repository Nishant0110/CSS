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
class C(A):
    def getC(self,c):
        super
        self.c=c
    def putC(self):
        print("c:",self.c)
class D(C,B):
    def getD(self,d):
        self.d=d
    def putD(self):
        print("d:",self.d)

objd=D()
objd.getD(4)
objd.putD()
