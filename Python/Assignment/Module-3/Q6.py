# Write a Python program to count the number of strings where the string length is 2 or more and the first and last character are same from a given list of strings.


list=["aba","def","gig","jklm","nopn","aba"]

def equalitycheck(list):
    counter=0
    for i in list:
        if len(i)>=2 and i[0]==i[-1]:
            counter =counter+1
    print(counter)
equalitycheck(list)
