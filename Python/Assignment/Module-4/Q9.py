# Write a Python program to count the number of lines in a text file.

a=open("Q2.txt","r")
b=sum(1 for line in a)
print(b)
a.close()
