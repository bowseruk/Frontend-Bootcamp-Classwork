# AJAX

In this activity, we will create a simple React application with which users can query the OMDb API and display information about the movie that is searched for.

## Instructions

* Replace your React application's `src` folder with [starter/src](starter/src). 

* This activity uses Bootstrap, so make sure you `import 'bootstrap/dist/css/bootstrap.min.css';` in `index.js`.

* Be sure to install the axios library by running `npm install axios` in your terminal.

* Stop the dev server if it is already running. Start the app in dev mode by running `npm start`.

* Open your browser to [localhost:3000](http://localhost:3000) and study the rendered application.

* This application is supposed to allow users to search for the name of a movie via the form on the right of the page and display information from the OMDb API on the left side. Currently the application isn't fully functional.

* Open the `src/OmdbContainer.js` and add the following code:

  * Add a `componentDidMount` method that should utilize the `API.js` module to query the OMDb API for the movie _The Matrix_ when the component mounts. Then update this component's `result` state with the result of the AJAX request. You can verify that you completed this step correctly by refreshing the page in your web browser. If successful, the application should display information about _The Matrix_ when the page first loads.

  * Add a `handleInputChange` method that should be called whenever the user types into the input field. Inside of this method, set `this.state.search` equal to the new value of the input field. You can verify that you've completed this step correctly if you can now type into the input field.

  * Add a `handleFormSubmit` method that should be called when the form is submitted. Inside of this method, utilize the `API` module to search the OMDb API for the value of `this.state.search`. Then update this component's `result` state with the result. You can verify that you completed this step correctly by searching for the name of a movie. If successful, you should see the movie poster and some information about the movie appear in the left card.

### BONUS

* After you get the rest of the application code working, add code so that if no movie results are found, a message is displayed indicating this in place of the `MovieDetail` component. Otherwise, display the `MovieDetail` component. You can verify that you completed this step correctly by searching for an empty string. If successful, you should see your message being displayed instead of any movie information.

### Hints

* Don't forget to call `event.preventDefault()` inside of any event handlers called in response to an HTML form being submitted.

* The only code you need to modify is inside of `OmdbContainer.js`.

* If you make it to the bonus, check out [React's documentation on Conditional Rendering](https://facebook.github.io/react/docs/conditional-rendering.html). Use any of the techniques described to complete the bonus.

---

© 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
