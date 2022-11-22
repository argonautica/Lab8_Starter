# Lab 8 - Starter


1. Where would you fit your automated tests in your Recipe project development pipeline? Select one of the following and explain why.  

   - Within a Github action that runs whenever code is pushed 
   
      The other two options make it difficult for all group members since different tests will be run locally by different people, and it is important that all tests pass for everyone. 
2. Would you use an end to end test to check if a function is returning the correct output? (yes/no)
   - No
3. Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.
   - No, because this feature requires components interacting with each other, which cannot be tested in a unit test. 

4. Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.
   - Yes, because limiting message length can be tested in one unit test and can be simply checked with a singular assert statement.



