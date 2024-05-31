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
        self.c=c
    def putC(self):
        print("c:",self.c)
class D(B):
    def getD(self,d):
        self.d=d
    def putD(self):
        print("d:",self.d)

objc=C()
objc.getA(1)
objc.putA()

objc.getC(2)
objc.putC()

objd=D()
objd.getA(5)
objd.putA()
objd.getB(6)
objd.putB()
objd.getD(7)
objd.putD()
