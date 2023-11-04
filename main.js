//Script by: Roberto Ochoa Cuevas :)

//set number and get counter
var num = 0;
var counter = document.getElementById('counter');

//set text
counter.textContent = num;

//get increase and decrease buttons
increaseButton = document.getElementById('increase');
decreaseButton = document.getElementById('decrease');

//increase Function
function increase(){
    num++ ; //this add 1 to the actual number
    counter.textContent = num;
}

//Decrease Function
function decrease(){
    num--; //this substract 1 to the actual number
    counter.textContent = num;
}

//EventListeners
increaseButton.addEventListener("click", increase);
decreaseButton.addEventListener("click", decrease);

