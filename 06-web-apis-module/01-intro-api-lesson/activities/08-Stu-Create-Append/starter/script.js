
//The Document.body property represents the <body> tag
// var body = document.body;

// var h1El = document.createElement("h1");
// var infoEl = document.createElement("div");
// var imgEl = document.createElement("img");
// var kittenEl = document.createElement("div");
// var nameEl = document.createElement("div");
// var favoriteEl = document.createElement("div");
// // Create ordered list element

// h1El.textContent = "Welcome to my page";
// kittenEl.textContent = "This is my kitten 🐱.";
// nameEl.textContent = "His name is Jax.";
// favoriteEl.textContent = "My favorite foods are:";

// body.appendChild(h1El);
// body.appendChild(infoEl);
// infoEl.appendChild(imgEl);
// infoEl.appendChild(kittenEl);
// infoEl.appendChild(nameEl);
// body.appendChild(favoriteEl);
// favoriteEl.appendChild(listEl);
// // Append ordered list 
// favoriteEl.appendChild(listEl);

// h1El.setAttribute("style", "margin:auto; width:50%; text-align:center;");
// infoEl.setAttribute("style", "margin:auto; width:50%; text-align:center;");
// imgEl.setAttribute("src", "http://placekitten.com/200/300");
// nameEl.setAttribute("style", "font-size:25px; text-align:center;");
// kittenEl.setAttribute("style", "font-size:25px; text-align:center;");
// favoriteEl.setAttribute("style", "font-size:20px;");

// var listEl = document.createElement("ol");
// // Create ordered list items
// var li1 = document.createElement("li");
// var li2 = document.createElement("li");
// var li3 = document.createElement("li");
// var li4 = document.createElement("li");
// TODO: Add ordered list items containing four favorite foods

// li1.textContent = "Fish";
// listEl.appendChild(li1)

// Get a reference to our body tag
let foodsArray = ["Apples 🍎 ", "Pizza 🍕 ", "Dumplings 🥟 ", "Cupcakes 🧁 "];

// Gives us a reference to our body tag
let body = document.body;
// Step 1 create new element
let newParagraph = document.createElement("p")

// Step 2 set content/value for the newly created element
newParagraph.textContent = 'The content from this string will be displayed on our page'

// Step 3 Finally add new element to our body tag
body.appendChild(newParagraph)

for (let i = 0; i < foodsArray.length; i++) {
    // create element
    let li = document.createElement("li")
    // set content of new element
    li.textContent = foodsArray[i]

    orderedList.appendChild(li)

}
