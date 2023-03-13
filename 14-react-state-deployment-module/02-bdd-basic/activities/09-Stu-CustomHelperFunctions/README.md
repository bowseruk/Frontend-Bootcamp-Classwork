# Refactor App.test.js: Create Custom Helper Functions

In this activity, you will reinforce and build upon the testing skills that you have learned so far by refactoring your code to contain the `setup` and `findByTestAttr` function that were demonstrated by the instructor in [08-Ins-CustomHelperFunctions](../08-Ins-CustomHelperFunctions/README.md).

## Instructions

Inside of `src/App.test.js`, create two helper functions:

1. `setup()`: This function should accept no arguments and return a shallow render of the app component each time it is invoked.

2. `findByTestAttr()`: This function should accept two arguments, `wrapper` and `value`, and perform a find lookup within the wrapper based on the `data-test` value provided.
  
  * Wrapper is the component wrapper we want to look within.
  
  * Value is the test attribute value that we are searching for.

---

© 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
