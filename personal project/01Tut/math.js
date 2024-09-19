const add =(a,b)=>a+b
const sub =(a,b)=>a-b
const mul =(a,b)=>a*b
const div =(a,b)=>a/b
//crated functions to export them in the server using the line below
module.exports =(add,sub,div,mul)

console.log(add(1,2))