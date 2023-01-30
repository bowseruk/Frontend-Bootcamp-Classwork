# Dynamic Elements

## Instructions

* Using the starter code provided, follow the instructions below to re-create the functionality demonstrated by your instructor.

* Your completed application should trigger GIFs to appear related to the animal making the sound listed in the button.

* Run the `index.html` file in your browser, click a button, and see what the response object looks like in the browser's console.
    
    * Open up the data key, then open up the `0th` element. Study the keys and how the JSON is structured.

* Create a variable named `results` and set it equal to `response.data`

* Inside the for loop, create the following:
     
    * Make a `div` with jQuery and store it in a variable named `animalDiv`.
     
    * Make a paragraph tag with jQuery and store it in a variable named `p`.
     
    * Set the inner text of the paragraph to the rating of the image in `results[i]`.
     
    * Make an image tag with jQuery and store it in a variable named `animalImage`.
     
    * Set the image's src to `results[i]`'s `fixed_height.url`.
     
    * Append the `p` variable to the `animalDiv` variable.
     
    * Append the `animalImage` variable to the `animalDiv` variable.
     
    * Prepend the `animalDiv` variable to the element with an id of `gifs-appear-here`

---

© 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
