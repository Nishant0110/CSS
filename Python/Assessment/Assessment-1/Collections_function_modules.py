def generate_note():
    name = input("Enter Python E-Note Generator Name: ")
    title = input("Enter Python E-Note Title: ")
    content = input("Enter E-Note Content: ")
    with open(name+".txt", "a") as file:
        file.write(f"Generator Name: {name}\nTitle: {title}\nContent: {content}\n")# Write the information to the file
        
def view_note():
    name=input("Enter Python E-Note Generator Name:")
    with open(name+".txt","r") as file: # Open the file in read mode
        print(file.read())

def menu():
    print("Welcome to E-note to Python")
    print("1.Generate Note")
    print("2.View Note")
    print("3.Exit")

    # Loop to continuously prompt the user for input until they choose to exit
    while True:
        # Prompt the user to enter their choice
        choice = int(input("Enter your choice here:"))
        
        # Check the user choice and perform action
        if choice == 1:
            generate_note()
        elif choice == 2:
            view_note()
        elif choice == 3:
            break
        else:
            print("Invalid input entered please try again ")
menu()
