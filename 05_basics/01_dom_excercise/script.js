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


// example 6 
// document.getElementById('ClickMeButton')
// .addEventListener('click' , function(){
//     alert('Hello from Chai') ; 
// })
// document.getElementById('ClickMeButton')
// .addEventListener('mouseover' , function(){
//     alert('Hello from Chai') ; 
// })
document.getElementById('ClickMeButton')
.addEventListener('dblclick' , function(){
    alert('Hello from Chai') ; 
})

// example 7 
document.getElementById('teaList').addEventListener('click' , 
    function(event){
        // console.log(event.target) ; 
        if ( event.target && event.target.matches('.teaItem'))
        {
            alert('you Selected : ' + event.target.textContent) ; 
        }

})


// example 8 
document.getElementById('feedbackForm').addEventListener(
    'submit' , function(event){
        // alert("submitted") ; 
        event.preventDefault() ;
        let feedback = document.getElementById('feedbackInput').value ; 
        console.log(feedback) ; 
        document.getElementById('feedbackDisplay').textContent = `feedback is : ${feedback}` ; 
    }
)

// example 9 
document.addEventListener('DOMContentLoaded' , function(){
    document.getElementById('domStatus').textContent = `Dom Load Complete` ; 
} )

// example 10 
document.getElementById('toggleHighlight').addEventListener('click' , function(){
    let text = document.getElementById('descriptionText').classList.add('highlight') ; 
})