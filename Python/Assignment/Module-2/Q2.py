#Write a Python program to get the Factorial number of given number.
number = int(input("Enter a number: "))
if number<0:
    print("number is negative")
else:
    res=1
    for i in range(1,number+1):
        res *= i
    print("This number is Factorial",res)
    
