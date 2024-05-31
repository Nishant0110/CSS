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


        
objb=B()
objb.getB(10)
objb.putB()
objb.getA(3)
objb.putA()

objc=C()
objc.getC(20)
objc.putC()
objc.getA(5)
objc.putA()
