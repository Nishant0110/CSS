# When is the finally block executed?
'''
1. No exception occurs: If no exception occurs in the try block, the finally block is executed after the try block completes.
2.An exception occurs and is handled: If an exception occurs and is caught by an except block, the finally block is executed after the except block completes.
3.An exception occurs and is not handled: If an exception occurs and is not caught by any except block, the finally block is still executed, after which the exception is propagated up to the calling code.
4.The try block has a return, break, or continue statement: If the try block contains a return, break, or continue statement, the finally block is executed before the control flow leaves the try statement.

'''
