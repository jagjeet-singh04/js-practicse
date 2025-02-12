// two types 
// 1) primitive 
// -> 7 types :- String,  number , boolean , null ,undefined , symbol , Bigint 

// 2) Non primitve  
// -> 3 types :- arrays , objects , functions 

// arrays 
const heros = [ 'shaktiman' , 'doga' , 'hero no 1'] ; 

// objects 
let myobj = {
    name: "hello" , 
    age: 22 , 
} ; 

// fucntions 

const myfunc =  function(){
    console.log("hello world ") ; 
}


// data type 
// null -> object 


// memory 
// stack (primitive) , heap ( non-primitive)
// in stack you get copy 
// in heap you get original you can change 

// stack 
let name1 = "hello" ; 
let name2 = name1 ; 
name2 = "by" ; 
console.log(name1) ;
console.log(name2) ;

// heap 
let userOne = { 
    email : "user@gmail.com" , 
    upi: "user@ybl.com"
} ; 
let userTwo = userOne ; 
userTwo.email = "user2@gmail.com" ; 
console.log(userOne) ; 
console.log(userTwo) ; 
