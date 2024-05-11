#Write a Python program to generate and print a list of first and last 5 elements where the values are square of numbers between 1 and 30.
emptylist=[]
for num in range(1,31):
    emptylist.append(num**2)
firstfiveele=emptylist[:5]
lastfiveele=emptylist[-5:]

print("first five element is:",firstfiveele)
print("last five element is:",lastfiveele)

