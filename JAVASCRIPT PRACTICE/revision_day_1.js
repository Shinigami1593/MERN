//varible
//3 modifier/datatype
//const, let, var

//const --> immutable(change hanna napaune)
const constVar = 1

//let -->block/scoped (cannot reassign)

let letVar = 20
letVar = 30 //can mutate
//let letVar =300 // cannot reassign

if(1==1){
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
const myArrowFunction = () =>{
    console.log("This is arrow function")
}
myArrowFunction()

const mySumArray = (num1,num2) => {
    let sum = num1 + num2
    return sum
}
let sumData = mySumArray(100,200)
console.log(sumData)

//arrow function returns if no scope is defined
const retArrow = () => true
console.log(retArrow)

//callback function higher order function
const callBackExample = (func) => {
    console.log("executing logic")
    func()
}

callBackExample(
    () => {
        console.log("Running callback function")
    }
)

callBackExample()

const callBackSun = (a,b,cb) => {
    let sum = a + b
    return cb(sum)
}

callBackSun(
    (sum) => {
        console.log(sum)
    }
)

const callbackCalculation = (a,b,cb) => {
    let sum = a + b
    let sub = a - b
    let div = a / b
    let mul = a * b
    return cb(sum,sub,div,mul)
}

callbackCalculation(
    //100,200
    (sum,sub,div,mul) => {
        console.log(sum,sub,div,mul)
    }
)

//array/loop/array callbacks

const myArr = [1,2,3,40]
//index based
console.log(myArr[0])
//add to an array
myArr.push(90)
//remove
myArr.pop()
//looping array
for(data in myArr){
    console.log(data) //0,1,...
}
for(data of myArr){
    console.log(data) // 1,2,3,40
}
//array callbacks
myArr.forEach((data) => {
    console.log(data)
})

// array map
const mapperArr = myArr.map((map) => {
    return "this is " + map
})

console.log(mapperArr)

const fruits =['orrange','mango','grapes']
const mappedFruit = fruits.map(
    (elem) => "<li>" + elem + "</li>"
)
console.log(mappedFruit)

//object/hasmap
const obj ={
    name:"john",
    age: 30,
    address: "Dillibazar",
    over18: true,
    salary: 50000.22
}
//object is key/value pair
console.log(obj.name)
console.log(obj.salary)


