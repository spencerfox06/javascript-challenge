// from data.js
var tableData = data;
// console.log(tableData)

// Select the button
var button = d3.select("#filter-btn");

// Select the form --- NOT SURE ABOUT THIS
var form = d3.select("#filters");

// Create event handlers 
button.on("click", runEnter);
form.on("submit", runEnter);

// Complete the event handler function for the form
function runEnter() {

  // Prevent the page from refreshing
  // event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select('#datetime')

  // Get the value property of the input element
  var inputValue = inputElement.property('value')
  console.log(inputValue)
  var filteredData = data

  // Use the form input to filter the data by blood type
  if (inputValue) {
    filteredData = tableData.filter(dateobs => dateobs.datetime === inputValue);
    console.log(filteredData)
  }
  var tempbody = d3.select('tbody');
  tempbody.html("")
  filteredData.forEach(row => {
    var temprow = tempbody.append('tr')
    Object.entries(row).forEach(([key, value]) => {
      var tabledata = temprow.append('td')
      tabledata.text(value)
    })
  })
}

runEnter();