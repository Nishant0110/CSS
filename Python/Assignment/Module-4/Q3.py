# Write a Python program to append text to a file and display the text.
a=open("Q2.txt","a")
a.write("Appended data success")
a.close()

a=open("Q2.txt","r")
print(a.read())
a.close()
