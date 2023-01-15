let displayHighScores = document.querySelector('#highscores')
const insertAnotherScore = document.createElement('li');



function renderHighScores() {
    let displayInitialsList = localStorage.getItem("initials");
    let displayScoreList = localStorage.getItem("score");
    if (!displayInitialsList || !displayScoreList) {
        return;
    } 
    
    displayHighScores.appendChild(insertAnotherScore);
    displayHighScores.lastChild.innerText =`${displayInitialsList}: ${displayScoreList}`;
    
    
}


renderHighScores();

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
