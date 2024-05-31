# Write a python program to find the longest words.

with open("Q2.txt", 'r') as content:
    words = content.read().split()
    maxlen = len(max(words, key=len))
    res= [word for word in words if len(word) == maxlen]
print(res)
