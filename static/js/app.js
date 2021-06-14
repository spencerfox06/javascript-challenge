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
function runEnter(event) {

    // Prevent the page from refreshing
    // event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputElement = d3.select('#datetime')

    // Get the value property of the input element
    var inputValue = inputElement.property('value')
    console.log(inputValue)

    // Use the form input to filter the data by blood type
    var filteredData = tableData.filter(dateobs => dateobs.datetime === inputValue);
    console.log(filteredData)

    var tempbody = d3.select('#ufo-table');
    data.forEach(filteredData => {
        var temprow = tempbody.append('tr')
        Object.entries(filteredData).forEach(([ key, value ]) => {
            var tabledata = temprow.append('td')
            tabledata.text(value)
    })
  })
}
