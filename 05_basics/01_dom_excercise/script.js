// Example 1 
document
.getElementById('ChangeTextButton')
.addEventListener('click' , function(){
    let paragraph = document
    .getElementById('mypara') ; 
    paragraph.textContent = "the paragraph is changed" ; 
}) ; 

// normal function is used to the current context
// arrow function is used to the global context

// Example 2 
document.getElementById('highlightFirstCity')
.addEventListener('click', function() {
    let citiesList = document.getElementById('citiesList');
    console.log(citiesList.firstElementChild); // Debugging
    citiesList.firstElementChild.classList.add('highlight');
});


// Example 3 
document.getElementById('changeOrder')
.addEventListener('click' , function(){
    let coffeType = document.getElementById('coffeType') ; 
    console.log(coffeType) ; 
    coffeType.textContent = " Expresso" ; 
    coffeType.style.backgroundColor = 'white'; 
    coffeType.style.color = 'black'; 
    coffeType.style.padding = '5px'; 
}); 

// example 4 
document.getElementById('addNewItem')
.addEventListener('click' , function(){
    let newItem = document.createElement('li') ; 
    newItem.textContent = "Eggs" ;
    document.getElementById('shoppingList').appendChild(newItem) ; 
})


// example 5 
document.getElementById('removeLastTask')
.addEventListener('click' , function(){
    let taskList = document.getElementById('taskList') ; 
    taskList.lastElementChild.remove() ; 
})