import random

data=open("data.txt","w")
for i in range(10):
    data.write(str(random.randint(1,100))+",")
data.close()


data=open("data.txt","r")
even=open("even.txt","w")
odd=open("odd.txt","w")
prime=open("prime.txt","w")

l=data.read().split(",")[:-1]
for item in l:
    if int(item)%2==0:
        even.write(item+",")
    else:
        odd.write(item+",")
    if int(item)%2!=0:
        for j in range (3,int(int(item)/2)+1,2):
            if int(item)%j==0:
                break
        else:
              prime.write(item+",")
        
even.close()
odd.close()
data.close()
prime.close()

print("Data File Content")
data=open("data.txt","r")
print(data.read())
data.close()

print ("odd file content")
odd=open("odd.txt","r")
print(odd.read())
odd.close()

print("even file content")
even=open("even.txt","r")
print(even.read())
even.close()

print("prime content")
prime=open("prime.txt","r")
print(prime.read())
prime.close()
