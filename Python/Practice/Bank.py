class Bank:
    def openAccount(self,cname,acno,balance):
        self.cname=cname
        self.acno=acno
        self.balance=balance
        print("Hello ",cname,", Your Account Number ",str(acno)," Is Opened With ",str(balance)," Rs.")
    def deposit(self,amount):
        self.balance=self.balance+amount
    def withdraw(self,amount):
        if amount<=self.balance:
            self.balance=self.balance-amount
        else:
            print("You Need Another ",str(amount-self.balance)," Rs.")
    def checkBalance(self):
        print("Your Current Balance Is  : ",self.balance)

b1=Bank()
b1.openAccount("Jigar",101,1000)

while True:
    print("*"*60)
    print("1. Deposit")
    print("2. Withdraw")
    print("3. Check Balance")
    print("4. Exit")
    print("*"*60)
    choice=int(input("Enter Your Choice : "))

    if choice==1:
        amount=int(input("Enter Deposit Amount : "))
        b1.deposit(amount)
        print("*"*60)
    elif choice==2:
        amount=int(input("Enter Withdrawal Amount : "))
        b1.withdraw(amount)
        print("*"*60)
    elif choice==3:
        b1.checkBalance()
        print("*"*60)
    elif choice==4:
        print("Thank You For Using Our Services.")
        print("*"*60)
        break
    else:
        print("Invalid Choice. Please Try Again.")
