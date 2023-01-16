let displayHighScores = document.querySelector('#highscores')
const insertAnotherScore = document.createElement('li');
let initialsList = [];
initialsList.push(localStorage.getItem("initials"));

function renderHighScores() {
   
    let displayInitialsList = localStorage.getItem("initials");
    let displayScoreList = localStorage.getItem("score");
    if (displayInitialsList === "") {
        return;
    } else if (typeof displayInitialsList == "string") {
        
        
        initialsList.push(displayInitialsList);
        console.log(initialsList);
    }
    
    displayHighScores.appendChild(insertAnotherScore);
    return displayHighScores.lastChild.innerText =`${displayInitialsList}: ${displayScoreList}`;
    
    
}

if (!document.hidden){
    renderHighScores();
    console.log(initialsList);
}
console.log(initialsList);
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
