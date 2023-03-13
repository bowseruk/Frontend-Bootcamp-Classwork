# Configuring Enzyme with a React Project

During this activity, we will configure `Enzyme` within our React project. By default, CRA creates a file called `setupTest.js`. This file allows us to provide a reference to the adapter package that we installed in [02-We-CRA16](#). The configuration makes `enzyme` and `enzyme-adapter-react-16` available to our entire React project so that we are able to utilize it in every test file we create.

## Instructions

Perform the following actions inside of the `src/setupTest.js` file:
1. Import the `configure` method from the `enzyme` package.
2. Import the `Adapter` class from `enzyme-adapter-react-16`.
3. Configure the `enzyme` adapter to be the default adapter in our project.
   1. Invoke the `configure` method.
   2. Pass it an object with a **key** of `adapter`, and its **value** should be a new instantiated instance of the `Adapter` class that was imported earlier.

---

© 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
