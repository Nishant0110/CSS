#Write a Python program to replace last value of tuples in a list.
listTuple=[(1,2),(3,4),(5,6,"Hello")]
print("List Tuple :",listTuple)

newItem="Nishant"
ReplasedEle=listTuple[:-1]+[newItem]
print("Updated List Tuple :",ReplasedEle)
