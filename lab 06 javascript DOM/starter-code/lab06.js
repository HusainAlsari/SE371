const run = () => {
  const city = document.getElementById("cities_selector").selectedOptions[0].value;
  employees_displayed = [];
  for (let e of data) {
      if ((e.address.city === city) || (city === "all")) {
          employees_displayed.push(e);
      }
  }
  createTable(employees_displayed);};


for (let d of data) {
  console.log(d);
}

let employee =data;

const createRow=(employee)=>{
let tr =document.createElement("tr");
let td1 = document.createElement("td");
td1.appendChild(document.createTextNode(employee.id));

let td2 = document.createElement("td2");
td2.appendChild(document.createTextNode(`${employee.name} ${employee.lastname}`));

let td3 = document.createElement("td");
td3.appendChild(document.createTextNode(`${employee.address.nb}, ${employee.address.street}, ${employee.address.city}`));
tr.append(td1,td2,td3);
return tr;
}
let employeeDisplayed=[];
for(let emp of data){
  employeeDisplayed.push(emp);
}


document.addEventListener("DOMContentLoaded", ()=>{
createTable(employeeDisplayed);
const citiesSelector =document.getElementById("citiesSelector");
citiesSelector.innerHTML="";
let opt_all=document.createElement("option");
opt_all.value = "all";
opt_all.appendChild(document.createTextNode("all"));
citiesSelector.appendChild(opt_all);
});
const applyCSSClassNamesToElementsBySelector = (selectorString, ...classes) => {
  const elems = document.querySelectorAll(selectorString);
  for (let e of elems) {
      for (let c of classes) {
          e.classList.add(c);
      }
  }
};

const createTable = (listOfEmployeesToBeDisplayed) => { 
  const table_body = document.getElementById("employee_table_body");
  table_body.innerHTML = "";

  for (let emp of listOfEmployeesToBeDisplayed) {
      table_body.appendChild(createRow(emp)); 
  }

  applyCSSClassNamesToElementsBySelector("tr:nth-child(even)", "grey");
  applyCSSClassNamesToElementsBySelector("table, td", "border");
};
var cities_set = new Set();
for (let emp of data) {
    cities_set.add(emp.address.city);
}

document.addEventListener("DOMContentLoaded", () => {
    for (let c of cities_set) {
        let opt = document.createElement("option");
        opt.value = c;
        opt.appendChild(document.createTextNode(c));
        cities_selector.appendChild(opt);
    }
});


