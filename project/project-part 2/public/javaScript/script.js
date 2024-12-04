// Assuming 'data' is a JSON string or an array of patient objects
const data = '[{"id": 14589634, "name": "Salah", "lastname": "Abid","address": { "nb": 25, "street": "Salaheddine", "city": "Riyadh" }}, \
  {"id": 14509658, "name": "Ahmed", "lastname": "Anezi","address": { "nb": 14, "street": "Annasr", "city": "Jeddah" }}, \
  {"id": 14563254, "name": "Bahaa", "lastname": "Thebiti","address": { "nb": 521, "street": "Aljanoub", "city": "Taif" }}, \
  {"id": 145432659, "name": "Nawaf", "lastname": "Dousari","address": { "nb": 241, "street": "Olaya", "city": "Riyadh" }}, \
  {"id": 14515879, "name": "Abdelaziz", "lastname": "Qurachi","address": { "nb": 72, "street": "Corniche", "city": "Jeddah" }}, \
  {"id": 14523625, "name": "Saber", "lastname": "Thunayan","address": { "nb": 169, "street": "Al Yamama", "city": "Jeddah" }} \
]'; 

const dataArray = JSON.parse(data); // Parse the data from JSON format

// Function to get a customer by ID
function getCustomerByID(id, dataArray) {
    for (let i = 0; i < dataArray.length; i++) {
        if (id == dataArray[i].id) {
            return dataArray[i]; // Return the matching customer object
        }
    }
    return null; 
}

// Function to create an HTML table row for a customer by ID
function createRowById(customer) {
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

// Function to search for a patient by ID
function searchPatient() {
    const inputId = document.getElementById("Pid").value.trim(); // Get user input and trim whitespace
    const tableBody = document.getElementById("tableBody");

    // Clear previous results
    tableBody.innerHTML = "";

    // Get customer data by ID
    const customer = getCustomerByID(inputId, dataArray);

    // Insert the created row into the table body
    tableBody.innerHTML = createRowById(customer);
}
