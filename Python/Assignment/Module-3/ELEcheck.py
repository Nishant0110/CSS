city=('ahmedabad','rajkot')
userinput=input('enter any value to check')

def elecheck(city,userinput):
    return userinput in city
if elecheck(city,userinput):
    print("exist")
else:
    print("Does not exist")
