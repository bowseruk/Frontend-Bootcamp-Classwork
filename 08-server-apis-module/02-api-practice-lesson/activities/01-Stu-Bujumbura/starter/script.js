// Add your own API key between the ""
var APIKey = "fd90c2e0e60b3f4e9689e93a70e6e95d";

// Here we are building the URL we need to query the database
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=Bujumbura,Burundi&appid=" + APIKey;

// We then created an AJAX call
$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {
  console.log(queryURL);
  // Create CODE HERE to Log the queryURL
  console.log(response);
  // Create CODE HERE to log the resulting object
  kevlin = response.main.temp;
  celcius = kevlin - 273.15;
  // Create CODE HERE to calculate the temperature (converted from Kelvin)
  $(".city").text(`City: ${response.name}`);
  $(".wind").text(response.wind.speed);
  $(".humidity").text(response.main.humidity);
  $(".temp").text(celcius);
  // Create CODE HERE to transfer content to HTML
  // Hint: To convert from Kelvin to Celsius: C = K - 273.15
  // Create CODE HERE to dump the temperature content into HTML
});