#Write a Python program to read a random line from a file.

import random

file=open("file1.txt","w")
file.write("\n hi,my name is nishant.\n i am fullstack developer\n i am from ahmedabad")
file.close()

with open("file1.txt","r")as file:
    line=file.readlines()

if not line:
    print("The file is empty.")
else:
    random_line=random.choice(line)
    print(random_line.strip())
