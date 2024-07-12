# Write a Python program to sum of three given integers. However, if two values  are equal sum will be zero

# x=int(input('enter value of x:'))
# y=int(input('enter value of y:'))
# z=int(input('enter value of z:'))
x , y, z = map(int, input('Enter values for x, y, and z separated by spaces: ').split())
if x == y or y == z or x == z:
    print("0")
else:
    print('sum is:',x + y + z)
