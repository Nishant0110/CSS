# Write a Python program to create and display all combinations of letters, selecting each letter from a different key in a dictionary.

from itertools import product
dict1={'1':['a','b'],'2':['c','d']}
for item in product(*dict1.values()):
    print("".join(item),end=" ")
    
