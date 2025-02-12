const heros = ["thor" , "ironman" , "spiderman"] ; 
const dc_heros = ["superman" , "flash" , "batman"] ; 

heros.push(dc_heros) ;  // takes array as an single element 
console.log(heros) ; 
console.log(heros[3][1]) ; 
heros.pop() ; 

const allHeros = heros.concat(dc_heros) ; 
console.log(allHeros) ;


const allNewHeors = [...heros , ...dc_heros ] ; // similar to concat but it is used nowadays
console.log(allNewHeors) ; 

const newArr = [1 ,2 , 3 , [4 , 5 , 6 ] , 7 , [6 , 7, [ 4 , 5]]] ; 

const realArr = newArr.flat(Infinity) ; 
console.log(realArr) ; 


console.log(Array.isArray("hello")) ; 

console.log(Array.from("Hello")) ; 

console.log(Array.from({name:"hello"})) ; // output: empty array [] 

let sc1 = 100 ; 
let sc2 = 200 ; 
let sc3 = 300 ; 

console.log(Array.of(sc1 , sc2 , sc3));
