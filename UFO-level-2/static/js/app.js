var $tbody = document.querySelector("tbody");
var $dateInput = document.querySelector("#datetime");
var $stateInput = document.querySelector("#state");
var $cityInput = document.querySelector("#city");
var $countryInput = document.querySelector("#country");
var $shapeInput = document.querySelector("#shape");
var $searchBtn = document.querySelector("#search");
var $resetBtn = document.querySelector("#reset");

// from data.js
var tableData = data;

var button = d3.select("#button")

var form = d3.select("#form")

button.on("click", runEnter)
form.on("submit", runEnter)

function runEnter(event) {
  event.preventDefault()

  var inputElement = d3.select("#datetime");
  var inputValue = inputElement.property('value');

  console.log(inputValue);
  console.log(tableData);

  var filteredData = tableData.filter(city => city.datetime === inputValue);
  
  console.log(filteredData);
}

