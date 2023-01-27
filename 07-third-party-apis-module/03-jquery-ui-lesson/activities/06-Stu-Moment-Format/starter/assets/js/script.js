// Use Moment.js to format the date and assign to the declared variable.
// TODO: 1. What is your graduation date in the following format: Jan 1st, 1999?
var gradDate = moment("01/01/1999");
$("#1a").text(gradDate.format("MMM DDD YYYY"));

// TODO: 2. What day of the week will 1/1/2022 be?
var weekDay = moment("01/01/2022");
$("#2a").text(weekDay.format("dddd"));

// TODO: 3. Out of 365, what day of the year is today?
var now = moment();
$("#3a").text(now.format("DDD"));

// TODO: 4. What is the current time in the format: hours:minutes:seconds
var time = moment();
$("#4a").text(time.format("hh:mm:ss"));

// TODO: 5. What is the current Unix timestamp?
var unix = moment().valueOf();
$("#5a").text(unix);

// TODO: 6. Parse the following Unix timestamp, 1318781876, and convert into any time/date format.
var unixFormat = moment(1318781876 * 1000)
$("#6a").text(unixFormat.format("DD MMMM YYYY"));

