let computer = { CPU : 12 } ; 
let lenovo = { screen : "HD" , 
    __proto__ : computer //it will give access to all the properties inside the computer 
} ; 
let tomHardware = { } ; 

// prototype syntax -> name.__proto__
console.log(`computer` , computer.__proto__) ;
console.log(`lenovo` , lenovo.__proto__)  ; 


let genericCar = {tyre:4} ; 

let tesla = {
    driver: "AI" 
}

// object.setprototypeof is similar to __proto__
Object.setPrototypeOf(tesla , genericCar) ; //tesla me genericacar ki all property
console.log(`tesla` , Object.getPrototypeOf(tesla)) ; 


