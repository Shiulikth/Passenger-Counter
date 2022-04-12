//document.getElementById("count-el").innerText = 10;

//initilize the count as 0
//listen for clicks on the increment button
//increment the count variable when button is clicked
//change the count-el in the html to reflect the new count
let countEl = document.getElementById("count-el");
let count = 0;
function increment(){
    count = count +1;
    countEl.innerText = count;
    
    
}

