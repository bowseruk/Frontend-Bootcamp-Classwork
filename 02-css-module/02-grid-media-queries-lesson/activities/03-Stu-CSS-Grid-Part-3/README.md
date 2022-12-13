# CSS Grid and Breakpoints

CSS Grid can be used to build simple and skeletal layouts. It can also be used to create polished, professional-level layouts.

In this activity, you will use CSS Grid to re-create the design of an online furniture store.

## Instructions

### Part 3: Responsive Breakpoint

Let's make our page responsive!

* Write a `media query` that targets a screen size with the `max-width of 1000px`.

> **Note:** You must write your CSS selectors within the media query. You’re doing it right if the selectors you’re writing are {between the media query brackets}, not outside them. 

* Correct selector placement:

  ```css 
  @media only screen and (max-width: 1000px) {
    // Your new CSS selectors go here
  }
  ``` 

* In your newly written media query, write a CSS selector that targets the `id` of `navigation`.

* In your CSS selector, give it the property `display` with a value of `none`. Write a CSS selector that targets the `class` of `icons`.

* Give the CSS selector the property `margin-left` with a value of `auto`.

* Write a `media query` that targets a screen size with the `max-width of 600px`.

* Write a CSS selector that targets the `id` of `headline`:

  * Give your selector the CSS property of `position` with a value of `static`.

  * Give your selector the CSS property of `margin` with a value of `20px`.

* Write a CSS selector that targets the `id` of `heroGrid`: 

  * Give your CSS selector the CSS property of `grid-template-areas`.

  * Rewrite the template areas so they display as follows:

    * “featuredProduct featuredProduct”
    * “secondaryProduct CTA”

  * This will cause our grid to restructure and display better on mobile devices.

* Write a CSS selector that targets the `id` of `categoryGrid`: 

  * Give your CSS selector the property of `grid-template-rows` with a value of `300px 300px 300px 300px 300px`. 

> **Note:** You need to create more rows in your grid for your content to occupy. In the previous grid’s template areas (Step 3, above), you have two rows. You will be creating five rows in your adjusted grid-template-areas.

* Give your CSS selector the property of `grid-template-columns` with a value of `1fr`.

* Give your CSS selector the CSS property of `grid-template-areas`.

* Rewrite the template areas, so they display as follows:

  * "Bookcases"

  * "Bedroom"

  * "Patio"

  * "Couches"
  
  * "Desks"

* Refresh the page. Check out your work!  

---

© 2022 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.