# Structured Tests

In this activity, you will be writing code to test two constructor functions. You will attempt to follow the Arrange-Act-Assert pattern.

## Instructions

* Open the `starter/child.js` file and examine its contents.

  * This file exports a `Child` constructor function. The constructor function expects to be provided a name and an age.

  * If `name` is not a string or `name` is an empty string, an error is thrown.

  * If `age` is not a number, is `NaN`, or is less than `0`, an error is thrown.

  * Otherwise, these values are added to the created instance when the constructor is called.

* Open the `starter/dayCare.js` file and examine its contents:

  * This file requires the `Child` constructor function.

  * This file exports a `DayCare` constructor function.

  * The `DayCare` constructor has an empty `children` array, a capacity of 3, and an `ageLimit` of 6.

  * The `DayCare` constructor has an `addChild` method used for adding `Child` objects to the `children` array and a `pickupChild` method used for removing a `Child` object from the `children` array.

* Inside of the `starter/test/child.test.js` file, write code to test that the `Child` constructor works as expected.

* Inside of the `starter/test/dayCare.test.js` file, write code to test that the `DayCare` constructor and methods work as expected.

* The only files you need to modify for this activity are `starter/test/child.test.js` and `starter/test/dayCare.test.js`.

## 💡 Hints

* After adding each test, run `npm run test` in your terminal to ensure that the test passes.

* When deciding what to test for, consider the following:

  * Positive tests: What happens when things go well?

  * Negative tests: What happens in edge cases or when things shouldn't work?

  * Exception tests: What happens in cases when an error should be thrown?

---

© 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
