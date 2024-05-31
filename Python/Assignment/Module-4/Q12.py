# Write a Python program to copy the contents of a file to another file.

with open("Q2.txt","r") as file1:
    a=file1.read()
with open("Q12.txt","w") as file2:
    file2.write(a)
print(file2)
        
