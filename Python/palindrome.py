"""
Script to determine if a string s is a palindrome
"""


def palindrome(s):
    s = s.lower()
    return s == s[::-1]


print(palindrome("hello"))
print(palindrome("Radar"))
