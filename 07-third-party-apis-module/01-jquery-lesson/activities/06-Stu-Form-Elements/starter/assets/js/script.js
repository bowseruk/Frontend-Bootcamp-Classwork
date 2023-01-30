var shoppingFormEl = $('#shopping-form');
var shoppingListEl = $('#shopping-list');

// TODO: Create a function to handle the form submission event that captures the form's `<input>` value and prints it to the `shoppingListEl` as a `<li>`
$(".btn-info").click(()=>{$("#shopping-list").append($(`<li>${$(".form-input").val()}</li>`));});

// TODO: Add an event listener to the `shoppingFormEl` to handle submission
