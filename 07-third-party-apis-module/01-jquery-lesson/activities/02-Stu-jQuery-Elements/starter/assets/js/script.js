// TODO: Select the existing DOM element, <div id="root">, and assign to a new variable
// Hint: Visit the documentation https://api.jquery.com/
let target = $(`#root`);
// TODO: Create a `<p>` element that will store an author's name and assign that created element to a new variable
let paragraph = $(`<p>`);
// TODO: Add the following text to the newly created `<p>` element: "~ Carol Dweck"
paragraph.text("~ Carol Dweck");
// TODO: Add the class `plain` to the author element
paragraph.addClass("plain");
// TODO: Create a new `<h1>` element that will store an author's quote and assign it to new variable
let title = $('<h1>');
// TODO: Add the following quote text to the quote element, "Love Challenges, Be Intrigued by Mistakes, Enjoy Effort, and Keep Learning."
title.text("Love Challenges, Be Intrigued by Mistakes, Enjoy Effort, and Keep Learning.")
// TODO: Apply the class `fancy` to the quote element
title.addClass("fancy");
// TODO: Append the author element to the quote element
title.append(paragraph);
// TODO: Append the quote element to the HTML element with an ID of `root` in `index.html`
target.append(title);