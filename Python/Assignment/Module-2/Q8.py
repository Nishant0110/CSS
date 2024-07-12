# Write a Python program to test whether a passed letter is a vowel or not.

l = input("Input a letter of the alphabet: ")

# Check if the input letter 'l' is a vowel
if l in ('a', 'e', 'i', 'o', 'u'):
    print(f"{l} is a vowel.")
else:
    print(f"{l} is not a vowel.")
