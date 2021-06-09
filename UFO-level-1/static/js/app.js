var $tbody = document.querySelector("tbody");
var $dateInput = document.querySelector("#datetime");
var $searchBtn = document.querySelector("#search");
var $resetBtn = document.querySelector("#reset");

$searchBtn.addEventListener("click", handleSearchButtonClick);

$resetBtn.addEventListener("click", handleResetButtonClick);

// from data.js
var tableData = data;


