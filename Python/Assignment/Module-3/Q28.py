#Write a Python program to remove an empty tuple(s) from a list of tuples.
tuplelist=[(1,2,3),(4,5),(),("hello",3)]
def check(item):
    return [i for i in tuplelist if i]

filtereddata =check(tuplelist)
print("Original list data :",tuplelist)
print("filtered data :",filtereddata)
