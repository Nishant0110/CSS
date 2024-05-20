# Write a Python program to find the highest 3 values in a dictionary


import heapq

data= {'a':1,'b':1,'c':2,'d':3,'e':4,'f':3}
stored=list(data.values())
stored.sort(reverse=True)
stored=stored[:3]
print(stored)
