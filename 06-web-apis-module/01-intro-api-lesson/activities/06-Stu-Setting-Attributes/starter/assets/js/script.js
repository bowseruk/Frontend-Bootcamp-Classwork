var siteEl = [document.querySelector(".site1"), document.querySelector(".site2"), document.querySelector(".site3")];
var siteElHref = ["https://google.com", "https://twitter.com", "https://instagram.com"];
var siteImgAlt = ["man working", "group brainstorm", "women working"];

// Changed below to reduce replication
for (let i = 0; i < siteEl.length; i++) {
    siteEl[i].children[0].textContent = `Site ${i + 1}`;
    siteEl[i].children[1].setAttribute("href", siteElHref[i]);
    siteEl[i].children[1].children[0].setAttribute("src", `assets/images/image_${i + 1}.jpg`);
    siteEl[i].children[1].children[0].setAttribute("alt", siteImgAlt[i]);
    siteEl[i].children[1].children[0].setAttribute("style", "padding:10px;");
}

// Write Your Code Below
// Array of H4 objects
h4 = document.querySelectorAll("h4");
// For loop to set the style for each of the headers
h4.forEach((element) => {
    element.style.color = "blue";
    element.style.fontSize = "30px";
    element.style.fontWeight = "bold";
    element.style.paddingLeft = "10px";
    element.style.margin = 0;
});