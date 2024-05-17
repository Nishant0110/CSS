# Write a Python program to check multiple keys exists in a dictionary

dict = {'a': 1, 'b': 2, 'c': 3, 'd': 4}
inputedkey = input("Enter keys to check (comma-separated): ").split(',')

if all(key in dict for key in inputedkey):
    print("inputedkey keys exist in the exists dictionary")
else:
    print("Some keys do not exist in the exists dictionary")
