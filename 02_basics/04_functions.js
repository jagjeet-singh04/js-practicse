// Q1 write a function named 'makeTea' that takes one parameter 'typeOfTea' and returns string like 'Making Green Tea' if 'Green Tea' is the input store the result in 'teaOrder' 
// function makeTea(typeOfTea){
//     let teaOrder = `Making ${typeOfTea}` ; 
//     console.log(teaOrder) ; 
// }
// makeTea('Green Tea') ; 


// Q2 Create a function named `order Tea ` which has one parameter 'tea type ' inside this create another function named 'ConfrimOrder' that returns message like "order Confirmed for chai". Call 'confirmOrder' form within 'OrderTea' and return the result 

function OrderTea(teaType){
    function confirmOrder (teaType)
    {
        return `Order Confirmed For ${teaType}` ; 
    }
    return confirmOrder(teaType) ; 
}
console.log(OrderTea('chai')) ; 

// Q3 write an arrow function named `calculateTotal` that takes two parameters 'price' and quantity the function should return the total cost by mutipyling the 'price' and 'quantity' and store it in variable named 'totalcost'

const calculateTotal =  (price , quantity) =>{
    return  price * quantity ; 
}
let totalcost = calculateTotal(499 , 100) ; 
console.log(totalcost) ; 

// Q4 write an function named `processTeaOrder` that takes another function , `makeTea` as a parameter  and calls it with argument 'earl grey' 
// return the result of calling `maketea`
function makeTea(typeOfTea) 
{
    return `makeTea:  ${typeOfTea}` ; 
}
function processTeaOrder (teaFunction) {
    return teaFunction('earl grey')
}
let order = processTeaOrder(makeTea) ; 
console.log(order) ; 


// write a function named `createteakmaker` that return another function the returned function should take one parameter teatype and return message like `making green tea ` store the returned function into a variable named `teamaker` and call it with `green tea ` 

function createteakmaker() {
    return function anotherFunction(teatype)
    {
        return `Making ${teatype}` ; 
    }
}

let teamaker = createteakmaker('green tea') ; 
console.log(teamaker('green tea')) ;