# 6.2 Lesson Plan: Events

## Overview

In today's class, students will learn how to add event listeners to a DOM element, cancel default events, and stop event propogation. Students will also store information on HTML elements using data attributes.

## Instructor Notes

* Today's class will provide students with additional exposure to the DOM, this time focusing on events. The primary goal today is to ensure that students feel comfortable setting up event listeners and using their callbacks to manipulate the DOM.

## Learning Objectives

By the end of class students will be able to:

* Handle click events by using `addEventListener()`.

* Prevent default behavior by using `event.preventDefault()`.

* Stop the propagation of events by using `event.stopPropagation()`.

* Work with keyboard events `keyup` and `keydown`.

* Store information on HTML elements by using data attributes.

## Time Tracker

| Start  | #   | Activity Name                         | Duration |
| ------ | --- | ------------------------------------- | -------- |
| 5:30PM | 0   | Office Hours                          | 0:30     |
| 6:00PM | 1   | Event Listeners                       | 0:75     |
| 7:15PM | 2   | Keyboard Events                       | 0:35     |
| 7:50PM | 3   | BREAK                                 | 0:10     |
| 8:00PM | 4   | Event Bubbling                        | 0:30     |
| 8:30PM | 5   | Data Attributes                       | 0:35     |
| 9:05PM | 6   | Office Hours                          | 0:30     |
| 9:35PM | 7   | END                                   | 0:00     |

---

## 1. Event Listeners (75 mins)

### 1.1 Instructor Do: Stoke Curiosity (10 min)

* Welcome students to class.

* Congratulate the class on how much they have learned up to this point. Stress that while DOM manipulation might seem tricky at first, it is an essential skill used by web developers to create dynamic, interactive web applications.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What are some ways that we have already learned to manipulate the DOM using JavaScript?

  * 🙋 We have learned how to create and append elements to the document, add styles to specific elements using `setAttribute()`, and implement timers using `setInterval()` and `clearInterval()`.

* Explain that in today's class we will build on these DOM skills by learning how to use JavaScript to react to events.

