// Q1
// declare a array of `teaflavors` that contains string `greentea` `black tea` and `oolong tea ` acess first element in the array and store it in `firsttea`
// -> 
let teaflavors = [ 'greenTea' , 'blackTea' , 'oolongTea'] ; 
let firsttea = teaflavors[0] ; 
console.log(teaflavors) ; 
console.log(firsttea) ;  

// Q2
// in the previous question change the `oolongTea` name to `AssanTea` 
teaflavors[2] = 'AssamTea' ; 
console.log(teaflavors) ; 

// Q3 add the new tea named `meghalayaTea` to the previous array  using push method 
teaflavors.push('MeghalyaTea') ; 
console.log(teaflavors) ; 

// Q4 Remove the last added element Tea using pop method and store it in new variable named `lastTea`
let lastTea = teaflavors.pop() ; 
console.log(lastTea) ; 
console.log(teaflavors) ; 

// Q5 Create a soft copy of the array named `softCopyTeas` 
let softCopyTeas = teaflavors ;  // soft copy means if u change in the main array then the copy will aslo gets changed 
teaflavors.pop() ; 
console.log(softCopyTeas) ;
console.log(teaflavors) ; 

// Q6 now create an hard copy named `hardcopytea` 
let hardcopytea = [...teaflavors] ;  //vice versa of softcopy tea  
console.log(hardcopytea) ; 

// Q7 you have two arrays 'europeCity' containing 'paris' and 'rome' and 'asiancities' containing 'tokyo' and 'bangkok'. Merge These cities into new array `worldCities` 
let europeCity = ['paris' , 'rome'] ; 
let asiancities = ['tokyo' , 'bangkok'] ; 
let worldCities2 = europeCity.concat(asiancities) ; 
console.log(worldCities2) ; 

// Q8 find the length of the previous worldcity array and store it in `newlength` 
let newlength = worldCities2.length ; 
console.log(newlength) ; 

// you have the `worldCity` array now check if tokyo is present in array and store the result in 'isTokyoInArray'
let isTokyoInArray = worldCities2.includes('tokyo') ; 
console.log(isTokyoInArray) ;  