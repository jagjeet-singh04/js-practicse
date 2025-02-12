const name = "hello" 
const repocount = 20 ; 
// console.log(name + repocount + "value") ; 

console.log(`Hello my name is ${name} and my repocount is ${repocount}`) ; 

const gameName = new String ("jaggixbadmash") ; 
console.log (gameName ); 
console.log(gameName[0] ) ; 

console.log(gameName.length) ; 
console.log(gameName.charAt(2)) ; 
console.log(gameName.indexOf('b')) ; 


// substring cannot give negative values 
const newGameName = gameName.substring(0 , 5) ; 
console.log(newGameName) ; 

// In slicing we can give negative values 
const anotherName = gameName.slice( -13 , 5) ; 
console.log(anotherName) ;


// trim 
const newName = "     Hello   " ; 
console.log(newName) ; 
console.log(newName.trim()) ; 


// Suppose if we have some url and if want to replace something in it 
const url = "https://youtube.com/the%20traderoom"

console.log(url.replace('%20' , '-')) ; 

console.log(url.includes('trade')) ;

const newString = 'hello-world-again'
// if i want to split on the basis of any parameter 
console.log(newString.split('-')) ; 