* Open the [event target example](https://mdn.github.io/learning-area/javascript/building-blocks/events/useful-eventtarget.html) in your browser and explain the following:

  * The MDN Web Docs team built this demo to showcase how an event&mdash;in this case a click&mdash;can trigger a JavaScript reaction.

  * When we open the browser we see nothing. When we click on the upper part of the screen a block appears.

  * When we click on an area inside the block, the area that we clicked changes to a new color.

  * When we click on the area again, the color changes.

* Stress that we have already learned most of the skills needed to achieve this color change functionality.

* We can use `setAttribute()` or the element's `style` property to add or change an element's color.

* We can use the document methods `querySelector()` or `getElementbyId()` to access the element that we want to change.

* Explain that in today's class, we will expand on those methods and properties and learn how to make webpages more interactive by listening and responding to events.

### 1.2 Instructor Demo: Event Listener (10 min)

* Open `01-Ins-Event-Listener/index.html` in your browser and demonstrate the following:

  * When we open the browser window, the background is in dark mode.

  * When we click on the toggle switch, the background switches to light mode.

* Open `01-Ins-Event-Listener/assets/js/script.js` in your IDE and demonstrate the following:

  * 🔑 We add the `addEventListener()` method to listen for an event on the `themeSwitcher` element, as follows:

    ```js
    themeSwitcher.addEventListener()
    ```

  * 🔑 The `addEventListener()` method takes two parameters. The first is the type of event, which we set to `click`&mdash;as shown in the following example&mdash;because we want something to happen when a user clicks on the `themeSwitcher` element:

    ```js
    themeSwitcher.addEventListener("click",
    ```

  * 🔑 The second parameter is the action that we want performed when a user clicks&mdash;that is, a function, as shown in the following example:

    ```js
    themeSwitcher.addEventListener("click", function() {...})
    ```

  * 🔑 Inside the function, we write the code that we want executed every time the event happens. We use `setAttribute()` to change the background to a light color if the background is in dark mode, as shown in the following example:

    ```js
    if (mode === "dark") {
      mode = "light";
      container.setAttribute("class", "light");
    }
    ```

  * 🔑 Else, when a user clicks, we set the background to a dark mode by setting the `dark` class, as follows:

    ```js
    else {
      mode = "dark";
      container.setAttribute("class", "dark");
    } 
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ Where have we used conditional statements before?

  * 🙋 All the code that performs the action in this activity is code that we learned before. Particularly, we used conditional statements to add decision-making to the Rock, Paper, Scissors project. The `addEventListener()` method just adds a new layer to these existing JavaScript skills.

  * ☝️ Which two parameters does the `addEventListener()` method need to execute?

  * 🙋 The `addEventListener()` method takes the name of the event (like `click`) as the first parameter. The action that will be executed is the second parameter.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `02-Stu-Event-Listener/README.md`.

### 1.3 Student Do: Event Listener (15 min)

* Direct students to the activity instructions found in `12-Stu-Event-Listener/README.md`.

* Break your students into pairs that will work together on this activity.

  ```md
  # 🏗️ Implement Event Handler on Mouse Click

  Work with a partner to implement the following user story:

  * As a developer, I want to increment or decrement a count when a user clicks on a button.

  ## Acceptance Criteria

  * It's done when a user clicks on the increment button and the count is increased by `1`.

  * It's done when a user clicks on the decrement button and, if the count is greater than `0`, the count is decreased by `1`.

  ## Assets

  The following animation demonstrates the web application's appearance and functionality:

  ![As the user selects the Decrement and Increment buttons, the Current Count number decreases and increases respectively.](./images/01-demo.gif)

  ---

  ## 💡 Hints

  What method can we use to listen for an event click? 

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * A click is just one type of DOM event. What are some others?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 1.4 Instructor Review: Event Listener (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with event listeners? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ `querySelector()`

  * ✔️ `addEventListener()`

* Open `02-Stu-Event-Listener/solved/assets/js/script.js` in your IDE and explain the following:

  * 🔑 We use `querySelector()` to select the button elements, as shown in the following example:

    ```js
    var incrementEl = document.querySelector("#increment");
    var decrementEl = document.querySelector("#decrement");
    ```

  * 🔑 We add an `addEventListener()` to the increment button and set the type of event to be a `click`, as shown in the following example:

    ```js
    incrementEl.addEventListener("click", function() {...})
    ```

  * 🔑 The `addEventListener()` method's second parameter is a function that contains the action that we want to execute when the `click` event occurs. This function increments the count by `1` and calls the `setCounterText()` function to update the HTML. See the following code for an example:

    ```js
    function() {
      count++;
      setCounterText();
    }
    ```

  * We repeat the process for the decrement button but use the decrement operator `--` to decrease the count. We add a conditional statement so that the action is performed only if the count is greater than `0`. See the following code for an example:

    ```js
    decrementEl.addEventListener("click", function() {
      if (count > 0) {
        count--;
        setCounterText();
      }
    });
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How can we listen for an event on an element and then react by performing an action?

  * 🙋 We use the`addEventListener()` method. We set the method's first parameter to the type of event that we want to listen for, and the second parameter is the action that we want performed when an event, like a click, happens.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [MDN Web Docs on addEventListener()](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener), and stick around for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 1.5 Instructor Demo: Preventing Default (10 min)

* Open `03-Ins-Preventing-Default/index.html` in your browser and demonstrate the following:

  * When we enter information and click the submit button on this form, a message appears.

  * 🔑 The message includes the information that we entered in the text fields, and the text fields are not cleared. This works because we canceled the form's default action.

* Open `03-Ins-Preventing-Default/assets/js/script.js` in your IDE and demonstrate the following:

  * 🔑 Sometimes we want to prevent a default action from occurring in response to an event.

  * 🔑 When we click on a button inside a `<form>` element, the information in all text fields is cleared out by default.

  * 🔑 To prevent that action from happening, we use `event.preventDefault()`. This allows us to retain the information in the text field after the click so that we can print the message. See the following code for an example:

    ```js
    function showResponse(event) {
      event.preventDefault();
      console.log(event);
      var response = "Thank you for your submission " + nameInput.value + "! We will reach out to you at " + emailInput.value + ".";
      submissionResponseEl.textContent = response;
    }
    ```

  * 🔑 The action that we want performed when a user clicks on an element can also be separated into its own named function. We add it as a parameter of the `addEventListener()` method by using the name of function. This is useful when we want to separate the logic or use the same action in multiple places. See the following code for an example:

    ```js
    submitEl.addEventListener("click", showResponse);
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How do we prevent a default action from occurring when in response to an event?

  * 🙋 We use `event.preventDefault()`. This is useful when we want to cancel the default action and instead execute the code that we wrote.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `04-Stu-Preventing-Default/README.md`.

### 1.6 Student Do: Preventing Default (10 min)

* Direct students to the activity instructions found in `04-Stu-Preventing-Default/README.md`.

* Break your students into pairs that will work together on this activity.

  ```md
  # 🐛 Submit Button on Form Returns 404 Error

  Work with a partner to resolve the following issues:

  * Users should be able to see the calculated tip amount and total on the screen after clicking on the submit button. 

  * Fix the code so that the actual behavior reflects the expected behavior

  ## Expected Behavior

  When a user enters numbers in the text fields and clicks on the Calculate Tip button, calculated totals for both the tip amount and total should appear on screen. 

  ## Actual Behavior

  When a user clicks on the Calculate Tip button, a 404 error appears. 

  ## Assets

  The following image demonstrates the web application's appearance and functionality:

  ![The Tip Calculator app has returned a tip amount of 2.00 and a total of 12.00, for a meal cost of 10 and tip of 20%.](./images/01-screenshot.png)

  ---
  ## 💡 Hints

  What action might be preventing the calculated totals from being rendered correctly on the page? How can we cancel that action?

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * Even when an event is canceled, it continues to propogate. What does that mean? 

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 1.7 Instructor Review: Preventing Default (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with preventing default actions? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ `addEventListener()`

  * ✔️ `event.preventDefault()`

* Open `04-Stu-Preventing-Default/solved/assets/js/script.js` in your IDE and explain the following:

  * Some actions are performed by the browser by default when we click the submit button. This can cause unwanted behavior or errors.

  * 🔑 To fix this, we add a line of code to the action that we want to have performed when we click. In this case, the `addEventListener()` sets up the `addTip` function to be executed when the button is clicked, as shown in the following example:

    ```js
    submitEl.addEventListener("click", addTip);
    ```

  * 🔑 Inside the `addTip` function, we add `event.preventDefault()` to the top of the code block. This will stop the browser from clearing the information in the text fields by default. See the following code for an example:

    ```js
    function addTip(event) {
      event.preventDefault();
      var tipPercentage = tipEl.value * .01;
      var total = totalEl.value;
      var tipAmount = calculateTip(total, tipPercentage);
      var newTotal = calculateTotal(tipAmount, total);
      document.querySelector("#tip-amount").textContent = tipAmount;
      document.querySelector("#new-total").textContent = newTotal.toFixed(2);
    }
    ```

* Open `04-Stu-Preventing-Default/solved/index.html` in your browser and explain the following:

  * When we test the app, we see that we stopped the browser from executing the default behavior using `event.preventDefault()`. The app now executes as expected, and the error is gone!

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How do we stop default browser actions?

  * 🙋 We use `event.preventDefault()` to stop the default behavior. This can be useful for blocking unwanted default behavior in code.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [MDN Web Docs on event.preventDefault()](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault), and stick around for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

## 2. Keyboard Events (35 mins)

### 2.1 Instructor Demo: Keyboard Events (10 min)

* Open `05-Ins-Keyboard-Events/index.html` in your browser and demonstrate the following:

  * A click is just one type of event that we can use to trigger an action.

  * For example, when we change the font type from serif to monospace, the font of the page is changed.

  * When we input a letter in the text box, the letter that is pressed on the keyboard is displayed.

* Open `05-Ins-Keyboard-Events/assets/js/script.js` in your IDE and demonstrate the following:

  * 🔑 We attach a `change` event to the `<select>` element using `addEventListener()`. When the user selects a value from the dropdown, the function will execute. Note that the first parameter is the event, so we use `change`, as shown in the following example:

    ```js
    typefaceEl.addEventListener("change", function(event) {
      event.preventDefault();
      typeface = typefaceEl.value;
      document.querySelector(".container").style.fontFamily = typeface;
    });
    ```

  * 🔑 We also attach a keyboard event to the `<textarea>` element using `addEventListener()`. A `keydown` event is fired when a key is pressed down, as shown in the following example:

    ```js
    textAreaEl.addEventListener("keydown", function(event) {...})
    ```

  * 🔑 Keyboard events have two commonly used properties. The `key` property returns the value of the key pressed. The `code` property returns the key's code. We use `event.key` to access the value of the pressed key, as follows:

    ```js
    var key = event.key.toLowerCase();
    ```

  * 🔑 We use the `textContent` property to set the content of an element to the pressed key's value, as follows:

    ```js
    element.textContent += event.key;
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How do we access the value of a pressed key?

  * 🙋 We use the event object's properties. Two commonly used properties are `key` and `code`.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `06-Stu-Keyboard-Events/README.md`.

### 2.2 Student Do: Keyboard Events (15 min)

* Direct students to the activity instructions found in `06-Stu-Keyboard-Events/README.md`.

* Break your students into pairs that will work together on this activity.

  ```md
  # 📖 Implement Keyboard Events to Display Value and Code of Pressed Key

  Work with a partner to implement the following user story:

  * As a developer, I want to display the value and code of a pressed key.

  ## Acceptance Criteria

  * It's done when, if a key is pressed down, the value of the key and the key's code is displayed. `KEYDOWN Event` should also be displayed to indicate the type of event. 

  * It's done when, if the key is released, `KEYUP Event` is displayed.

  ## 📝 Notes

  Refer to the documentation: 

  [MDN Web Docs on keyup](https://developer.mozilla.org/en-US/docs/Web/API/Document/keyup_event)

  [MDN Web Docs on keydown](https://developer.mozilla.org/en-US/docs/Web/API/Document/keydown_event)

  ## Assets

  The following image demonstrates the web application's appearance and functionality:

  ![The web app includes lines to display "Key Pressed", "Key Code", and "Event status".](./images/01-screenshot.png)

  ---

  ## 💡 Hints

  What properties can we use to access the value of the pressed key and the key's code?

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * What other properties can you access using the `KeyboardEvent` object? 

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 2.3 Instructor Review: Keyboard Events (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with keyboard events? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ `event.key`

  * ✔️ `event.code`

  * ✔️ `keydown`

* Open `06-Stu-Keyboard-Events/solved/assets/js/script.js` in your IDE and explain the following:

  * 🔑 We use the `key` property to access the value of the pressed key and store it in a variable, as shown in the following example:

    ```js
    var keyPress = event.key;
    ```

  * 🔑 We use the `code` property to access the key's code, as shown in the following example:
  
    ```js
    var keyCode = event.code;
    ```

  * We display the pressed key, key code, and status on the page by setting the element's content using `textContent`, as shown in the following example:

      ```js
      document.querySelector("#key").textContent = keyPress;
      document.querySelector("#code").textContent = keyCode;
      document.querySelector("#status").textContent = "KEYDOWN Event";
      ```

  * 🔑 We attach an `addEventListener()` method to the `document` and set the first parameter to `keydown`, which will cause the event to occur when the key is pressed down. (In contrast, `keyup` occurs when the key is released.) See the following code for an example:

    ```js
    document.addEventListener("keydown", keydownAction);
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How are keyboard events useful in code?

  * 🙋 Keyboard events react to user input on the keyboard. This can be used in many ways. In some games, pressing a specific key allows a user to interact with the game. Other times, a developer might ask a user to press a certain key to navigate to another page or indicate a choice.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [MDN Web Docs on KeyboardEvent](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent), and stick around for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

---

## 3. BREAK (10 min)

---

## 4. Event Bubbling (30 mins)

### 4.1 Instructor Demo: Event Bubbling (10 min)

* Open `07-Ins-Event-Bubbling/index.html` in your browser and demonstrate the following:

  * When we click on the outer box, the color changes to purple.

  * When we click on the inner box, the color changes to orange.

  * When we click on the nested button, the button turns blue.

  * 🔑 When we refresh the page and click on the button first, all the colors change.

  * 🔑 All of the colors change because of **event bubbling**.

* Open `07-Ins-Event-Bubbling/index.html` in your IDE and demonstrate the following:

  * 🔑 Event bubbling happens by default in JavaScript&mdash;meaning that when an event like a click occurs, the event will traverse up the DOM tree and create a chain reaction of events.

  * 🔑 In the following HTML, the button is nested inside the orange box, which is nested inside the purple box&mdash;so the event will travel up from the button to the orange box to the purple box:

    ```html
    <div>
      <h2>Event Bubbling </h2>
      <div class="outer-div">CLICK TO TURN ME PURPLE
        <div class="inner-div">CLICK TO TURN ME ORANGE
          <div>
            <button class="button">CLICK TO TURN ME BLUE</button>
          </div>
        </div>
      </div>
    </div>
    ```

* Open `07-Ins-Event-Bubbling/assets/js/script.js` in your browser and demonstrate the following:

  * 🔑 When we click on the button, the `changeBlue` function fires and the button turns blue, as shown in the following example:

    ```js
    function changeBlue(event) {
      event.currentTarget.setAttribute(
        "style",
        "background-color: blue"
      );
    }
    ```

  * 🔑 The click event also travels up the DOM. Because the orange box is also listening for a click, the color changes too. The same thing happens with the purple box. See the following code for an example:

    ```js
    outer.addEventListener("click", changePurple);
    inner.addEventListener("click", changeOrange);
    button.addEventListener("click", changeBlue);
    ```

  * 🔑 To stop this from happening, we use `event.stopPropagation()`. When we add the method at the top of each function that change the color, the event bubbling stops. See the following code for an example:

    ```js
      function changeBlue(event) {
        event.stopPropagation();
        event.currentTarget.setAttribute(
        "style",
        "background-color: blue"
        );
      }

      function changePurple(event) {
        event.stopPropagation();
        event.currentTarget.setAttribute(
        "style",
        "background-color: #601A4A"
        );
      }

      function changeOrange(event) {
        event.stopPropagation();
        event.currentTarget.setAttribute(
        "style",
        "background-color: #EE442F; color: white;"
        );
      }
    ```

* Open `07-Ins-Event-Bubbling/index.html` in your browser and demonstrate the following:

  * 🔑 When we click on one of the boxes or the nested button, only that element changes color.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What do we need to do to stop event bubbling?

  * 🙋 To stop an event from traversing up the DOM tree, we use `event.stopPropagation()`.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `08-Stu-Event-Bubbling/README.md`.

### 4.2 Student Do: Event Bubbling (10 min)

* Direct students to the activity instructions found in `08-Stu-Event-Bubbling/README.md`.

* Break your students into pairs that will work together on this activity.

  ```md
  # 📐 Add Comments to Implementation of stopPropagation() Method

  Work with a partner to add comments describing the functionality of the code found in the [Event Bubbling Starter File](./starter/assets/js/script.js).

  ## 📝 Notes

  Refer to the documentation: 

  [MDN Web Docs on stopPropagation()](https://developer.mozilla.org/en-US/docs/Web/API/Event/stopPropagation)

  [MDN Web Docs on creating and triggering events](https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Creating_and_triggering_events)

  ---

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * What is event delegation? How is it different from event bubbling? 

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 4.3 Instructor Review: Event Bubbling (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with event bubbling? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ `querySelector()`

  * ✔️ `event.stopPropagation()`

* Open `08-Stu-Event-Bubbling/solved/assets/js/script.js` in your IDE and explain the following:

  * 🔑 We select the carousel element and set it as the value of the variable `carousel`, as follows:

    ```js
    var carousel = document.querySelector(".carouselbox");
    ```

  * 🔑 We select the buttons using their parent carousel element, as follows:

    ```js
    var next = carousel.querySelector(".next");
    var prev = carousel.querySelector(".prev");
    ```

  * We use the `addEventListener()` method to open a new window when the image is clicked, as follows:

    ```js
    carousel.addEventListener("click", function() {
      window.location.href = images[index];
    });
    ```

  * 🔑 The nested buttons also have an event listener attached. To prevent the click event from bubbling up to the parent carousel and causing a new window to open, we use `event.stopPropagation()`, as shown in the following example:

    ```js
    next.addEventListener("click", function(event) 
      event.stopPropagation();
      navigate(1);
    });

    prev.addEventListener("click", function(event) {
      event.stopPropagation();
      navigate(-1);
    });
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What is event bubbling?

  * 🙋 By default, events bubble up the DOM tree from the innermost HTML element&mdash;meaning that if we click on a nested button, it is like we clicked on the parent element too. We use `event.stopPropagation()` to prevent  the event from traveling up the DOM tree.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [MDN Web Docs introduction to events](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events) and the [MDN Web Docs on stopPropagation()](https://developer.mozilla.org/en-US/docs/Web/API/Event/stopPropagation), and stick around for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

## 5. Data Attributes (35 mins)

### 5.1 Instructor Demo: Data Attributes (10 min)

* Open `09-Ins-Data-Attributes/index.html` in your browser and demonstrate the following:

  * When we click on an image, it animates.

  * When we click again, the image stops.

* Open `09-Ins-Data-Attributes/index.html` in your IDE and demonstrate the following:

  * 🔑 We can store information in HTML elements by using data attributes.

  * 🔑 We use `data-` to start the name of any element that is a data attribute, as follows:
  
    ```html
    <img 
      src="https://media0.giphy.com/media/4Zo41lhzKt6iZ8xff9/200w_s.gif"
      data-animate="https://media0.giphy.com/media/4Zo41lhzKt6iZ8xff9/200w.gif"
      data-still="https://media0.giphy.com/media/4Zo41lhzKt6iZ8xff9/200w_s.gif"
      data-state="still" 
      alt="Funny dog flapping ears and tilting head side to side"
    />
    ```

* Open `09-Ins-Data-Attributes/assets/js/script.js` in your IDE and demonstrate the following:

  * 🔑 We can access the information in a data attribute and store it in a variable using `getAttribute()`, as shown in the following example:

    ```js
    var state = element.getAttribute("data-state");
    ```

  * 🔑 We can also access the value of the data attribute through the `dataset` object, as shown in the following example:

      ```js
        element.dataset.state = "animate";
      ```

  * 🔑 We can set a data attribute using `setAttribute()`, as follows:

      ```js
      element.setAttribute("data-state", "animate");
      ```

  * We use these tools along with a conditional statement inside of an event listener to stop and start the animation.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How do we store information in an HTML element?

  * 🙋 We use a data attribute, and we start the attribute name with `data-`.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `10-Stu-Data-Attributes/README.md`.

### 5.2 Student Do: Data Attributes (15 min)

* Direct students to the activity instructions found in `10-Stu-Data-Attributes/README.md`.

  ```md
  # 🏗️ Use Data Attributes to Display Hidden Number

  * As a player, I want to click on a card and view the hidden number.

  ## Acceptance Criteria

  * It's done when I click on a card and the hidden number is revealed.

  * It's done when the number is visible if the card is clicked.

  ## Assets

  The following image demonstrates the web application's appearance and functionality:

  ![Six cards appear in a grid, with the numbers 1, 3, and 5 displayed on three of the cards while the remaining three appear blank.](./images/01-screenshot.png)

  ---

  ## 💡 Hints

  How can we use the `dataset` object to access an element's data attributes? 

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge to further your knowledge:

  * We have learned `getAttribute()` and `setAttribute()`. What other methods can you use to access an element's attributes? 

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* Be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 5.3 Instructor Review: Data Attributes (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with data attributes? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ `getAttribute()`

  * ✔️ `dataset`

  * ✔️ `setAttribute()`

* Open `10-Stu-Data-Attributes/solved/assets/js/script.js` in your IDE and explain the following:

  * 🔑 We use `getAttribute()` to store the value of the clicked element's `data-state` attribute in a variable, as shown in the following example:

    ```js
    var state = element.getAttribute("data-state");
    ```

  * 🔑 If the state is `hidden`, we use the `dataset` object to set the text content to the number, as shown in the following example:

    ```js
    element.textContent = element.dataset.number;
    ```

  * 🔑 We also use the `dataset` object to set the value of state to be `visible`, because the number is now visible to the user. See the following code for an example:

    ```js
    element.dataset.state = "visible";
    ```

  * If the state is `visible`, we empty the text content so that the number is removed, as follows:

    ```js
    element.textContent= "";
    ```

  * 🔑 We also set the state's value to `hidden` using the `setAttribute()` method, because the user can't see the number. See the following code for an example:

    ```js
    element.setAttribute("data-state", "hidden")
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What are two ways that we can get values stored in data attributes?

  * 🙋 We can use the `getAttribute()` method or the `dataset` property.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [MDN Web Docs on using data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes), and stick around for office hours to ask for help.

* Answer any questions before ending the class.

## 6. Office Hours (30 minutes)

## 7. END (0 min)

How did today’s lesson go? Your feedback is important. Please take 5 minutes to complete this [anonymous survey](https://forms.gle/RfcVyXiMmZQut6aJ6).

---
© 2022 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
