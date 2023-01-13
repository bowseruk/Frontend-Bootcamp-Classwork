# Local Storage

* You have been provided with a sign-up form that successfully submits an email and password. Your job is to write code that saves the email and password to `localStorage` and renders the last submission to the page.

## Instructions

* In your `signUpButton` event listener, you will need to:

  * Save the user to `localStorage`.

* In the `renderLastRegistered()` function, you will need to:

  * Fill in code here to retrieve the last registered credentials from `localStorage`.
  
  * If the last registered credential is null, return early from this function.
  
  * Else set the text of the `userEmailSpan` and `userPasswordSpan` to their corresponding values from `localStorage`.
  
**Hint:** Make sure you call `renderLastRegistered()` after you set your `localStorage`.

---

© 2022 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
