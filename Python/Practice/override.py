class A:
    def show(self):
        print("show from a")
class B(A):
    def show(self):
        print("show from b")

class C(B):
    def show(self):
        super().show()
        print("show from c")

c1=C()
c1.show()
