# Write a Python program to create a dictionary from a string.
string ='Welcome to our company'
empty={}
for item in string:
    if item in empty:
        empty[item]+=1
    else:
        empty[item]=1
print(empty)
