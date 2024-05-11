#Write a Python function that takes two lists and returns true if they have at least one common member.
list1=["nishant","nishant","pavan",1,2,100,100,0.1,0.2,0.1]
list2=["pavan",1,101,202,303,"mumbai"]


def checkList(list1,list2):
    for i in list1:
        if i in list2:
            return True
    return False
answer=checkList(list1,list2)
print(answer)
