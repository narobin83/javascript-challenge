var $tbody = document.querySelector("tbody");
var $dateInput = document.querySelector("#datetime");
var $searchBtn = document.querySelector("#search");
var $resetBtn = document.querySelector("#reset");

$searchBtn.addEventListener("click", handleSearchButtonClick);

$resetBtn.addEventListener("click", handleResetButtonClick);

// from data.js
var tableData = data;

function renderTable() {
    $tbody.innerHTML = "";
    for (var i = 0; i < tableData.length; i++) {
        var address = tableData[i];
        console.log(address)
        var fields = Object.keys(address);
