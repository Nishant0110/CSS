# Write a Python script to sort (ascending and descending) a dictionary by value.
mydict = {'a': 5, 'b': 2, 'c': 8, 'd': 4}

Ascending = {key: value for key, value in sorted(mydict.items(), key=lambda item: item[1])}
print("Ascending Dictonary by value is:",Ascending)

Descending = {key: value for key, value in sorted(mydict.items(), key=lambda item: item[1], reverse=True)}     
print("Descending Dictonary by value is:",Descending)
