//dates 

let mydate = new Date ()
console.log(mydate) ;

console.log(mydate.toString()) ; 


console.log(mydate.toDateString()) ; 


console.log(mydate.toLocaleString()) ; 

console.log(typeof(mydate)) ; 


let myCreatedDate = new Date (2023 , 11 , 23 ) ;
console.log(myCreatedDate.toDateString()) ;  

let newCreatedDate = new Date("2023-09-20") ; 
console.log(newCreatedDate.toLocaleString()) ; 


let myTimeStamp = Date.now() ; 
console.log(myTimeStamp) ; 

// show time from the created date till now 
console.log(newCreatedDate.getTime() ) ;

console.log(Math.floor(Date.now() / 1000) ) ; 

let newDate = new Date() ; 
console.log(newDate.getMonth()) ; 
console.log(newDate.getDay()) ; 

newDate.toLocaleString('default' , {
    weekday:"long" 
})