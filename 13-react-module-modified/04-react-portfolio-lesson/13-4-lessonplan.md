# 13.4 Lesson Plan: React Portfolio Challenge

> **Note**: UK and University of Birmingham instructors: although this session is listed to last 3 hours, your session will only run for **2 hours**. Please follow a modified structure for this session, in an office hours format, not to exceed 2 hours total.

## Overview

Today's lesson will involve project work on the React Portfolio Challenge.

## Instructor Notes

* Be ready to answer any questions students may have.

## Slides

There are no slides for this lesson

---

## 1. React Portfolio Challenge (180 mins)

### 1.1 Instructor Demo: Introduce Challenge (15 min)

Welcome students back to class!

* For this challenge, students will utilize the skills they have learned in `Module 12: React` to develop the initial scaffolding of their portfolio sites.
  
* Open `challenge/solved/src` and run the dev server, and explain the following:

* Now that you've worked with React and have multiple projects to share, it's time to develop the initial scaffolding for your first portfolio site as well as create and/or update other materials so that you can showcase your skills to potential employers. Creating a portfolio using React will help set you apart from other developers whose portfolios do not use some of the latest technologies.

* Part of this assignment will be to deploy the application to GitHub Pages. To do this, be sure to reference the Git Guide or refer to the [Create React App Docs on GitHub Pages](https://create-react-app.dev/docs/deployment/#github-pages).

* Ask the class the following questions (☝️) and call on students for the answers (🙋):

  * ☝️ What are we learning?

  * 🙋 We are learning how to break the application's UI into components, manage component state, and respond to user events.

  * ☝️ How does this project build on or extend previously learned material?

  * 🙋 This project uses a combination of all the core React concepts that we have touched on in this unit, including managing state, rendering JSX, and passing data from parent to child.

  * ☝️ How does this project relate to your career goals?

  * 🙋 Knowing how to build apps using React is key to remaining employer-competitive. This project gives you an opportunity to create a fully featured React app that can show off your projects and your proficiency with React.

### 1.2 Student Do: Challenge (150 mins)

```md
For this challenge, you will utilize what you have learned in `Module 13: React` to develop the initial scaffolding of your portfolio sites.

Now that you've worked with React and have multiple projects to share, it's time to develop the initial scaffolding for your first portfolio site as well as create and/or update other materials so that you can showcase your skills to potential employers. Creating a portfolio using React will help set you apart from other developers whose portfolios do not use some of the latest technologies.

## Instructions

* Students must fullfil the requirements listed in the following sections:

### Design

Remember, "good" design is subjective. Your site should look "polished" and "professional". Here are a few guidelines on what that means:

* Mobile-first design

* Choose a color palette for your site so it doesn't just look like
the default bootstrap theme or an unstyled HTML site.

* Make sure the font size is large enough to read and that the colors don't cause eye strain.

### Base Requirements

* Technologies that must be used:
  * [ ] React
  * [ ] Navigation with `React Router`, dynamic rendering, or another third part router
* Your portfolio **must contain** the following information:
  * [ ] Your name
  * [ ] Links to your:
    * [ ] GitHub Profile
    * [ ] LinkedIn Page
    * [ ] Email Address
    * [ ] Phone Number - (optional)
    * [ ] PDF version of your resume
      * Your resume **must** contain up-to-date projects and professional experience
    * [ ] A list of projects (Challenges or Projects). For each project, make sure you have the following:
      * [ ] Project title
      * [ ] Link to the deployed version
      * [ ] Link to the GitHub repository
      * [ ] GIF or screenshot of the deployed application

### Required Components

* At a minium, your portfolio must render these 6 components:
  1. [ ] App
  2. [ ] Header
  4. [ ] Home
  5. [ ] Project Gallery
  6. [ ] Project
  7. [ ] Contact

### Required Component Content
* [ ] App:
  * [ ] Must be your top level component and render all necessary children components
* [ ] Header:
   * [ ] Must be rendered across the entire site
   * [ ] Must Contain a Navbar
* [ ] Project Gallery:
  * [ ] Must render dynamically 6 instances of the Project component
    * [ ] Be sure to store your project data in a JSON file and import it into your project
* [ ] Project:
   * [ ] Must be a reusable component that ingests JSON data as a props and renders a single instance for each project.
   * [ ] Must utilize router props to properly render the right project based on user selection
   * [ ] Must render the following info:
     * [ ] Project title
     * [ ] Link to the deployed version
     * [ ] Link to the GitHub repository
     * [ ] GIF or screenshot of the deployed application
* [ ] Contact:
  * [ ] Must have contact information
  * [ ] Have a contact form for handling events
* [ ] Home:
  * This should be a welcome landing page that contains:
     * [ ] Your Name
     * [ ] A Headshot of you
     * [ ] Your brand statement
     * [ ] Some indication that this is your portfolio site

### Updated Social Media Presence
#### LinkedIn

* Make sure to update your LinkedIn Profile with the new skills you've acquired since the last time it was updated.
* If you do not have a LinkedIn profile, please create one.
#### GitHub

* Update GitHub profile with pinned repositories featuring those same projects.

## Grading

This challenge is assessed on the following criteria: 

### Technical Acceptance Criteria: 40%

* Satisfies all of the above acceptance criteria 

### Deployment: 32%

* Application deployed at live URL (if applicable).

* Application loads with no errors.

* Application GitHub URL submitted (if applicable).

* GitHub repository that contains application code.

### Application Quality: 15%

* User experience is intuitive and easy to navigate.

* User interface style is clean and polished.

* Application uses a color scheme other than the default Bootstrap color palette.

### Repository Quality: 13%

* Repository has a unique name.

* Repository follows best practices for file structure and naming conventions.

* Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.

* Repository contains multiple descriptive commit messages.

* Repository contains quality README file with description, screenshot, and link to deployed application.
```

### 1.3 Recap (15 mins)

Take these last few minutes of class to make sure that everyone has submitted their challenge, even if it is not complete. Make sure you encourage students that were not able to finish, by reminding them that these challenges are difficult, and meant to push them.

If time allows, take a few questions from the class about areas in the challenge they had a difficult time with. If needed, use the provided solution to guide them through these questions. Remind students to utilize Office Hours if they need a more thorough explanation.

## 2. Instructor Do: Office Hours (30 minutes)

## 3. END (0 min)

How did today’s lesson go? Your feedback is important. Please take 5 minutes to complete this [anonymous survey](https://forms.gle/RfcVyXiMmZQut6aJ6).

---
© 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
