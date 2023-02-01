// Initial array of movies
var movies = ["The Matrix", "Dune", "Mr. Right", "The Lion King"];
const processedMovies = []
const responseMovies = [];
movies.map((movie) => queryName(movie))

// Function for displaying movie data
function renderButtons() {
  $('#buttons-view').empty()
  processedMovies.forEach((movie) => {
    let button = $('#buttons-view')
    button.addClass("movie");
    button.on("click", (event => {
      displayMovieInfo(processedMovies.indexOf(event.target.innerText))
    }))
    button.append($('<button>').text(movie));
  })
  // YOUR CODE GOES HERE
}

function queryName(name) {
  let queryURL = `https://www.omdbapi.com/?t=${name}&apikey=trilogy`;
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    if (response.hasOwnProperty("Error") || !response.hasOwnProperty('Title')) {
      console.log(response);
      return false;
    }
    if (processedMovies.includes(response.Title)) {
      console.log(`${response.Title} is already a button.`)
      return false;
    }
    processedMovies.push(response.Title);
    responseMovies.push(response)
    renderButtons();
    console.log(response)
    return true;
  })
  // YOUR CODE GOES HERE
  renderButtons();
}

function displayMovieInfo(index) {
  $('#movie-display').empty()
  let response = responseMovies[index]
  let div = $('<div>')
  let h2 = $('<h2>').text(`${response.Title} (${response.Year})`)
  div.append(h2)
  if (response.Ratings.some(item => 'Source' in item && item['Source'] == 'Metacritic')) {
    let rating = $('<p>').text(`Rating: ${response.Ratings[response.Ratings.map((o) => o.Source).indexOf("Metacritic")].Value}`)
    div.append(rating)
  }
  let releaseDate = $('<p>').text(`Released: ${response.Released}`)
  div.append(releaseDate)
  let p = $('<p>').text(response.Plot)
  div.append(p)
  if (response.Poster !== "N/A") {
    let image = $('<img>')
    image.attr('src', responseMovies[index].Poster)
    div.append(image)
  }
  $('#movie-display').append(div)

}

// This function handles events where one button is clicked
$("#add-movie").on("click", function (event) {
  event.preventDefault()
  queryName($('#movie-input').val())
});

// Calling the renderButtons function to display the initial list of movies
renderButtons();