# What is used to check whether an object o is an instance of class A?
'''

'''
class A:
    pass

class B(A):
    pass

o1 = A()
o2 = B()

print(isinstance(o1, A))
print(isinstance(o2, A))  
print(isinstance(o1, B))  

