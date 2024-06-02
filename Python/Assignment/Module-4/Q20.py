# Write python program that user to enter only odd numbers, else will raise an exception.

def get_odd_number():
    while True:
        try:
            num = int(input("Please enter an odd number: "))
            if num % 2 == 0:
                raise ValueError("Even numbers are not allowed!")
            else:
                return num
        except ValueError as e:
            print(e)

# Example usage
try:
    odd_number = get_odd_number()
    print("You entered:", odd_number)
except KeyboardInterrupt:
    print("\nProgram terminated by the user.")
