# How Do You Check The Presence Of A Key In A Dictionary?

dict = {'a': 1, 'b': 2, 'c': 3}
check=input("enter key to check avlable or not:")

if check in dict:
    print(f"Key '{check}' is presence in the dictionary.")
else:
    print(f"Key '{check}' is not presence in the dictionary.")

