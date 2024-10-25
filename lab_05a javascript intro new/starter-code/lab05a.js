const data=require('./data')

const msg = "Selem";
console.log( msg );

const dataArray =JSON.parse(data);
console.log(dataArray);

function Coustomer(id, name, lastname, address){
    this.id=id;
    this.name=name;
    this.lastname=lastname;
    this.address= address;
}
const c=new Coustomer(12345678, "Hussain", "Ahmed", {"nb": 14, "street": "kornish", "city": "Jeddah"});
const c1=new Coustomer(12345671, "Hassan", "Ahmed", {"nb": 14, "street": "kornish", "city": "Jeddah"});

dataArray.push(c,c1);
console.log(dataArray);
 Coustomer.prototype.output=function(){
    return `${this.name} ${this.id} ${this.address}`;
 };
console.log(c)
console.log(c1)

function getCoustomer(city){
    return dataArray.filter(coustomer => coustomer.address.city ===city);
}
console.log(getCoustomer("Jeddah"));

dataArray.forEach(coustomer => {
    coustomer.output=function(){
        return `${this.name} ${this.lastname}, Address: ${this.address.nb} ${this.address.street}, ${this.address.city}`;
    };
});