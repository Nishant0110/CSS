import UDF

while True:
    print("*"*50)
    print("1. oddeven")
    print("2. maxoftwo")
    print("3. maxofthree")
    print("4. Fibonacci")
    print("5. Prime")
    print("6. Pattern")
    print("7. Exit")

    choice=int(input("enter your choice:"))

    if choice==1:
        n1=int(input("enter number:"))
        UDF.oddeven(n1)
    elif choice==2:
        n1=int(input("enter number:"))
        n2=int(input("enter number:"))
        UDF.maxoftwo(n1,n2)
    elif choice==3:
        n1=int(input("enter number:"))
        n2=int(input("enter number:"))
        n3=int(input("enter number:"))
        UDF.maxofthree(n1,n2,n3)
    elif choice==4:
        n1=int(input("enter number:"))
        UDF.fibonacci(n1)
    elif choice==5:
        n1=int(input("Enter Number : "))
        UDF.prime(n1)
    elif choice==6:
        n1=int(input("Enter Number : "))
        UDF.pattern(n1)
    elif choice==7:
        print("Thank You.")
        break
    else:
        print("Invalid Choice. Please Try Again.")
    break
