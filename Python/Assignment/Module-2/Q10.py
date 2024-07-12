# Write a Python program that will return true if the two given integer values are equal or their sum or difference is 5

def check(x, y):
    if x == y or (x - y) == 5 or (x + y) == 5:
        return True
    else:
        return False
print(check(7, 2))  # True
print(check(3, 2))  # True
print(check(2, 2))  # True
print(check(7, 3))  # False
print(check(27, 53))  # False

