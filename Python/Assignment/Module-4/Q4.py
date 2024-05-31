# Write a Python program to read first n lines of a file.

a=open("Q2.txt","r")
n=int(input("enter number"))
for i in range(n):
    line = a.readline()
    if line == '':
        break
    print(line, end='')
