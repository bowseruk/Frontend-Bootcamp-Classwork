# TDD

In this activity, you will write tests outlining the expected functionality for application code that hasn't been implemented yet.

## Instructions

* Open the `algo.js` file and take a moment to examine the code.
  
  * The `Algo` constructor function has three empty methods: `reverse`, `isPalindrome`, and `capitalize`.

* Now open the `test/algo.test.js` file.

  * This file contains `describe` blocks for each method on the `Algo` constructor.

* Write code to test each method:

  * The `reverse` method should take a string as an argument and return a new reversed version of the string (e.g., "Hello" should return "elloH").

  * The `isPalindrome` method should take a string as an argument and return the Boolean `true` if the provided string is a palindrome. A palindrome is a word that is the same backwards as it is forwards (e.g., "racecar"). Return `false` if the string is not a palindrome.

  * The `capitalize` method should take a string as an argument and return a new string with the first letter of each word capitalized (e.g., "hello world!" should return "Hello World!").

* **Important:** Write code for the tests only. The only file you will be modifying is `tests/algo.test.js`. Initially, all your tests will fail because these methods are empty, but the tests can define how each method _should_ work.

## 💡 Hint

* Use the previous example as a reference.

---

© 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
