# Write a Python program to read a file line by line store it into a variable.

a=open("Q2.txt","r")
var=""
for line in a:
    var += line
print(var)
a.close()
