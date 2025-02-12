function person(name , age)
{
    this.name = name ; 
    this.age = age ; 
}

function car(make , model )
{
    this.make = make ; 
    this.model = model ; 
}

let myCar = new car('toyota' , 'camry') ; 
console.log(myCar) ; 

let myNewCar = new car('toyota' , 'safari') ; 
console.log(myNewCar) ;     

function tea (type)
{
    this.type = type ; 
    this.describe = function()
    {
        return `this is cup of ${this.type}` ; 
    } ;
}

let lemonTea = new tea('lemon Tea') ; 
console.log(lemonTea.describe ()) ; 

function Animal(species)
{
    this.species = species ; 
}

// ṃaking prototype in function
Animal.prototype.sound = function()
{
    return `${this.species} makes a sound `
}

let dog = new Animal('dog') ; 
console.log(dog.sound()) ; 

function Drink(name)
{
    if ( !new.target)
    {
        throw new Error(" Drink should be called with new keyword" ) ; 
    }
    this.name = name ; 
}

let newDrink = new Drink('colddrinnk')  ; 
console.log(newDrink) ; 

let Drink_without_new = Drink('colddrink ') ; 
console.log(Drink_without_new) ; // will give us our error message 
