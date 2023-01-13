# 6.1 Lesson Plan: Introduction to Web APIs

## Overview

This class introduces the Document Object Model. Students will gain experience using Web APIs to create, get, and append elements. Students will also learn to set attributes and work with timers while reinforcing their existing JavaScript skills.

## Instructor Notes

* This unit introduces DOM traversal and manipulation. This is a difficult topic for learners new to programming. If students feel overwhelmed, encourage them to talk through the challenge&mdash;in plain language&mdash;with their partner before they begin to write their solutions. You could also encourage them to reference a [visual of the DOM tree](https://docs.google.com/presentation/d/1l-ZM_mGL7Ata2UQpVWY-yppyDyB9T7EecbT5q2hxv6I/edit#slide=id.g61fae5cd04_0_31) like the one found in the slide deck.

* Be prepared to switch between your browser, IDE, and console when demonstrating the activities in this lesson. It is important for students to see how manipulating the DOM with Web APIs affects what is displayed in the browser.

## Learning Objectives

By the end of class students will be able to:

* Inspect the `Window` object.

* Traverse the DOM using various Web APIs.

* Query the DOM for elements by their selector.

* Add styles to specific elements using `setAttribute()`.

* Create and append elements to the document.

* Implement timers using `setInterval()` and `clearInterval()`.

## Slide Deck

* [6.1 Slide Deck](https://docs.google.com/presentation/d/1l-ZM_mGL7Ata2UQpVWY-yppyDyB9T7EecbT5q2hxv6I/edit?usp=sharing)

## Time Tracker

| Start  | #   | Activity Name                         | Duration |
| ------ | --- | ------------------------------------- | -------- |
| 5:30PM | 0   | Office Hours                          | 0:30     |
| 6:00PM | 1   | Document Object Model (DOM)           | 0:75     |
| 7:15PM | 2   | Setting Attributes                    | 0:30     |
| 7:45PM | 3   | BREAK                                 | 0:10     |
| 7:55PM | 4   | Create Append                         | 0:35     |
| 8:30PM | 5   | Timer Interval                        | 0:35     |
| 9:05PM | 6   | Office Hours                          | 0:30     |
| 9:35PM | 7   | END                                   | 0:00     |

---

## 1. Document Object Model (DOM) (75 mins)

### 1.1 Instructor Do: Stoke Curiosity (10 min)

* Welcome students to class.

* Open the [6.1 Slide Deck](https://docs.google.com/presentation/d/1l-ZM_mGL7Ata2UQpVWY-yppyDyB9T7EecbT5q2hxv6I/edit?usp=sharing) and follow these prompts on their corresponding slides:

  * **Web APIs**: In this unit, we will learn how to use JavaScript to manipulate HTML with the help of Web APIs.

  * **What is the web browser?**:

    * A **web browser**, or **browser**, is a program used to access information on the World Wide Web.

    * Every webpage, image, and video on the web can be accessed via a specific **Uniform Resource Locator (URL)**.

    * Browsers use the URL to retrieve resources from a web server and display them on a user's device.
  
  * **What is an API?**

    * An **API (Application Programming Interface)** is a set of methods, properties, events, and URLs that developers use to interact with components of a user's web browser.

    * APIs can also interact with data sets, hardware or software on a user’s computer, and third-party software and services.

  * **What is a Web API?**

    * **Web APIs** are built into the web browser and contain methods that allow us to manipulate a webpage using JavaScript.

    * We use Web APIs to create elements and add them to the browser or to add and remove styles and attributes&mdash;all via JavaScript.

  * **What is the DOM?**

    * When we open a webpage, the browser creates a tree of objects that represent the opened page. That tree of objects is the **DOM**, or **Document Object Model**.

    * Using the DOM, we can manipulate the HTML elements on the page via JavaScript.

  * In this unit, we will take the next step in building interactive webpages by learning how to harness the power of the DOM and Web APIs to access, create, and change HTML using JavaScript.
  
  * Let's take a quick look at the mini-project that we will do at the end of this unit.

* Navigate to `01-Ins-Window-Object/project-demo/index.html` in your browser and demonstrate the following:

  * When we open the browser, the user's previous win-loss history is displayed.

  * When we click the start button, blanks appear on the screen. Each blank represents a letter in the word to be guessed.

  * When we click the start button, the timer starts.

  * When the user guesses the word, the timer stops and a win message is displayed.

  * When time runs out and the user has not guessed the word, a lose message appears.

  * The user's wins and losses appear on the screen.

  * While the app might look a bit daunting right now, it builds on web fundamentals that we already know: HTML, CSS, and JavaScript. The complex functionality is handled by Web APIs and can be implemented with just a few lines of code.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What are we learning?

  * 🙋 We are learning how to create and manipulate HTML elements using Web APIs. This new skill will enable us to easily add complex functionality to projects and make apps more interactive.

  * ☝️ How does this project build off or extend previously learned material?

  * 🙋 We will create the project's framework with HTML, style with CSS, and functionality with JavaScript.

  * ☝️ How does this project relate to your career goals?

  * 🙋 Web APIs are key to fully functional, interactive apps for the web. In addition, understanding the DOM is a key tool in any developer's toolbox, because it allows you to access and manipulate the content stored on a webpage.

* Answer any questions before proceeding to the next activity.

### 1.2 Instructor Demo: Window Object (10 min)

* Open `01-Ins-Window-Object/index.html` in your browser and navigate to the console to demonstrate the following:

  * 🔑 The `window` object represents an open window in a browser. When we log `this`, the `window` object is returned.

  * 🔑 When we open the `window` object, we can see the properties and methods that belong to the window.

  * 🔑 The document is a property of the `window` object. We log `document.window` to return the document interface.

  * 🔑 The document is the entry point for the webpage's content. We log `document.body` to access the `<body>` element.

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What is the `window` object?

  * 🙋 An open window in the browser. The `window` object also has a property called `document`, which represents an open webpage.

  * ☝️ How do we access a webpage's content?

  * 🙋 We access a webpage's content through the document.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `02-Stu-Window-Object/README.md`.

### 1.3 Student Do: Window Object (10 min)

* Direct students to the activity instructions found in `02-Stu-Window-Object\README.md`.

* Break your students into pairs that will work together on this activity.

  ```md
  # 📐 Add Comments to Implementation of Window Object

  Work with a partner to add comments describing the functionality of the code found in [Starter Window Object Activity Files](./02-Stu-Window-Object/starter/script.js).

  ## 📝 Notes

  Refer to the documentation: 

  [MDN Web Docs on Window](https://developer.mozilla.org/en-US/docs/Web/API/Window)

  [MDN Web Docs on Document](https://developer.mozilla.org/en-US/docs/Web/API/Document)

  ---

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * How would you log the `length` property of the `window` object?  

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 1.4 Instructor Review: Window Object (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with the `window` object? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ `window`

  * ✔️ `window.document`

  * ✔️ `document.documentElement`

  * ✔️ `document.head`

* Open `02-Stu-Window-Object/solved/script.js` in your IDE and explain the following:

  * 🔑 We log `window` to return the `window` object (the browser window), as shown in the following example:

    ```js
    console.log(window);
    ```

  * 🔑 Because the `document` is a property of the `window` object, we log `window.document` to return a reference to the entire document&mdash;like in the following example:

    ```js
    console.log(window.document);
    ```

  * 🔑 Because `document` serves as the entry point to a webpage's content, we use `document.documentElement` to log the document's root element or the `<HTML>`&mdash;as shown in the following example:

    ```js
    console.log(document.documentElement);
    ```

  * 🔑 We use `document.head` to log the document's `<head>` element, as follows:

    ```js
    console.log(document.head);
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How can we use the window's `document` property to access a webpage's content?

  * 🙋 We start by accessing the document and then work down the DOM tree to access an HTML element on a webpage.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [MDN Web Docs on Window](https://developer.mozilla.org/en-US/docs/Web/API/Window) and the [MDN Web Docs on Document](https://developer.mozilla.org/en-US/docs/Web/API/Document), and stick around for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

### 1.5 Instructor Demo: Traverse DOM (10 min)

* Open `03-Ins-Traverse-DOM/script.js` in your browser and navigate to the console to demonstrate the following:

  * 🔑 Working your way down the DOM tree is called **DOM traversal**. First, we log `document.body` to access the `<body>` contained in the document.

  * 🔑 We can view all the elements nested inside the `<body>` by logging `document.body.children`.

  * 🔑 To access the first element in the body, we log `document.body.children[0]`.

  * 🔑 We use the terms **parent** and **child** to explain how elements in the DOM are related. A parent element is an element that holds one or more children. But child elements can also have children! To access an element nested in a child element, we log `document.body.children[1].children[0]`.

* Open `03-Ins-Traverse-DOM/index.html` in your IDE to demonstrate the following:

  * 🔑 DOM traversal allows us to access the DOM using parent-child relationships, as shown in the following example:

    ```js
    console.log(document.body.children[1].children[0]);
    ```
  
  * 🔑 We can also access an element directly by targeting the id of the element using the method `getElementbyId()`, like in the following example:

    ```js
    var firstChildUl = document.getElementById("first-child-ul")
    console.log(firstChildUl);
    ```

  * 🔑 We can set and change a selected element's style by accessing an element's `style` object and its properties and assigning a value, like in the following example:

    ```js
    firstChildUl.style.color = "green";
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How can you use parent-child relationships to access a child element?

  * 🙋 First you access the parent and then pass through to reach the child element that you want to select. Working your way down the DOM tree is called DOM traversal.

  * ☝️ How can we use an element's id to access that element?

  * 🙋 We can access elements directly by their id using the method `getElementbyId()`.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `04-Stu-Traverse-DOM/starter/README.md`.

### 1.6 Student Do: Traverse DOM (15 min)

* Direct students to the activity instructions found in `04-Stu-Traverse-DOM/starter/README.md`.

  ```md
  # 🐛 Style Changes on HTML Elements Not Rendering on Page

  Work with a partner to resolve the following issues:

  * Users should be able to see style changes implemented with JavaScript when the browser page loads.

  * Fix the code so that the actual behavior reflects the expected behavior

  ## Expected Behavior

  * The article title has a font size of 50px.

  * The text in the headline "Welcome to World News" is white. 

  ## Actual Behavior

  * The article title is smaller than 50px.

  * The text in the headline "Welcome to World News" is blue. 

  ## Assets 

  The following image demonstrates the web application's appearance and functionality:

  ![On the World News webpage, "Welcome to World News" appears in white text, and the article title is larger than the webpage title.](./images/01-screenshot.png)

  ---

  ## 💡 Hints

  How would you use parent-child relationships to access the elements you want to style? 

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * Using `getElementbyId()` is just one way to return an element. What are some other document methods that allow us to quickly access elements?  

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 1.7 Instructor Review: Traverse DOM (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with DOM traversal? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ `getElementById()`

  * ✔️ `children[0]`

  * ✔️ `style.property`

* Open `04-Stu-Traverse-DOM/solved/script.js` in your IDE and explain the following:

  * 🔑 We use the method `getElementById()` to select the elements with an id of `header` and `articles`, and we store them in variables. See the following code for an example:

    ```js
    var articlesDiv = document.getElementById("articles");
    var headerDiv = document.getElementById("header");
    ```

  * 🔑 To access elements nested inside the `div` or `header` elements, we use `children[]`, which will return a list of all the child elements. To select the first child element of the article `<div>`, we use `children[0]`. This selects the article title and sets the font size. See the following code for an example:

    ```js
    articlesDiv.children[0].style.fontSize = "50px";
    ```

  * 🔑 The headline "Welcome to World News" is the first child of the `<header>` element. We access the element's `style` object to set the `color` of font to `white`, as follows:

    ```js
    headerDiv.children[0].style.color = "white";
    ```
  
* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How can we set an inline style for an element using the DOM?

  * 🙋 We access the element's `style` object and change or set a style property using the `=` assignment operator.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [MDN Web Docs on the style property](https://developer.mozilla.org/en-US/docs/Web/API/ElementCSSInlineStyle/style), and stick around for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

## 2. Setting Attributes

### 2.1 Instructor Demo: Setting Attributes (10 min)

* Open `05-Ins-Setting-Attributes/index.html` in your browser and demonstrate the following:

  * All of the elements on this page have been styled in JavaScript using Web API methods.

  * 🔑 We select multiple elements to style using the document method `querySelectorAll()`.

  * 🔑 We style those elements using the element method `setAttribute()`.

  * We can also use `setAttribute()` to set an image's source directly.

* Open `05-Ins-Setting-Attributes/assets/js/script.js` in your IDE and demonstrate the following:

  * 🔑 We select all the `<p>` and `<div>` elements using the `querySelectorAll()` method and store the lists in variables, as follows:

    ```js
    var divTags = document.querySelectorAll("div");
    var pTags = document.querySelectorAll("p");
    ```
  
  * 🔑 We access the first element of a selector using `querySelector()`. This method returns a single element. See the following code for an example:

    ```js
    var changeP = document.querySelector("#change2");
    ```

  * 🔑 We use `setAttribute()` to set an image's source. The method takes two parameters. The first parameter names the attribute we want to change, and the second is the value we want to assign to the attribute, as shown in the following example:

    ```js
    imgEl[0].setAttribute("src", "images/image_1.png");
    ```

  * 🔑 We can also use `setAttribute()` to set the style of the image, as follows:

    ```js
    imgEl[0].setAttribute("style", "width:500px; height:200px;");
    ```

  * 🔑 We iterate over a list of elements to apply the styling changes to all the elements in the list, as shown in the following example:

    ```js
    for (var i = 0; i < divTags.length; i++) {
      divTags[i].setAttribute("style", "color:blue; font-size: 30px");
    }
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What is the difference between the document methods `querySelector()` and `querySelectorAll()`?

  * 🙋 The method `querySelectorAll()` returns a list of all of the elements that match the selector. The method `querySelector()` returns only the first match of the selector, even if there are multiple matches.

  * ☝️ What two parameters does the method `setAttribute()` take?

  * 🙋 The method `setAttribute()` takes two parameters: first, the name of the attribute that we want to set or change (like `src` or `style`), and second, the value you want to set.

* Answer any questions before proceeding to the next activity.

### 2.2 Student Do: Setting Attributes (10 min)

* Direct students to the activity instructions found in `06-Stu-Setting-Attributes/README.md`.

  ```md
  # 🏗️ Use JavaScript to Set Attributes of HTML Element

  Implement the following user story:

  * As a web developer, I want all of my titles on a webpage to have the same styling. 

  ## Acceptance Criteria

  * It's done when all the `<h4>` elements are selected and stored in a single variable.

  * It's done when the text of each `<h4>` is set to `blue`, the font size is `30px`, and the text is `bold`.

  * It's done when the padding to the left of the title is set to `10px` and the margin is set to `0`.

  ---

  ## 💡 Hints

  How can you use a loop to iterate over a list of elements? 

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge to further your knowledge:

  * How would using the `:scope` pseudo-class be useful when working with`querySelectorAll()`?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* Be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 2.3 Instructor Review: Setting Attributes (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with setting attributes? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ `querySelectorAll()`

  * ✔️ `setAttribute()`

* Open `06-Stu-Setting-Attributes/solved/assets/js/script.js` in your IDE and explain the following:

  * 🔑 We use `querySelectorAll()` to select all the `<h4>` elements in the document. We store the list in a variable, as shown in the following example:

    ```js
    var siteTitles = document.querySelectorAll("h4");
    ```

  * 🔑  We use `setAttribute()` to set the styles for the elements. We can set multiple styles at the same time, as shown in the following example:

    ```js
    siteTitles[i].setAttribute("style", "color: blue; font-weight: bolder; font-size: 30px; padding-left:10px; margin: 0");
    ```

  * 🔑 We use a loop to iterate over all the `<h4>` elements in the list and apply the styles, as shown in the following example:

    ```js
    for (var i = 0; i < siteTitles.length; i++) {
      siteTitles[i].setAttribute("style", "color: blue; font-weight: bolder; font-size: 30px; padding-left:10px; margin: 0");
    }
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ Where have we seen loops before?

  * 🙋 Loops are widely used in JavaScript when we want to perform the same task over and over again. Loops help us write DRY code!

  * ☝️ How can we set an element's attribute?
  
  * 🙋 We use `setAttribute()` methods to set or change attributes, like `style` and `src`, all using JavaScript.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [MDN Web Docs on querySelectorAll()](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll) and the [MDN Web Docs on setAttribute()](https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute), and stick around for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

---

## 3. BREAK (15 min)

---

## 4. Create Append

### 4.1 Instructor Demo: Create Append (10 min)

* Open `07-Ins-Create-Append/index.html` in your browser and demonstrate the following:

  * When we open the browser window, a prompt appears, asking the user to enter an HTML element. We can enter one or more elements, following the prompts.

  * If valid elements are selected, a message indicates that a new element was created based on the user input.

  * 🔑 The element and the message it contains were all created dynamically using JavaScript.

* Open `07-Ins-Create-Append/script.js` in your IDE and demonstrate the following:

  * 🔑 We use the method `createElement()` to create new elements, as follows:

    ```js
    var tag = document.createElement(tagName);
    ```

  * We use the `textContent` property to add content to the element, as follows:

    ```js
    tag.textContent = "This was made via prompts. It's a " + tagName + ".";
    ```

  * When we create an element, it will not appear unless it is appended to another element in the HTML. We use `appendChild()` to attach the new element as a child of the `<body>`, as shown in the following example:

    ```js
    document.body.appendChild(tag);
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ After an element is created, what additional step must we take to get the element to appear in the HTML?

  * 🙋 After we create an element, we must append or attach it to an existing HTML element so that the element shows up in the HTML.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `08-Stu-Create-Append/README.md`.

### 4.2 Student Do: Create Append (15 min)

* Direct students to the activity instructions found in `08-Stu-Create-Append/README.md`.

* Break your students into pairs that will work together on this activity.

  ```md
  # 🏗️ Create an Ordered List Using JavaScript

  Work with a partner to implement the following user story:

  * As a blogger, I want to use JavaScript to create an ordered list of my favorite foods on my webpage.

  ## Acceptance Criteria

  * It's done when an ordered list containing four favorite foods is visible in the HTML below the text "My favorite foods are:"

  * It's done when the ordered list has a background color of `#333333` and padding of `20px`.

  * It's done when each list item has a font color of `white`, padding of `5px`, and `margin-left` of `35px`.

  * It's done when each list item has a different background color.

  ## Assets

  The following image demonstrates the web application's appearance and functionality:

  ![The text "Welcome to my page," appears above a centered kitten photo, above the text "My favorite foods are:" and a list of four foods.](./images/01-screenshot.png)

  ---

  ## 💡 Hints

  After creating an element in JavaScript, what additional step must you take to attach the element to the HTML document?

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge with your partner to further your knowledge:

  * What is the difference between `append()` and `appendChild()`? 

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* While breaking everyone into groups, be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 4.3 Instructor Review: Create Append (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with creating and appending elements? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ `createElement()`

  * ✔️ `textContent`

  * ✔️ `appendChild()`

* Open `08-Stu-Create-Append/solved/script.js` in your IDE and explain the following:

  * 🔑 We create the ordered list element using `createElement()`, as follows:

    ```js
    var listEl = document.createElement("ol");
    ```

  * The ordered list has four child list elements. We use `createElement()` to create each list item and store the elements in a variable, as shown in the following example:

    ```js
    var li1 = document.createElement("li");
    var li2 = document.createElement("li");
    var li3 = document.createElement("li");
    var li4 = document.createElement("li");
    ```

  * 🔑 We add text to the list elements using the `textContent` property, like in the following example:

    ```js
    li1.textContent = "Apples 🍎 ";
    li2.textContent = "Pizza 🍕 ";
    li3.textContent = "Dumplings 🥟 ";
    li4.textContent = "Cupcakes 🧁 ";
    ```

  * 🔑 We append the ordered list element as a child of the `<div>` that contains the text "My favorite foods are:" using `appendChild()`, as follows:

    ```js
    favoriteEl.appendChild(listEl);
    ```

  * 🔑 We then append the list items as a child of the ordered list element. This attaches the elements to the HTML document, as shown in the following example:

    ```js
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);
    ```

  * We add styling to the ordered list element and child list items using `setAttribute()`, like in the following example:

    ```js
    listEl.setAttribute("style", "background:#333333; padding:20px;");
    li1.setAttribute("style", " color:white; background: #666666; padding: 5px; margin-left: 35px;");
    li2.setAttribute("style", " color:white; background: #777777; padding: 5px; margin-left: 35px;");
    li3.setAttribute("style", " color:white; background: #888888; padding: 5px; margin-left: 35px;");
    li4.setAttribute("style", " color:white; background: #999999; padding: 5px; margin-left: 35px;");
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ Why do we append the list items to the ordered list element `<ol>` and not just the `<body>`?

  * 🙋 It is important to think about the parent-child relationships when appending elements to the DOM. An ordered list is made up of the ordered list element and its child list items. We maintain that relationship by attaching the list items as children of the ordered list. If we attached the list items to the `<body>`, the list items' parent would be the `<body>`, which is not what we want!

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [MDN Web Docs on createElement()](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement) and the [MDN Web Docs on appendChild()](https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild), and stick around for office hours to ask for help.

* Answer any questions before proceeding to the next activity.

## 5. Timers and Intervals

### 5.1 Instructor Demo: Timers and Intervals (10 min)

* Open `09-Ins-Timers-Intervals/index.html` in your browser and demonstrate the following:

  * 🔑 We can use JavaScript to create a countdown timer.

  * 🔑 The timer will evaluate an expression at a set interval until it is cleared&mdash;in this case, once every second.
  
  * 🔑 We can use JavaScript to create and append an image that appears only after the timer is cleared.

* Open `09-Ins-Timers-Intervals/script.js` in your IDE and demonstrate the following:

  * 🔑 We store the interval in a variable. This is an important step, so that we can get the interval to stop. See the following code for an example:

    ```js
    var timerInterval = setInterval(function() {...}, 1000)
    ```

  * 🔑 The `setInterval()` method takes a function as its first argument, as shown in the following example:

    ```js
    setInterval(function() {
      secondsLeft--;
      timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";

      if(secondsLeft === 0) {
        clearInterval(timerInterval);
        sendMessage();
      }

    }, 1000);
    ```

  * 🔑 The second argument that the `setInterval()` method takes is the interval. Because intervals use milliseconds, we use `1000` to create an interval of one second, as follows:

    ```js
    }, 1000);
    ```

  * 🔑 The function is the action that we want to be evaluated at each interval. This function prints a message at each interval, as follows:

    ```js
    function() {
      secondsLeft--;
      timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";

      if(secondsLeft === 0) {
        clearInterval(timerInterval);
        sendMessage();
      }
    ```

  * 🔑 When the countdown reaches zero, we want the action to stop. The `clearInterval()` method stops the execution of the interval. It takes one parameter: the variable name assigned to the interval. See the following code for an example:

    ```js
    clearInterval(timerInterval);
    ```

  * 🔑 We call `sendMessage()` after the interval is cleared, so the image will pop up after the countdown is complete. The `sendMessage` function creates and appends the image to the document, as shown in the following example:

    ```js
    function sendMessage() {
      timeEl.textContent = " ";

      var imgEl = document.createElement("img");

      imgEl.setAttribute("src", "images/image_1.jpg");
      mainEl.appendChild(imgEl);

    }
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What would happen if we used `setInterval()` without `clearInterval()` in the code? Would it still execute?

  * 🙋 The method `setInterval()` sets up the interval for the code to execute. The method `clearInterval()` stops the action from performing. So without `clearInterval()`, the action would just keep executing at the given interval and would not stop unless we closed the browser window.

* Answer any questions before proceeding to the next activity.

* In preparation for the activity, ask TAs to start directing students to the activity instructions found in `10-Stu-Timers-Intervals/README.md`.

### 5.2 Student Do: Timers and Intervals (15 min)

* Direct students to the activity instructions found in `10-Stu-Timers-Intervals/README.md`.

  ```md
  # 📖 Create a Speed-Reader

  Implement the following user story:

  * As a developer, I want to create a speed-reading application that prints a single word of a message at a time.

  ## Acceptance Criteria

  * It's done when the number of seconds left on the countdown is printed on the screen.

  * It's done when, after the countdown of 5 seconds ends, the words of the message appear on the screen, one word at a time.

  ## 📝 Notes

  Refer to the documentation: 

  [MDN Web Docs on setInterval()](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval)

  [MDN Web Docs on clearInterval()](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/clearInterval)

  ## Assets

  The following animation demonstrates the web application's appearance and functionality:

  ![A countdown of 5 seconds begins and then single words appear on the screen.](./images/demo1.gif)

  ## 💡 Hints

  How is `displayMessage()` utilizing the `setInterval()` and `clearInterval()` methods to display the words at an interval of 1000 milliseconds?

  ## 🏆 Bonus

  If you have completed this activity, work through the following challenge to further your knowledge:

  * What `window` method is used to delay an action for a set number of milliseconds? Why might this method be useful?

  Use [Google](https://www.google.com) or another search engine to research this.
  ```

* Be sure to remind students and the rest of the instructional staff that questions on Slack or otherwise are welcome and will be handled. It's a good way for your team to prioritize students who need extra help.

### 5.3 Instructor Review: Timers and Intervals (10 min)

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ How comfortable do you feel with timers and intervals? (Poll via Fist to Five, Slack, or Zoom)

* Assure students that we will cover the solution to help solidify their understanding. If questions remain, remind them to use office hours to get extra help!

* Use the prompts and talking points (🔑) below to review the following key points:

  * ✔️ `setInterval()`

  * ✔️ `clearInterval()`

* Open `10-Stu-Timers-Intervals/solved/assets/js/script.js` in your IDE and explain the following:

  * We first use `getElementById()` to select the HTML elements with "countdown" and "main" IDs.

    ```js
    var timerEl = document.getElementById('countdown');
    var mainEl = document.getElementById('main');
    ```

  * We then declare a `message` variable with a string of text. We then use the `.split()` method to _split_ the string into individual elements in an array, `words`.

    ```js
    var message =
      'Some say the world will end in 🔥, Some say in ice. From what I’ve tasted of desire, I hold with those who favor fire. But if it had to perish twice, I think I know enough of hate. To say that for destruction ice, Is also great, And would suffice.';
    var words = message.split(' ');
    ```

  * We declare a `countdown()` function. Within our `countdown()` function, we declare a `timeLeft` variable and set it to 5.

    ```js
    function countdown() {
      var timeLeft = 5;
    ```

  * 🔑 We then declare `timeInterval` and assign it the value of `setInterval()`. Here, we will update the text in `timerEl` at an interval of 1000 ms, or 1 second. With each interval, we _decrement_ the value of `timeLeft`. If `timeLeft` is equal to 0, we use `clearInterval()` to stop `timeInterval()`.

  ```js
  var timeInterval = setInterval(function() {
    if (timeLeft > 1) {
      timerEl.textContent = timeLeft + ' seconds remaining';
      timeLeft--;
    } else if (timeLeft === 1) {
      timerEl.textContent = timeLeft + ' second remaining';
      timeLeft--;
    } else {
      timerEl.textContent = '';
      clearInterval(timeInterval);
      displayMessage();
    }
  }, 1000);
  ```

  * To briefly explain the `displayMessage()` function, we declare a variable called `wordCount` and set it to `0`

    ```js
    function displayMessage() {
      var wordCount = 0;
    ```

  * We then declare a `msgInterval` variable and, as above, assign it the value of `setInterval()`. Within our callback, we check if our `words` array contains anything. If not, we clear the interval.

    ```js
    var msgInterval = setInterval(function () {
      if (words[wordCount] === undefined) {
        clearInterval(msgInterval);
      } 
    ```
  
  * Otherwise, we update the `textContent` of `mainEl` with the string at `words[wordCount]`. With each interval, we increment `wordCount`. Each interval is set to the length of 1000 milliseconds.

    ```js
        else {
          mainEl.textContent = words[wordCount];
          wordCount++;
        }
      }, 1000);
    }
    ```

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What two arguments does `setInterval()` take?  

  * 🙋 The first argument that `setInterval()` takes is the action that will be performed at the given interval. The second argument that `setInterval()` takes is the number of milliseconds of each interval. Both are required for the method to work.

  * ☝️ What can we do if we don't completely understand this?

  * 🙋 We can refer to supplemental material, read the [MDN Web Docs on setInterval()](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval), and stick around for office hours to ask for help.

* Answer any questions before ending the class.

## 6. Office Hours (30 minutes)

## 7. END (0 min)

How did today’s lesson go? Your feedback is important. Please take 5 minutes to complete this [anonymous survey](https://forms.gle/RfcVyXiMmZQut6aJ6).

---
© 2022 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
