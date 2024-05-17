#Write a Python program to check whether an element exists within a tuple.
city=('ahmedabad','rajkot')

userinput=input('enter any value to check')
inputedvalue=False

for element in city:
    if(userinput==element):
        inputedvalue=True
if inputedvalue:
    print("Exist")
else:
    print('does not exist')
