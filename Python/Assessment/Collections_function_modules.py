def generate_note():
    # Open the file in append mode so existing content is not overwritten
    with open("master.txt", "a") as file:
        # Prompt the user to input the name, title, and content for the note
        name = input("Enter Python E-Note Generator Name: ")
        title = input("Enter Python E-Note Title: ")
        content = input("Enter E-Note Content: ")
        
        # Write the information to the file
        file.write(f"Generator Name: {name}\nTitle: {title}\nContent: {content}\n")
        
def view_note():
    # Open the file in read mode
    with open("master.txt","r") as file:
        # Print the contents of the file
        print(file.read())

def menu():
    # Display the menu options for the user
    print("Welcome to E-note to Python")
    print("1.Generate Note")
    print("2.View Note")
    print("3.Exit")

    # Loop to continuously prompt the user for input until they choose to exit
    while True:
        # Prompt the user to enter their choice
        choice = int(input("Enter your choice here:"))
        
        # Check the user's choice and perform action
        if choice == 1:
            generate_note()
        elif choice == 2:
            view_note()
        elif choice == 3:
            # Exit the loop and end the program
            break
        else:
            # Display a message when you enter invalid input
            print("Invalid input entered please try again ")

# Call the menu function to start the program
menu()
