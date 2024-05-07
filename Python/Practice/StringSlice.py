s="abc def ghiljkal"
print(s[2:14])#starting length,ending length
print(s[:5])# by default 0  starting length
print(s[2:])# bydefault consider till last
print(s[2:15:5])#jump between start and end length
print(s[::3])# only jump between start to  end position

#negative

print(s[-2])#its consider only declered position text
print(s[-15:-3])#its consider between this range text
print(s[:-5])#its consider start to -5 index
print(s[-16:])#its consider start position to -1 position all text

print(s[-17:-3:2])jump on starting spicified range
print(s[::-2])jump  reverse full string
