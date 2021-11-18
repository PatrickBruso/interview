"""
Find the sum of the digits of a number
"""


def sum_of_digits(number):
    return sum(int(x) for x in str(number))


print(sum_of_digits(656))
print(sum_of_digits(45612321))
