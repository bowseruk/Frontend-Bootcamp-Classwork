var shoppingFormEl = $('#shopping-form');
var shoppingListEl = $('#shopping-list');

// TODO: Create a function to handle the form submission event that captures the form's `<input>` value and prints it to the `shoppingListEl` as a `<li>`
function handleAddItems(event) {
    event.preventDefault();
    listValue = event.target[0].value;
    let listEl = $('<li>');
    listEl.text(listValue);
    if (listValue === "") {
        return;
    };
    shoppingListEl.append(listEl);
    listEl.on('click', (event) => {
        event.target.remove()
    } )
    event.target[0].value = null;

}
// TODO: Add an event listener to the `shoppingFormEl` to handle submission
shoppingFormEl.on('submit', handleAddItems)