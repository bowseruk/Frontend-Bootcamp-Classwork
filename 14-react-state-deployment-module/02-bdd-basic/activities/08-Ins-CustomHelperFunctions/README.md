# Refactor App.test.js: Create Custom Helper Functions

Demonstrate to students how to create a two custom helper functions, `setup()` and `findByTestAttr()`.

## Instructions

Inside of `src/App.test.js`, create the following functions that meet the criteria provided:

1. `setup()`: This function should accept no arguments and return a shallow render of the App component each time it is invoked.

2. `findByTestAttr()`: This function should accept two arguments, `wrapper` and `value`, and perform a find lookup within the wrapper based on the `data-test` value provided.

  * Wrapper is the component wrapper we want to look within.

  * Value is the test attribute value that we are searching for.

---

© 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
