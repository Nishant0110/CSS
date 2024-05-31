# Write a Python program to write a list to a file.

list1 = ["Nishant", "Pritesh", "Gandhinagar", "Ahmedabad"]

with open('output.txt', 'w') as file:
    for i in list1:
        file.write(i + '\n')
print(file)
file.close()
