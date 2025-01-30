// array 
const myarr = [0 , 1 , 2  , 3 , 4 ] ;
const heros = [ 'shaktiman' , 'veer' ] ; 

const newArr = new Array(0 , 1 , 2 , 3 ) ; 
console.log(myarr[0] ) ; 

// array methods 

myarr.push(6) ; 
console.log(myarr) ; 

myarr.pop() ; 
console.log(myarr) ;


myarr.unshift(9) ; //adds values to the first 
console.log(myarr) ; 

myarr.shift() ; //removes the values to the first 
console.log(myarr) ; 



console.log(myarr.includes(9)) ; 
console.log(myarr.indexOf(9) ) ; 

const newArr2 = newArr.join() ; //joins the array and converts to string 
console.log(newArr) ;
console.log(newArr2) ; 

// slice and splice 

console.log("A " , myarr) ; 
const myn1 = myarr.slice(1 , 3) ;
console.log 
console.log(myn1) ; 
console.log( "B " , myarr) ; 

const myn2 = myarr.splice(1 , 3) ; //removes the element from the original array and then gives the output 
console.log("C" , myarr) ; 
console.log(myn2) ;
