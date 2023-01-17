
var body = document.body;
var h1El = document.createElement("h1");
var infoEl = document.createElement("div");
var imgEl = document.createElement("img");
var kittenEl = document.createElement("div");
var nameEl = document.createElement("div");
var favoriteEl = document.createElement("div");
// Create ordered list element
var listEl = document.createElement("ol");
// Create ordered list items
var li = [document.createElement("li"), document.createElement("li"), document.createElement("li"), document.createElement("li")] 

h1El.textContent = "Welcome to my page";
kittenEl.textContent = "This is my kitten 🐱.";
nameEl.textContent = "His name is Jax.";
favoriteEl.textContent = "My favorite foods are:";

body.appendChild(h1El);
body.appendChild(infoEl);
infoEl.appendChild(imgEl);
infoEl.appendChild(kittenEl);
infoEl.appendChild(nameEl);
body.appendChild(favoriteEl);
// favoriteEl.appendChild(listEl);
// Append ordered list 
favoriteEl.appendChild(listEl);

h1El.setAttribute("style", "margin:auto; width:50%; text-align:center;");
infoEl.setAttribute("style", "margin:auto; width:50%; text-align:center;");
imgEl.setAttribute("src", "http://placekitten.com/200/300");
nameEl.setAttribute("style", "font-size:25px; text-align:center;");
kittenEl.setAttribute("style", "font-size:25px; text-align:center;");
favoriteEl.setAttribute("style", "font-size:20px;");
// TODO: Add ordered list items containing four favorite foods
// Add text to the list items
favouriteFoods = ["Apples🍎", "Pizza🍕", "Dumplings🥟", "Cupcakes🧁"];
for (let i=0; i < li.length; i++) {
    li[i].textContent = favouriteFoods[i];
}
// Add the list items to the unordered list
li.forEach((element) => {
    listEl.appendChild(element);
})
// stle the unordered list
listEl.style.backgroundColor = "#333333";
listEl.style.padding = "20px";
// style the list items
listItems = document.querySelectorAll("li");
let greyColor = 100;
li.forEach((element)  => {
    element.style.color = "white";
    element.style.padding = "5px";
    element.style.marginLeft = "35px";
    // Give each a unique color
    // element.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}`;
    // More literal interpretation of color
    element.style.backgroundColor = `rgb(${greyColor},${greyColor},${greyColor})`;
    greyColor += 15;
});
