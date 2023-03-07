# Friends List Refactor

In this activity, we will use our new React skills to further refactor the friends list application from earlier.

## Instructions

* Replace your React App's `src` folder with [starter/src](starter/src). Stop the dev server if it is already running. Start the app in dev mode by running `npm start`.

* Open [localhost:3000](http://localhost:3000) in your browser and take a moment to study the rendered app.

* Refactor the `App` component so that it's a class component. 

  * Set the component's initial state to the `friends` JSON array. 
  
  * Inside of the `render` method, map over `this.state.friends` to render each `FriendCard` component passing in the appropriate props.

* Add functionality to the application so that when the red X icon on a `FriendCard` is clicked, that `FriendCard` is removed from the page. 
  
  * To accomplish this, you should define a method inside of `App` that accepts an `id` parameter, and then utilize a filter to create a new array of friends without the passed `id`. 
  
  * Then set `this.state.friends` to this new filtered array. 
  
  * You'll want to pass this method into each `FriendCard` component and attach an `onClick` listener to the "remove" span.

## Hints

* Test your application after each step!

* Refer back to the previous in-class activities if you get stuck anywhere.

* If you get stuck working with the event handler, spend a few minutes reading [React's documentation](https://facebook.github.io/react/docs/handling-events.html) on handling events. 

---

© 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
