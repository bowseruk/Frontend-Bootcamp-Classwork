# CSS Flexbox 

During this activity, you will test your CSS Flexbox skills by building a webpage for your client, Jake’s Eatery. You will also develop something else during this time: your workflow as a front-end developer.

  ![Jake's Eatery Solution](images/jake's-eatery-solution.png)

## Instructions

* Open the files `index.html` and `style.css`.

* Right-click on the tab for `style.css` and select `Split Right`. This will open the file in a new tab to the right of `index.html`.

  ![split screen example](images/split-screen-example.png)

* Add a `CSS selector` that targets the `logo class` with the following properties:

  ![logo class properties](images/logo-class-properties.png)


* The HTML for the navigation area contains some hints for how to implement its layout.

* Which `div` is the parent flex container? Which `div` is a child of the parent?

  ![divs](images/divs.png)

* Add a selector that targets the nav class. This element will be the flex container for the navigation component of your layout.

  * Add the `property display` with a `value of flex` to make this your container.

  * Also add the properties `background-color: black;` and `padding: 20px;`.

* Write a selector that targets three different classes all at once: `left`, `center`, and `right`.

  * ![3 classes 1 selector](images/3-classes-1-selector.png)

  * This will apply the same CSS to all selected IDs, classes, and elements and helps cut down the amount of duplicate CSS you have to write.
  
  * Add the properties `height: 50px`; and `display: flex;` to this selector.
  
  * Add the properties `justify-content: center;` and `align-items: center;` to center the elements both vertically and horizontally.

* Next, create a selector that targets the left and right classes.

  * Add the property `width: 25%`; so that each element will occupy 25% of the container’s width.

* Add a selector that targets the `center` class and set its `width` to `50%`.

* Write a selector that targets the `a` tags nested inside the center class.

  * You can target elements inside of IDs, classes, and elements class like so:

  ![internal-element-targeting](images/internal-element-targeting.png)

  *  Add the following properties to this selector:
  
  ![anchor tag properties](images/anchor-tag-properties.png)
 
* Next, create a selector to target the `button` element with the following properties:

  ![button-properties](images/button-properties.png)

* Lastly, create two selectors: one to target the `button` inside the `right` class and one to target the `button` inside the `left` class.

* Add the `property background-color: yellow`; to the `right` button.

* Add the `property background-color: skyblue`; to the `left` button.

* The HTML for the content area contains some hints for how to implement its layout. Can you tell which element is the parent `flex` container and which ones are the children?

  ![flex parent hints](images/flex-parent-hints.png)

* Add a selector that targets the parent `flex` container–the `column` class. Add the following properties to create a column-based layout:

  ![flex container properties](images/flex-container-properties.png)

* Next, add a selector that targets the `meal1`, `meal2`, and `meal3` classes.

* Add the following properties to create the children of the flex container:

  ![flex children properties](images/flex-children-properties.png)
 
* Create a selector that targets the `meal1` class and add the `margin-top: 20px;` and `background-image: url("../images/steak.png");` properties.

* Target the `meal2` class with a new selector. Add the `background-image: url("../images/soup.png");` property.

* Target the `meal3` class with a new selector. Add the `background-image: url("../images/cheesecake.png");` property.

* Create a selector to target the text class and add the following properties:

  ![text class properties](images/text-class-properties.png)

* Add a selector that targets the `p` element in the text class. Add the following:

  ![p tag properties](images/p-tag-properties.png)

* Add a selector that targets the `h1` element in the text class. Add the `font-family: Georgia, 'Times New Roman', Times, serif;` property.

* Add the appropriate styling to make the footer area look like the image below:

  ![footer design](images/footer-design.png)

---

© 2022 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
