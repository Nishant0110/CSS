# Write a Python program to check whether a list contains a sub list

listA=[1,2,3,4,5,6,7,8,9]
sublist=[1,2]

def check(listA,sublist):
   for sub in sublist:
       if sub not in listA:
           return False
           break
   return True     

                
print(check(listA,sublist))
