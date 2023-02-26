# Mock FS

In this activity, you will write code to mock and spy on the `fs` module to ensure that it's called when expected with the correct arguments.

## Instructions

* Open the `starter/fileIO.js` file and take a moment to examine its contents.

  * This file exports a `FileIO` constructor function with methods for reading and writing to the file system.

  * The `read` and `write` methods use the synchronous versions of `fs.readFile` and `fs.writeFile`, so no callback function is required.

* Open `starter/tests/fileIO/test.js` and add code to mock the `fs` module its `readFileSync` and `writeFileSync` methods so that they don't read from and write to the file system.

* Make sure that the `readFileSync` and `writeFileSync` methods are called with the correct arguments when the `FileIO.prototype.read` and `FileIO.prototype.write` methods are called.

## 💡 Hints

* Refer to the previous demonstration to reference how to mock node modules.

## 🏆 BONUS

* Write tests for a `FileIO.prototype.append` method that should append to a given file. Then update the `starter/fileIO.js` file to include this method using the `fs.appendFileSync` method.

---

© 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
