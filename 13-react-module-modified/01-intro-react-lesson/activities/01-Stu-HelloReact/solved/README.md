# HelloReact

## HelloReact.js

* **Question:** What's happening inside of `src/components/HelloReact.js`? How does it relate to the content being rendered to the browser?

  * **Answer:** The `HelloReact` function returns some JSX describing the UI that we eventually want this particular component to be able to render to the document. If we were to change the JSX being returned by this function, and we were running our React app in dev mode (when we run `npm start`), the document would automatically update inside of our web browser without us having to refresh. Create React App uses a webpack dev server that automaticaly updates the view as the content changes.

## App.js

* **Question:** What's going on inside of `src/App.js`?

  * **Answer:** In this file, we define another component named `App`. It's common to have multiple components that fit together inside of a React application. We'll typically compose all of the top-level components inside of our `App` component.

* **Question:** What does the `App` function return?

  * **Answer:** For now, the `App` function or component just returns our `HelloReact` component.

* **Question:** Why do we import the React library? We aren't using the React keyword anywhere. Is it possible to remove this and still have our code work?

  * **Answer:** Whenever we use JSX inside of our JavaScript, we need to import the React library. When Babel translates our `App` component's JSX code to plain old JavaScript, it looks like this:

  * ```js
    var App = function App() {
      return React.createElement(HelloReact, null);
    };
    ```

    ^ See how the `React.createElement` method is used? Because the plain JavaScript code uses this method, we get that 'React' must be in scope when using JSX error when compiling if we don't import React.

## index.js

* **Question:** Do you remember what the purpose of `ReactDOM.render` is? What is it doing?

  * **Answer:** We use `ReactDOM.render` to render a single component or tree of components to the DOM. In our case, `App` is the root of our component tree (it renders all of our other components inside).

* **Question:** Instead of splitting our files up into `App`, `components/HelloReact`, and `index`, is it possible to just write our entire Hello World app in the `index.js` file?

  * **Answer:** Definitely! This code would work:

    ```js
    import React from "react";
    import ReactDOM from "react-dom";

    function HelloReact() {
      return (
        <p>Hello World!</p>;
      );
    }

    ReactDOM.render(<HelloReact />, document.getElementById("root"));
    ```

    * React is fairly unopinionated, so we can accomplish the same thing in a variety of ways. There are more conventions and best practices than there are right and wrong ways to do things.

---

© 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
