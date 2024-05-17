# Write a Python program to combine two dictionary adding values for common keys.

d1 ={'a':100,'b':200,'c':300}
d2 ={'a':300,'b':200,'d':400}
combined ={}

for key,value in d1.items():
    combined[key]=value

for key,value in d2.items():
    if key in combined:
        combined[key]+=value
    else:
        combined[key]=value
print(combined)
