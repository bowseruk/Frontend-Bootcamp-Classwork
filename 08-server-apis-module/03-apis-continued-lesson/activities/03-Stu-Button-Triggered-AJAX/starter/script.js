// This adds an event listener to the button
$("button").on("click", function() {
  // This reads the data attribute on the button
  var person = $(this).attr("data-person");
  // this makes a url wiith that
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    person + "&api_key=NJRTjUwB961UtondT1ugXEQlYQaT4H9k&limit=10";
  // This uses the URL to make a get request
  $.ajax({
    url: queryURL,
    method: "GET"
  })
    .then(function(response) {
      // This runs on the function above getting a response and assigns the data to a variable
      var results = response.data;
      // This loops over all the results
      for (var i = 0; i < results.length; i++) {
        // This makes a new div
        var gifDiv = $("<div>");
        // This gets the rating for the gif
        var rating = results[i].rating;
        // This gets adds the rating to a new p element
        var p = $("<p>").text("Rating: " + rating);
        // This makes a new img and gives it a src url from the currently select result object
        var personImage = $("<img>");
        personImage.attr("src", results[i].images.fixed_height.url);
        // This adds the image and rating to the div
        gifDiv.prepend(p);
        gifDiv.prepend(personImage);
        // This adds the div at the start of the gifs-appear-here element
        $("#gifs-appear-here").prepend(gifDiv);
      }
    });
});