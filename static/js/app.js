//import the data from data.js
const tableData = data;

//reference the HTML table using d3
var tbody = d3.select("tbody");

//start building table
function buildTable(data) {
   //first, clear out any existing data
    tbody.html("");

    //Next, loop through each object in the data and 
    //append a row and cells for each value in the row
    data.forEach((dataRow) => {
       //append a row to the table body
        let row = tbody.append("tr");

        //loop through each field in the dataRow and 
        //add each value as a table cell (td)
        Object.values(dataRow).forEach((val) => {
           let cell = row.append("td");
           cell.text(val);
            }
        );
   }); 
};

//start building button click handling function
function handleClick() {
    //grab the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;

    //check to see if a date was etnered and 
    //filter the data using that date
    if (date) {
        //apply 'filter' to the table data to only 
        //keep the rows where the 'datetime' value matches the filter value
        filteredData = filteredData.filter(row => row.datetime === date);
    }

    //rebuild the table using the filtered data
    //@Note: if no date was entered, then filteredData will
    //just be the original tableData
    buildTable(filteredData);
};

//listen for filter button click and run handleClick function
d3.selectAll("#filter-btn").on("click", handleClick);

//Build table as soon as webpage loads
buildTable(tableData);