var count = 0;
var incrementEl = document.querySelector("#increment");
var decrementEl = document.querySelector("#decrement");
var countEl = document.querySelector("#count");

function setCounterText() {
  countEl.textContent = count;
}

function changeCounter(int) {
  // Change the count by the int passed in
  count += int;
  setCounterText();
}

// TODO: Add event listener to increment button
incrementEl.addEventListener("click", function() {
  changeCounter(1);
});

// TODO: Add event listener to decrement button 
decrementEl.addEventListener("click", function() {
  changeCounter(-1);
});