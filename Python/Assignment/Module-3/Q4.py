#Write a Python function to get the largest number, smallest num and sum of all from a list.
list=[1,2,3,4,5,6,7,8,9,10,20,15]
print("list is:",list)

def largestnum(list):
    length=len(list)
    list.sort()
    print("largest element is ",list[-1])
    print("smallest element is ",list[0])
    sum=0;
    for num  in list:
        sum=sum+num
    print("sum of all element is ",sum)

largestnum(list)

#print("sum of all element is ",sum(list))
