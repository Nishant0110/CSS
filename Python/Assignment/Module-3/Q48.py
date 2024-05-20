# Write a Python function to calculate the factorial of a number (a nonnegative integer)
userinput=int(input("enter any number"))
result=1
if userinput < 0:
    print(f"you entered negative no:{userinput}")
for i in range(1,userinput+1):
    result *= i
print(result)
    
