const run = () => {
  alert("button pressed");
};


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

const createTable=(employeeDisplayed)=>{
  const tb = document.createElement("table");
  tb.innerHTML = "";
  for(let emp of employeeDisplayed){
    tb.appendChild(createRow(emp));
  }
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

