function searchBandsInTown(artist) {
  // Add code to query the bands in town api searching for the artist received as an argument to this function
  var queryURL =
    "https://rest.bandsintown.com/artists/" + artist + "?app_id=codingbootcamp";

  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    // The artist's name
    var artistName = $("<h1>").text(response.name);

    // The artists thumbnail image
    var artistImage = $("<img>").attr("src", response.thumb_url);

    // The number of fans tracking this artist
    var trackerCount = $("<h2>").text(
      response.tracker_count + " fans tracking this artist"
    );

    // The number of upcoming events for this artist
    var upcomingEvents = $("<h2>").text(
      response.upcoming_event_count + " upcoming events"
    );

    // A link to the bandsintown url for this artist
    var goToArtist = $("<a>").attr("href", response.url).text("See Tour Dates");

    // Using jQuery, append the following to the #artist-div :
    $("#artist-div").append(
      artistName,
      artistImage,
      trackerCount,
      upcomingEvents,
      goToArtist
    );
  });
  // Note: Append actual HTML elements, not just text
}

// Event handler for user clicking the select-artist button
$("#select-artist").on("click", function (event) {
  // Preventing the button from trying to submit the form
  event.preventDefault();
  // Storing the artist name
  var artist = $("#artist-input").val().trim();

  // Running the searchBandsInTown function(passing in the artist as an argument)
  searchBandsInTown(artist);
});
