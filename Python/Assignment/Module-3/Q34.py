# Write a Python script to check if a given key already exists in a dictionary.
my_dict = {'a': 1, 'b': 2, 'c': 3}
inputed_key = input("Enter the key to check: ")


if inputed_key in my_dict:
    print(f"entered '{inputed_key}'key already exists in the dictionary.")
else:
    print(f"entered key '{inputed_key}' does not exist in the dictionary.")
