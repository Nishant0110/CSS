# Write a Python program to read a file line by line and store it into a list

a=open("Q2.txt","r")
linelist=[]
for line in a:
    linelist.append(line.strip())
print(linelist)
a.close()
