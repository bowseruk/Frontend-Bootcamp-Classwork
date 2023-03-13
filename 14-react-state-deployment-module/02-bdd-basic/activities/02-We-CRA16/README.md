# Install React 16 Within the CRA Project

In this activity, we will create a React project with CRA and downgrade the React version from 17 to 16.

## Instructions

Up until now, we have been generating a starter React app using Create React App.

We are going to continue with this workflow but need to make a few small changes. Recently, React released version 17, which has broken quite a few dependencies within the React ecosystem.

One of the dependencies that has been broken due to the upgrade is Enzyme Adapter, which we need in order to utilize Enzyme.

To get our environment set up properly, we will need to do the following in our **terminal**:
  1. Create a React project titled `click-counter-testing` with `create-react-app`:
     * `npx create-react-app click-counter-testing`
  2. Navigate into our project directory `cd click-counter` and delete the `node-modules` directory.
  3. Install React version 16 and Enzyme dependencies:
       * `npm i --save react@16.14.0 react-dom@16.14.0 enzyme enzyme-adapter-react-16`
  4. Next, reinstall all other dependencies with `npm install`.

---

© 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
