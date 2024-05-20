#Write a Python function to check whether a number is perfect or not.

number=int(input("enter any number for check:"))
sum=0
for i in range(1,number):
    if number%i==0:
        sum+=i
if sum==number:
    print("number is perfect")
else:
    print("number is not perfect")
