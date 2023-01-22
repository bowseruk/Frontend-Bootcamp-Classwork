boxes = document.querySelectorAll(".box");
boxes.forEach((e) => {
  e.dataset.number = Math.floor(Math.random() * 99)
});

// The container used for the event listener.
var container = document.querySelector(".container");
// Adds the function to the container
container.addEventListener("click", function(event) {
  // Finds the element that was clicked on
  var element = event.target;
  //  Run this if the target is hidden
  if (element.dataset.state === "hidden") {
    // Change the datastate to visible
    element.dataset.state = "visible";
    // Make the number visible
    element.innerText = element.dataset.number;
  } else if (element.dataset.state === "visible") {
    // Make the data state hidden
    element.dataset.state = "hidden";
    element.dataset.number = Math.floor(Math.random() * 99)
    // Make the number hidden
    element.innerText = null;
  }
}
);
