let displayHighScores = document.querySelector('#highscores')
const nestedInitials = JSON.parse(localStorage.getItem("initialsArray"));
let nestedScores = JSON.parse(localStorage.getItem("scoreArray"));

const initialsList = nestedInitials.flat(Infinity);
const scoresList = nestedScores.flat(Infinity);

function renderHighScores() {
    if (initialsList === "") {
        return;
    } else {
        for (let i = 0; i < initialsList.length; i++) {
            var todo = `${initialsList[i]}: ${scoresList[i]}`;
            var li = document.createElement("li");
            li.textContent = todo;
            displayHighScores.appendChild(li); 
         
            
        }
        
        
       // return displayHighScores.lastChild.innerText 
    }
}

if (!document.hidden){
    renderHighScores();
 
}

console.log(displayHighScores.lastChild);

let clearButton = document.querySelector('#clear')

function clearHighScores() {
    var list = document.querySelectorAll('li');
    localStorage.clear();
    displayHighScores.remove(list);
}
clearButton.addEventListener('click', clearHighScores);

console.log(clearButton);

console.log(localStorage);