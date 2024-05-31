class A:
    def show(self):
      
        print("show from a")
class B(A):
    def show(self):
        super().show()
        print("show from b")

class C(A):
    def show(self):
        super().show()
        print("show from c")
class D(C,B):
    def show(self):
        super().show()
        print("show from d")

d1=D()
d1.show()
