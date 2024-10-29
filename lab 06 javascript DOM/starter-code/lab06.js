const run = () => {
  alert("button pressed");
};


for (let d of data) {
  console.log(d);
}

// function createRow(data.forEach(d=>())
  // let row =document.createElement("tr");
  // let td1= data.forEach(d=>(document.createElement("td"+d[0])));
  // let td2= data.forEach(d=>(document.createElement("td"+d[1])));
  // let td3= data.forEach(d=>(document.createElement("td"+d[2])));
  // let td4= data.forEach(d=>(document.createElement("td"+d[3])));
  // row.appendChild(td);
  // td.appendChild(td1);
  // td.appendChild(td2);
  // td.appendChild(td3);
  let employee =data;
  function createRow(employee){
    let row =document.createElement("tr");
    let td1= document.createElement("td"+employee[0]);
    let td2= document.createElement("td"+employee[1]);
    let td3= document.createElement("td"+employee[2]);
    let td4= document.createElement("td"+employee[3]);
    let trNode= row.appendChild(td);
    trNode +=td.appendChild(td1);
    trNode+=td.appendChild(td2);
    trNode+=td.appendChild(td3);
    return trNode;
  };

  function createTable(employee){
    let table= document.createElement("table");
    employee.forEach(d=>{
      table.appendChild(createRow(employee));
    })
  }
