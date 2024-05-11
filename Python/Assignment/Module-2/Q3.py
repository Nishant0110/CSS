#Write a Python program to get the Fibonacci series of given range.
num=int(input("Enter any number:"))
a,b=0,1
print(a,end=' ')
while b<num:
    print(b,end=' ')
    a,b=b,a+b
    
