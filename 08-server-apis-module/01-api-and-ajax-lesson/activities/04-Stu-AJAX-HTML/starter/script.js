// Query the movie at the URL
var query = (movie) => "https://www.omdbapi.com/?t=" + movie + "&apikey=trilogy";
// The below code fills in the first row of the table
["Dune", "The Shawshank Redemption", "Escape From New York", "The Thing", "Big Trouble in Little China", "Escape From L.A."].forEach(movie => populate(query(movie)));
// Populate a row based on a URL
function populate(url) {
  $.ajax({ url: url, method: "GET" }).then(function (response) {
    // Create and save a reference to new empty table row.
    let row = $('<tr>');
    // Create and save references to 3 td elements containing the Title, Year, and Actors from the AJAX response object.
    ["Title", "Year", "Actors"].forEach(property => row.append($('<td>').text(response[property])));
    // Append the row to the table.
    $('tbody').append(row);
  });
}