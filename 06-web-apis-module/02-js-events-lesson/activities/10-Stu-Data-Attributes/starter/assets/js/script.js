var container = document.querySelector(".container");

container.addEventListener("click", function(event) {
  var element = event.target;

  // TODO: Complete function
  let state = element.dataset.state;

  if(state === "h"){
    element.dataset.state = "v";
    element.textContent = element.dataset.number;
  }else if(state === "v"){
    element.dataset.state = "h";
    element.textContent = "";
  }
});

let test = document.querySelector("#test");
let number = test.getAttribute("number");
let otherNumber = test.dataset.number;

console.log(test);
