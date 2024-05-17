# Write a Python script to concatenate following dictionaries to create a new one.

dict1 = {'a': 1, 'b': 2, 'c': 3}
dict2 = {'d': 4, 'e': 5}
dict3 = {'f': 6, 'g': 7, 'h': 8}

# unpacking
concatenated_dict = {**dict1, **dict2, **dict3}
print("Concatenated Dictionary:",concatenated_dict)

# update()
concatenated_dict2 = dict1.copy()  
concatenated_dict2.update(dict2)
concatenated_dict2.update(dict3)
print("Concatenated Dictionary",concatenated_dict2)
