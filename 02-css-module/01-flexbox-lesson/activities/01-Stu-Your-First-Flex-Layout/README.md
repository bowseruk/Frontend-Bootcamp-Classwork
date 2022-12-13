# Your First Flex Layout

In this activity, you’ll practice creating layouts with CSS Flexbox. You’ll make two CSS Flexbox containers using the `flex-direction` property.

## Instructions

### Part 1

In this step, you’ll build the HTML for our two separate flex layouts.

* Open the file `index.html`. 

* Create a `div` with the class `flex_item` inside the `div` with an `id` of `column`.

* Add lorem ipsum text within this newly created `div`.

* Use this text: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

* Your `div` should look like this:

```html
<!-- This div has the id of column and the class of flex. -->
<div id="column" class="flex">
  <div class="flex_item">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit...
  </div>
</div> 
```

* Create another `div` with the class flex_item inside the `div` with an id of row.

*Add more lorem ipsum text within this newly created `div`.

* Copy the `flex_item` `div` you just created and paste it twice within its parent `div`.

* You should now have a total of three `div`s within each parent `div`. Your column `div` should look like this:

```html
<!-- This div has the id of column and the class of flex. -->
<div id="column" class="flex">
  <div class="flex_item">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit...
  </div>
  <div class="flex_item">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit...
  </div>
  <div class="flex_item">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit...
  </div>
</div>
```

* Your row `div` should look like this:

```html
<div id="row" class="flex">
  <div class="flex_item">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit...
  </div>
  <div class="flex_item">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit...
  </div>
  <div class="flex_item">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit...
  </div>
</div>
```

### Part 2

In this step, you’ll turn items into flex containers and set their flex direction. 

* Open the `index.html` file in a browser.

  * **Note:** The layout isn’t quite right yet and doesn’t respond fully yet.

* Open the `index.css` file located in `01_Your_First_Flex_Layout/css`.

  * This file includes some styling, but it’s missing the properties necessary to make items stretch within a parent container. You’ll add these throughout the rest of the activity.

* Add the `display: flex;` property to the `.flex` selector.

  *This property will define any HTML element with the flex class to become a flexible parent container.

* Add the `flex-direction: column;` property to the `#column` selector.

  *The `flex-direction` property will define the direction of an item stacked within its parent container (which must be set to display: flex;).

* Add the `flex-direction: row;` property to the `#row` selector.

* Save the changes to `index.css`, then refresh `index.html` in your browser.

* Your result should resemble the following image, but it’s OK if it doesn’t:

  ![Your first flex layout solution](images/flex-layout-solution.png)

---

© 2022 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
