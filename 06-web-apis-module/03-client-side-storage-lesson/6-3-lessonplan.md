# 6.3 Lesson Plan: Client-Side Storage

## Overview

This lesson will introduce client-side storage APIs and how to persist data in your applications. The lesson ends with a mini-project: a Word Guess Game

## Instructor Notes

* This is students' first exposure to persistence in their web applications. It's going to be very exciting, so use that energy to your advantage. Get students interested in the fact that they can now take their applications to the next level with persistent data.

* The code associated with local and session storage may seem simple, but the concepts and their use cases may be confusing for students seeing these things for the first time.

* Remind students that the code activities are meant to teach. If they are not finished in the allotted time that's ok! Make sure they pay attention to the review and that they ask any questions they need.

## Learning Objectives

* By the end of class, students will be able to:

  * Store data in the user's browser using `localStorage`.

  * Convert an object to and from a JSON string by implementing JSON methods.

  * Persist data using client-side storage.

## Slides

* [6.3 Slides: Client-Side Storage](https://docs.google.com/presentation/d/1WrOfxGXRVawaOtZnHNeOHyNMNb6rU8Io5RaUuOCeJ00/edit?usp=sharing)

## Time Trackers

| Start  | #   | Activity Name                         | Duration |
| ------ | --- | ------------------------------------- | -------- |
| 5:30PM | 0   | Office Hours                          | 0:30     |
| 6:00PM | 1   | Client-Side Storage                   | 0:65     |
| 7:05PM | 2   | ToDo List                             | 0:60     |
| 8:05PM | 3   | BREAK                                 | 0:10     |
| 8:15PM | 4   | Word Guess Game                       | 0:45     |
| 9:00PM | 6   | Office Hours                          | 0:30     |
| 9:30PM | 7   | END                                   | 0:00     |

---

## 1. Client-Side Storage (65 mins)

### 1.1 Instructor Do: Client-Side Storage (15 minutes)

* Welcome students to class.

* Open the deployed [ToDo list app](https://coding-boot-camp.github.io/fs-ground-04-web-APIs-todo-demo/index.html) in your browser and point out the following to students:

  * We can add items to our todo list.

  * We can complete items on our todo list.

  * When we close the browser tab and reopen the application, we see that our todos are still there. Magic!

* Ask the class the following question(s):

  * "When we submit an item to our todo list, where does it go?"

    * Our items are stored in the browser. So far, none of the applications we've worked on have had any kind of persistent data. When an application was refreshed in the browser, all of its state was reset.

  * "How would we build this application?"

    * We would need some kind of storage to hold our data and be able to manipulate that storage via JavaScript.

  * "What would allow that?"

    * A web API—specifically, client-side storage.

* Open [01-Ins-Local-Storage-Counter](activities/01-Ins-Local-Storage-Counter/index.html) in your browser and demonstrate the functionality of the application:

  * When we click either the increment and decrement buttons, the number of "hours spent coding" increases or decreases.

* Open your Chrome DevTools, navigate to `Application`, then `Local Storage`, and point out the following:

  * We are storing our "clicks" with key/value pairs.

* Ask the class the following question(s):

  * "Is this a database?"

  * No, this is **client-side storage**. Data are stored in the client or browser, while a database would require a server.

  * "What would you NOT want to store in the client?"

  * Sensitive information, such as credit card numbers, Social Security numbers, and passwords.

* Open [01-Ins-Local-Storage-Counter/script.js](activities/01-Ins-Local-Storage-Counter/script.js) in your IDE and explain the following:

  * First, we select our counter, add, and subtract buttons and assign them to variables.

    ```js
    var counter = document.querySelector("#counter");
    var addButton = document.querySelector("#add");
    var subtractButton = document.querySelector("#subtract");
    ```
  
  * 🔑 Next, set a `count` variable to the current count with the built-in `localStorage` method `getItem`.

    ```js
    var count = localStorage.getItem("count");
    ```

  * The following line of code is what renders the actual count to our webpage. We call `textContent` on our `counter` element and set it equal to `count` from above.

    ```js
    counter.textContent = count;
    ```

  * 🔑 The last piece is to create two event listeners on our `addButton` and `subtractButton` elements. Here, we are listening for a click event and calling `count++` or `count--`, which in turn calls our `count` function. We then use the built-in `localStorage` method `setItem` to reset our storage with the current data.

    ```js
    addButton.addEventListener("click", function() {
      count++;
      counter.textContent = count;
      
      localStorage.setItem("count", count);
    });

    subtractButton.addEventListener("click", function() {
      count--;
      counter.textContent = count;

      localStorage.setItem("count", count);
    });
    ```

* Ask the class the following question: "How do we add an item to `localStorage`?"
  
  * `localStorage.setItem()`
  
* Answer any questions before proceeding to the next activity.

### 1.2 Student Do: Local Storage (10 minutes)

* Direct students to the next activity, found in [02-Stu-Local-Storage-User/starter](activities/02-Stu-Local-Storage-User/starter/).

```md
# Local Storage

* You have been provided with a sign-up form that successfully submits an email and password. Your job is to write code that saves the email and password to `localStorage` and renders the last submission to the page.

## Instructions

* In your `signUpButton` event listener, you will need to:

  * Save the user to `localStorage`.

* In the `renderLastRegistered()` function you will need to:

  * Fill in code here to retrieve the last registered credentials from `localStorage`.
  
  * If the last registered credential is null, return early from this function.
  
  * Else set the text of the `userEmailSpan`and `userPasswordSpan` to their corresponding values from `localStorage`.
  
**Hint:** Make sure you call `renderLastRegistered()` after you set your `localStorage`.
```

### 1.3 Instructor Do: Review Local Storage (10 minutes)

* Open [02-Stu-Local-Storage-User/solved/script.js](activities/02-Stu-Local-Storage-User/solved/script.js) and explain the following:

* The first thing we need to do is save the form data with:

  ```js
  localStorage.setItem("email", email);
  localStorage.setItem("password", password);
  ```

* Now that we are persisting data to `localStorage`, let's set and return our last user's data inside our `renderLastRegistered()` function.

* We access our `localStorage` data and set the email and password to a variable. We then check if the email and password are null and, if so, return early.

    ```js
    var email = localStorage.getItem("email");
    var password = localStorage.getItem("password");

    if (!email || !password) {
      return;
    }
    ```

* If our data are not null, we set the text of the `userEmailSpan` and `userPasswordSpan` to their corresponding values from `localStorage`.

  ```js
  userEmailSpan.textContent = email;
  userPasswordSpan.textContent = password;
  ```

* With our `renderLastRegistered()` function complete, we can now call it inside our `signUpButton` event listener, after we set our `localStorage` when a form is submitted.

  ```js
  localStorage.setItem("email", email);
  localStorage.setItem("password", password);
  renderLastRegistered();
  ```

* Answer any questions before proceeding to the next activity.

### 1.4 Instructor Do: Local Storage with Uh-Oh (10 minutes)

* Open [03-Ins-Local-Storage-Uh-oh/index.html](activities/03-Ins-Local-Storage-Uh-oh/index.html) in your browser and explain the following:

  * When we submit our form data, we receive a success response.
  
  * But—when we inspect `localStorage`, we see that the value of `user` is `[Object object]`.

* Ask the class the following question: "What do we think is causing this error? "
  
  * 🔑 We are attempting to store an object in `localStorage`. `localStorage` can only store strings.

* Let's take a look at our code.

* Open [03-Ins-Local-Storage-Uh-oh/script.js](activities/03-Ins-Local-Storage-Uh-oh/script.js) in your IDE and point out the following:

  * We are creating our object with the following code:

  ```js
  var user = {
    firstName: firstNameInput.value.trim(),
    lastName: lastNameInput.value.trim(),
    email: emailInput.value.trim(),
    password: passwordInput.value.trim()
  };
  ```

  * We are then setting this object into `localStorage`.

  ```js
  localStorage.setItem("user", user);
  ```

* Ask the class the following questions:

  * "In what format does `localStorage` store data?"

  * `localStorage` only stores string values.

  * "What do you think we need to do to solve this problem?"

  * We need to convert our object to a string.

* Use student answers to transition to the next activity.

### 1.5 Student Do: localStorage with Objects (10 minutes)

* Direct students to [04-Stu-Local-Storage-Objects/starter/script.js](activities/04-Stu-Local-Storage-Objects/starter/script.js).

```md
# Local Storage

* You have been provided with a sign-up form that successfully submits user data and creates an object containing the data. Your job is to save these data to `localStorage` and render the last submission to the page.

## Instructions

* Navigate to the MDN Docs on [JSON Stringify](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify). 

* Use the information there to convert your object to a string format.

* You will be working only inside of your `script.js` file.

* Inside your event listener, modify `localStorage.setItem("user", user);` and `localStorage.getItem("user");`, so they save and render the data.
```

### 1.6 Instructor Do: Review Local Storage with Objects (10 minutes)

* Open [04-Stu-Local-Storage-Objects/solved/script.js](activities/04-Stu-Local-Storage-Objects/solved/script.js) and point out the following:

* We can use `JSON.stringify` to convert an object to a JSON string. We simply pass our object into the `JSON.stringify` method.

  ```js
  localStorage.setItem("user", JSON.stringify(user));
  ```

* Retrieving our data from localStorage and using JSON.parse parses our JSON string and converts it into an object.

* We pass our call to `localStorage.getItem` into the `JSON.parse` method, storing the value as a variable.

  ```js
  var lastUser = JSON.parse(localStorage.getItem("user"));
  ```

* Now that the string has been converted back into an object, we can use simple dot notation to access the key/value pairs.

  ```js
  userFirstNameSpan.textContent = lastUser.firstName;
  userLastNameSpan.textContent = lastUser.lastName;
  userEmailSpan.textContent = lastUser.email;
  userPasswordSpan.textContent = lastUser.password;
  ```

* Ask the class: "What is JSON?"

  * JSON is JavaScript Object Notation. JSON is text, and any JavaScript object can be converted to JSON.

  * Because it's text, we are able to store it into `localStorage` as the string that is required.

## 2. ToDo List (60 mins)

### 2.1 Student Do: Render Todos (15 minutes)

* Direct students to the next activity, found in [05-Stu-Render-Todos/starter](activities/05-Stu-Render-Todos/starter).

```md
# Render Todos

In this activity, you will be writing code to render an array of todo items to the list, as well as add new items to the list.

## Instructions

* Open the `script.js` file provided to you. You have been provided the necessary variable declarations as well as an array of todo items.

* Your goal is to create a function that will render our todos into a list in the browser.

  * Initially, set the text content of the `todoList` to an empty string.
  
  * `todoCountSpan` should show the total count of todos on the page.
  
* Inside of your `render` function, you will also need a `for` loop.

  * It should loop over the `todos` array, creating an `li` element for each index of the array.
  
  * It should set the content of the created `li` element to the value of the current array index.
  
  * Finally, the new `li` should be appended to the `ul` provided.

* Add an event listener so that, when a user hits `enter`, the value from the todo input field is pushed to our todo array.

* Make sure that empty values are not pushed to the array.

* Once the value has been added to the array, clear the input field and re-render the `todoList`.
```

### 2.2 Instructor Do: Review Render Todos (15 minutes)

* Open [05-Stu-Render-Todos/solved](activities/05-Stu-Render-Todos/solved) and in your browser and briefly demonstrate the new functionality by adding new items to the todo list.

* Next, navigate to [05-Stu-Render-Todos/solved/script.js](activities/05-Stu-Render-Todos/solved/script.js) in your IDE and point out the following:

  * First, we create our `renderTodos()` function.

    ```js
    function renderTodos() {

      // ...
    }
    ```

  * Next, inside our function, we set the `innerHTML` of our `todoList` element to be a blank string.

    ```js
    function renderTodos() {
      todoList.innerHTML = "";
    ```

  * We then set the `todoCountSpan` text content to the length of our `todos` array.
  
  ```js
    todoCountSpan.textContent = todos.length;
  }
  ```

  * Next, we create a `for` loop that sets the value of the todos array at each index to a variable todo.
  
  ```js
  for (var i = 0; i < todos.length; i++) {
    var todo = todos[i];
  ```
  
  * We then creates a new `li` element and set the `textContent` of the newly created `li` to the variable we created at the beginning of our loop.

  ```js
  var li = document.createElement("li");
  li.textContent = todo;
  ```

  *Finally, we append our new list item to our existing `todoList` as a child.

  ```js
  todoList.appendChild(li);
  ```

  * Now that we have created a function that will render our todos, we can invoke it after our array variable declaration.

  ```js
  var todos = ["Learn HTML", "Learn CSS", "Learn JavaScript"];
  renderTodos();
  ```

* Next go over the adding todo functionality:

  * We're listening for the `submit` event. Note that it would also be acceptable to add a keydown listener and check if the key pressed is `enter`. Mention that, instead of listening for `submit`, it requires less code. Additionally, the callback function doesn't have to run needlessly every time the user presses a key.

  ```js
  todoForm.addEventListener("submit", function(event) {
  event.preventDefault();
  ```

  * 🗒 It's worth noting that there are two form behaviors that most commonly cause the `submit` event. The `return` key is pressed within a text input field or a `submit` button is clicked. This could be desired behavior, but remind students that there are situations where this behavior is not desired.

  * The `.trim()` method removes white space from before and after the input.

  ```js
  var todoText = todoInput.value.trim();
  ```

  * If the `todoText` is empty, return. This will prevent us from pushing empty strings to the todos array.

  ```js
  if (todoText === "") {
    return;
  }
  ```

  * Lastly, we push the `todoText` to the todos array, reset its value, and render the todos again.

  ```js
  todos.push(todoText);
  todoInput.value = "";

  renderTodos();
  });
  ```

* Answer any questions before moving to the next activity.

### 2.3 Student Do: Complete Todos (15 minutes)

* Direct students toward the next activity, located in [06-Stu-Complete-Todos/starter](activities/06-Stu-Complete-Todos/starter).

```md
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
```

### 2.4 Instructor Do: Review Todos (15 minutes)

* Open [06-Stu-Complete-Todos/solved/script.js](activities/06-Stu-Complete-Todos/solved) in your IDE and point out the following:

  * First, show students the unsolved `renderTodos()` function for context.

  ```js
  function renderTodos() {

    todoList.innerHTML = "";
    todoCountSpan.textContent = todos.length;

    for (var i = 0; i < todos.length; i++) {
      var todo = todos[i];

      var li = document.createElement("li");
      li.textContent = todo;
      todoList.appendChild(li);
    }
  }
  ```

  * In order to track which todo we are going to mark as complete, we need to set a `data-index` that points to each todo's index, `i` from our `for` loop.

  ```js
  li.setAttribute("data-index", i);
  ```

  * Next, we can create a `complete` button for each item and set its text to "Complete."

  ```js
  var button = document.createElement("button");
      button.textContent = "Complete";
  ```

  * Finally, we append our newly updated button to our `li`.

  ```js
  li.appendChild(button);
  ```

  * Now that our todo can be marked as complete, we have to create an event listener for our button that removes it from the list when clicked.

  ```js
  todoList.addEventListener("click", function(event) {
  ```

  * Next, we set a variable for `event.target`. When an element is clicked, we check if it was a button and, if so, grab the `data-index` of that element.

  ```js
  var element = event.target;
  ```

  * We then use `.splice` to remove the element with that index and re-render our todos by calling `renderTodos()`. The `.splice` method allows us to change the contents of an array. We can use it to remove, replace, or add new elements.

  ```js
  if (element.matches("button") === true) {
    var index = element.parentElement.getAttribute("data-index");
    todos.splice(index, 1);
    renderTodos();
  ```

* Next review storing the todos:

* Inside the `init()`, function we set a variable called `storedTodos` that retrieves the todos from `localStorage` and parses the JSON string to an object.

  ```js
  var storedTodos = JSON.parse(localStorage.getItem("todos"));
  ```

* We then check if the todos were retrieved from `localStorage` and, if so, set a `todos` variable with the `storedTodos` and the render the todos to the DOM.

  ```js
  if (storedTodos !== null) {
      todos = storedTodos;
    }

  renderTodos();
  ```

* Inside our `storeTodos()` function, we stringify and set the "todos" key in `localStorage` to the `todos` array.

  ```js
  localStorage.setItem("todos", JSON.stringify(todos));
  ```

* Answer any questions before letting students out for break.

---

### 3. BREAK (10 minutes)

---

## 4. Word Guess Game (45 mins)

### 4.1 Student Do: Mini-Project (30 min)

* Direct students to the activity instructions found in `07-Stu-Word-Guess/README.md`.

* Break your students into groups that will work together on this activity.

  ```md
  # Mini-Project: Word Guess

  In this activity, you will work with a group to build a game using JavaScript and Web APIs.

  ## Instructions

  The completed application should meet the following criteria:

  * As a user, I want to start the game by clicking on a button. 

  * As a user, I want to try and guess a word by filling in a number of blanks that match the number of letters in that word.

  * As a user, I want the game to be timed. 

  * As a user, I want to win the game when I have guessed all the letters in the word.

  * As a user, I want to lose the game when the timer runs out before I have guessed all the letters.

  * As a user, I want to see my total wins and losses on the screen. 

  ### Specifications

  * When a user presses a letter key, the user's guess should be captured as a key event.

  * When a user correctly guesses a letter, the corresponding blank "_" should be replaced by the letter. For example, if the user correctly selects "a", then "a _ _ a _" should appear. 

  * When a user wins or loses a game, a message should appear and the timer should stop. 

  * When a user clicks the start button, the timer should reset. 

  * When a user refreshes or returns to the browser page, the win and loss counts should persist.

  ## 💡 Notes

  Refer to the documentation:

  * [MDN Web Docs on KeyboardEvent](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent)

  * [MDN Web Docs on Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

  * [MDN Web Docs on loops and iteration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)

  * [MDN Web Docs on setInterval()](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval)

  * [MDN Web Docs on clearInterval()](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/clearInterval)

  * [MDN Web Docs on localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your group to further your knowledge:

  * How can you add a reset button to set the win and loss counts back to zero? 

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 4.3 Instructor Review: Mini-Project (15 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with this mini-project? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ `getItem()`

  * ✔️ `setItem()`

  * ✔️ `addEventListener()`

  * ✔️ `setInterval()`

  * ✔️ `clearInterval()`

  * ✔️ `keydown`

* Open `07-Stu-Word-Guess/solved/assets/js/script.js` in your IDE and explain the following:

  * We store the words that the user will guess in an array, as follows:

    ```js
    var words = ["variable","array", "modulus", "object", "function", "string", "boolean"];
    ```

  * The actions that will be performed are organized into a series of functions. Each function holds a block of code that performs a task and is called when needed, often inside another function. This allows us to write DRY code and make code blocks more reusable.

  * We use an `init()` function to hold the code that we want to execute when the page loads. When the `init()` function executes, the functions called inside it will also execute. See the following code for an example:

    ```js
    function init() {
      getWins();
      getlosses();
    }
    ```

  * 🔑 The `getWins()` function retrieves the win count from storage, using `getItem()`, and renders it to the page&mdash;as shown in the following example:

    ```js
      function getWins() {
        var storedWins = localStorage.getItem("winCount");
        if (storedWins === null) {
          winCounter = 0;
        } else {
          winCounter = storedWins;
      }
      win.textContent = winCounter;
    }
    ```

  * The `getlosses()` function also retrieves the loss count from storage and renders it to the page. If no data is returned, the lose counter is set to `0`. See the following code for an example:

    ```js
    function getlosses() {
      var storedLosses = localStorage.getItem("loseCount");
      if (storedLosses === null) {
        loseCounter = 0;
      } else {
        loseCounter = storedLosses;
      }
      lose.textContent = loseCounter;
    }
    ```

  * 🔑 To set the data to storage, we use `setItem()`. We put the code in the functions `setWins()` and `setLosses()`. These functions will be called inside the `winGame()` and `loseGame()` functions, as shown in the following example:

    ```js
    function setWins() {
      win.textContent = winCounter;
      localStorage.setItem("winCount", winCounter);
    }

    function setLosses() {
      lose.textContent = loseCounter;
      localStorage.setItem("loseCount", loseCounter);
    }
    ```

  * 🔑 To start the game when the button is clicked, we add an event listener to the start button, as follows:

    ```js
    startButton.addEventListener("click", startGame);
    ```

  * The `startGame()` function executes when the button is clicked. `renderBlanks()` and `startTimer()` will also be executed, as shown in the following example:

    ```js
    function startGame() {
      isWin = false;
      timerCount = 10;
      startButton.disabled = true;
      renderBlanks()
      startTimer()
    }
    ```

  * The `renderBlanks()` function uses `Math.random()` to randomly pick a word from an array and a loop to push blanks to the `blankLetters` array, as follows:

    ```js
    function renderBlanks() {
      chosenWord = words[Math.floor(Math.random() * words.length)];
      lettersInChosenWord = chosenWord.split("");
      numBlanks = lettersInChosenWord.length;
      blanksLetters = []
      for (var i = 0; i < numBlanks; i++) {
        blanksLetters.push("_");
      }
      wordBlank.textContent = blanksLetters.join(" ")
    }

    ```

  * 🔑 The `startTimer()` function starts the countdown. We use `setInterval()` to set the count to decrease each second and `clearInterval()` to stop the countdown. The `startTimer()` function also uses conditionals to determine whether the user won or lost, as shown in the following example:

    ```js
    function startTimer() {
      timer = setInterval(function() {
        timerCount--;
        timerElement.textContent = timerCount;
        if (timerCount >= 0) {
          if (isWin && timerCount > 0) {
            clearInterval(timer);
            winGame();
          }
        }
        if (timerCount === 0) {
          clearInterval(timer);
          loseGame();
        }
      }, 1000);
    }

    ```

  * The `winGame()` and `loseGame()` functions are executed if the win and loss conditions are met. Note that the `setWins()` and `setLosses()` functions are called inside the function. This will set the data to storage. See the following code for an example:

    ```js
    function winGame() {
      wordBlank.textContent = "YOU WON!!!🏆 ";
      winCounter++
      startButton.disabled = false;
      setWins()
    }

    function loseGame() {
      wordBlank.textContent = "GAME OVER";
      loseCounter++
      startButton.disabled = false;
      setLosses()
    }

    ```

  * 🔑 To capture the user's input, we attach an event listener to the document and use a `keydown` event. If the timer count is zero, then the function returns and nothing happens. Else, we check that the inputted key is a letter. If it is, the `checkLetters()` and `checkWins()` functions are executed. See the following code for an example:

    ```js
    document.addEventListener("keydown", function(event) {
      if (timerCount === 0) {
        return;
      }
      var key = event.key.toLowerCase();
      var alphabetNumericCharacters = "abcdefghijklmnopqrstuvwxyz0123456789 ".split("");
      if (alphabetNumericCharacters.includes(key)) {
        var letterGuessed = event.key;
        checkLetters(letterGuessed)
        checkWin();
      }
    });
    ```

  * In the `checkLetters()` function, we use conditional statements to test whether the letter is a match, as follows:

    ```js
    function checkLetters(letter) {
      var letterInWord = false;
      for (var i = 0; i < numBlanks; i++) {
        if (chosenWord[i] === letter) {
          letterInWord = true;
        }
      }
      if (letterInWord) {
        for (var j = 0; j < numBlanks; j++) {
          if (chosenWord[j] === letter) {
            blanksLetters[j] = letter;
          }
        }
        wordBlank.textContent = blanksLetters.join(" ");
      }
    }

    ```

  * We also use conditional statements to check whether there is a win, as follows:

    ```js
    function checkWin() {
      if (chosenWord === blanksLetters.join("")) {
        isWin = true;
      }
    }
    ```

  * For the bonus, we use `querySelector()` to select the reset button element, as follows:

    ```js
    var resetButton = document.querySelector(".reset-button");
    ```

  * We create a function called `resetGame()`, like in the following example:

    ```js
    function resetGame() {}
    ```

  * Inside the function, we reset the values of the win and lose counters to `0`, as shown in the following example:

    ```js
    winCounter = 0;
    loseCounter = 0;
    ```

  * We call the `setWin()` and `setLosses()` function inside `resetGame()`. When the `resetGame()` function is called, the values will be reset to `0`, then saved to storage. The order is important here. See the following code for an example:

    ```js
    function resetGame() {
      winCounter = 0;
      loseCounter = 0;
      setWins()
      setLosses()
    }
    ```

  * We use an event listener to execute the `resetGame()` function when the button is clicked, as follows:

    ```js
    function resetGame() {
      winCounter = 0;
      loseCounter = 0;
      setWins()
      setLosses()
    }
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ When working to solve a complex coding problem like the mini-project, it is important to have a plan. How can you use functions to break down your complex projects into manageable chunks of code?

  * 🙋 Functions are reusable blocks of code that perform a task. We can write a function to perform a simple task needed in the code. Then we can call it when we need it, even inside another function.

  * ☝️ How can we use event listeners to capture user input and perform a task?

  * 🙋 We attach an event listener to the HTML element, like a button, or even the entire document. When the event occurs, a function will be executed. For example, we attach an event listener to a button to listen for a click. When a click happens, the actions described in the function will occur.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [MDN Web Docs on EventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventListener), the [MDN Web Docs on localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage), and the [MDN Web Docs on setInterval()](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval), and stick around for office hours to ask for help.

## 5. Office Hours (30 minutes)

## 6. END (0 min)

How did today’s lesson go? Your feedback is important. Please take 5 minutes to complete this anonymous survey.

[Class Survey](https://forms.gle/nYLbt6NZUNJMJ1h38)

---

© 2022 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
