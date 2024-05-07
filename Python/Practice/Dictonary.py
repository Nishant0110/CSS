d={101:"nishant",102:"pritesh",103:"raj"}
print(d)
print(d[101])
print(d.get(103))
print(d.items())
print(d.keys())
print(d.values())
d.pop(103)
print(d)
d.popitem()
print(d)

d1={900:"Rahul",567:"Pritesh",432:"Nandini",898:"Urvi"}
d.update(d1)
print(d)
d[567]="kishan"
print(d)

for i in d:
    print(i," : ",d[i])
