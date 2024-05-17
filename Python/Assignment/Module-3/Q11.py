#Write a Python function that takes a list and returns a new list with unique elements of the first list.
list1 = [1, 2,"jamnagar",3, 4,7, 2, 3, 5, 6, 2]

def checkelement(input):
    removedelement = set(input)
    newlist = list(removedelement)
    return newlist

list2 = checkelement(list1)
print(list2) 
