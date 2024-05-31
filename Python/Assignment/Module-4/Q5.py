# Write a Python program to read last n lines of a file.

a=open("Q2.txt","r")
line=a.readlines()
number=int(input("Enter Any Number"))
endline=line[-number:]
for i in endline:
    print(i,end="")
a.close()
