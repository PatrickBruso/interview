"""
Program to find Fibonacci number of n.
Uses memo dict to store fibonacci values for quicker processing
"""

memo = {}


def fib(n):
    if n in memo:
        return memo[n]
    if n <= 2:
        f = 1
    else:
        f = fib(n-1) + fib(n-2)
    memo[n] = f
    return f


print(fib(50))
print(fib(51))
