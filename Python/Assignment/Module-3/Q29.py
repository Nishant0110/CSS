#Write a Python program to unzip a list of tuples into individual lists.
tuplelist=[(1,100,"a"),(2,200,"b"),(3,300,"c")]

list1,list2,list3=zip(*tuplelist)
print("list1:",list1)
print("list2:",list2)
print("list3:",list3)
