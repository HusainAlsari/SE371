//const data = require('./data'); // Import the data

const dataArray = JSON.parse(data); // Parse the data

// Function to get a customer by ID
function getCustomerByID(id, dataArray) {
    for (let i = 0; i < dataArray.length; i++) {
        if (id === dataArray[i].id) {
            return dataArray[i]; // Return the matching customer object
        }
    }
    return null; // Return null if no match is found
}

// Function to create an HTML table row for a customer by ID
function createRowById(id, dataArray) {
    let customer = getCustomerByID(id, dataArray);
    
    if (customer === null) {
        return `<tr><td colspan="4">Customer not found</td></tr>`;
    }

    let row = `<tr>`;
    row += `<td>${customer.id}</td>`;
    row += `<td>${customer.name}</td>`;
    row += `<td>${customer.lastname}</td>`;
    row += `<td>${customer.address.nb}, ${customer.address.street}, ${customer.address.city}</td>`;
    row += `</tr>`;

    return row;
}

// Function to generate a complete table
function generateTable(dataArray) {
    let table = `<table border="1">`;
    table += `<tr><th>ID</th><th>Name</th><th>Last Name</th><th>Address</th></tr>`;
    
    for (let i = 0; i < dataArray.length; i++) {
        table += createRowById(dataArray[i].id, dataArray); // Use the row function
    }
    
    table += `</table>`;
    return table;
}

// Write the table to the page
document.write("<h2>Customer Table</h2>");
document.write(generateTable(dataArray));

// Sorting functions
function sortById(dataArray) {
    return dataArray.toSorted((a, b) => a.id - b.id);
}

function sortByCity(dataArray) {
    return dataArray.toSorted((a, b) => a.address.city.localeCompare(b.address.city));
}

// Optional: If you want to sort and display the sorted table, you can uncomment the following lines
document.write("<h2>Sorted by ID</h2>");
document.write(generateTable(sortById(dataArray)));

document.write("<h2>Sorted by City</h2>");
document.write(generateTable(sortByCity(dataArray)));
