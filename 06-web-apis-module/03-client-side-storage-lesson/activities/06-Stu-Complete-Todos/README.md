# Complete Todos

In this activity, we will create a "Complete" button that successfully removes a todo item from the list when clicked.

Then we will work on storing our todos in `localStorage`

## Instructions

1. Create a "Complete" Button

* Modify your `renderTodos()` function:

  * When a new todo is created, add a `data-index` for each `li`.

  * Generate a button that says "Complete" and append it to your `li`.

* Add an event listener so that, when a user clicks the `complete` button, it accesses the `data-index` value and removes that todo element from the list.

**Hint:** You can use `setAttribute` for `data-index` and `splice` to remove your todo from the list.

2. Store todos in `localStorage`

* Inside the `init()` function:

  * Set a variable called `storedTodos` that retrieves the todos from `localStorage` and parses the JSON string to an object.

  * Check if the todos were retrieved from `localStorage` and, if so, set a `todos` variable with the `storedTodos`.

  * Lastly, render the todos to the DOM.

* Inside the `storeTodos()` function:

  * Stringify and set the "todos" key in `localStorage` to the `todos` array.

**Hint:** You will need to use `JSON.stringify` and `JSON.parse`.

---

© 2022 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
