'''Differentiate between append () and extend () methods?
append():-
This method is used to add a single element to the end of an existing list.
extend():-
This method is used to add multiple elements to the end of an existing list.
'''

list1=[2, 33, 222, 14,25]
print("Original List1 is ",list1);
list1.append("end")
print("Updated List1 using append method is ",list1)

list2=[5, 15, 100, 22]
print("Original List2 is ",list2);

list1.extend(list2)
print("Extended list is ",list1)


