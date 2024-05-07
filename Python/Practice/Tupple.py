t=(1,2,3,[5,6,7],True,"python",8,9,10)
print(t)
print(t.count(1))
print(t.index(10))

for i in t:
    print(i)
print("python" in t)
print(t[3])
t[3].append(400)
print(t)
print(t[3][3])
