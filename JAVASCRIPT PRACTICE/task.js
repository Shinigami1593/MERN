const fruit = ['apple','orange','grape','pineapple']
fruit.pop()
fruit.push('watermelon')

const drink = ['coke','fanta','sprite']
drink.pop()
drink.push('redbull')

for(drinks in drink){
    console.log(drink[drinks])
}

for(a of drink){
    console.log(a)
}

const food = [...fruit,...drink]
console.log(food)  //output: [["watermelon"],["redbull"]]


//task 2
function obj(name,cb){
    const greet = "hello " + name
    return cb(greet)
}

const result = obj('ABC',
    (greet) => {
        return greet
    }
)

console.log(result)
