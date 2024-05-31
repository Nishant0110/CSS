# Write a Python program to count the frequency of words in a file.

# Open the file in read mode 
a = open("Q2.txt", "r")
d = dict()

for i in a:
    i=i.strip()
    i=i.lower()
    splitedword=i.split(" ")
    
    for word in splitedword:
        if word in d:
            d[word]+=1
        else:
            d[word]=1
            
for key in list(d.keys()):
    print(key,":",d[key])
a.close()
