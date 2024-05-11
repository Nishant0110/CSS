#Write a Python program to remove duplicates from a list.

list=["nishant","nishant","pavan",1,2,100,100,0.1,0.2,0.1]
print("Old string is ",list)
newlist=[]
for i in list:
    if i not in newlist:
        newlist.append(i)
print("new string is",newlist)
