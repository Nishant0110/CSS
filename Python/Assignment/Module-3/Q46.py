# Write a Python program to combine values in python list of dictionaries.
from collections import Counter

data=[{'item':'item1','amount': 400},{'item':'item2','amount':300},{'item':'item1', 'amount':750}]
counted=Counter()
for j in data:
    counted[j['item']]+=j['amount']
print(counted)
