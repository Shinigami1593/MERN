//varible
//3 modifier/datatype
//const, let, var

//const --> immutable(change hanna napaune)
const constVar = 1

//let -->block/scoped (cannot reassign)

let letVar = 20
letVar = 30 //can mutate
//let letVar =300 // cannot reassign

if(i==1){
    let letVar2 = 300 //block scoped
}
// console.log(letVar2) cannot use outside of scope
//var //global scoped //can rassign

var newVar = 10
newVar = 20 //can mutate
if(1 ==1 ){
    var newVar2 = 300 //global scoped
}
console.log(newVar2)

//FUNCTION
//normal function

function myFunction(){
    console.log("hello")
}

myFunction()

//arrow function