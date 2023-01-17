// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score





// timer starts upon clicking start button

// add an eventListener to the start button
let score = 0;
const allAnswers = [2, 4, 2, 4, 3, ]
const allSelections = [];
let countdown = 60;
function countingDown() {
    if (!(countdown > 0)) {

        clearInterval(myInterval);
        questionDiv.classList.add('hide');
        endScreen.classList.remove('hide');
    } else {
        countdown--;
        time.innerText = countdown;
    }   
}
const startBtn = document.querySelector("#start");
const startScreen = document.getElementById('start-screen')
const questionDiv = document.getElementById('questions');
const endScreen = document.getElementById('end-screen');
const time = document.getElementById('time');
startBtn.addEventListener('click', startGame);
const choices = document.getElementById('choices');
const feedback = document.querySelector('#feedback')



const myInterval = function(){
    setInterval(countingDown, 1000);
}
console.log(startBtn);
console.log(questionDiv);

function startGame () {
    // THEN a timer starts and I am presented with a question
    // remove the .hide class from the questions div
    questionDiv.classList.remove('hide');
    startScreen.classList.add('hide');

    // the timer with id #time's innertext
    time.innerText = countdown;
    myInterval();
    
    
    
        // clearInterval(myInterval);
    }
    
        
    
    //if (countdown = 0){
      //  questionDiv.classList.add('hide');
        //endScreen.classList.remove('hide');
        

    // if timer reaches zero, hide #questions. Unhide #end-screen
   



    // when the event ONCLICK happens, update to next question:
        // update questionTitle.innerText
        // update choiceBtn

//         questionTitle.innerText = questions.one.ask;

// for let property in questions 
// choiceBtn1.innerText = questions.one.options[0];
// choiceBtn2.innerText = questions.one.options[1];
// choiceBtn3.innerText = questions.one.options[2];
// choiceBtn4.innerText = questions.one.options[3];
let index = 0;
const newQuestion = function () {
    index++;
 // call a function HERE
questionTitle.innerText = askArray[index];
choiceBtn1.innerText = optionsArray[index][0];
choiceBtn2.innerText = optionsArray[index][1];
choiceBtn3.innerText = optionsArray[index][2];
choiceBtn4.innerText = optionsArray[index][3];
}



let finalScore = document.getElementById('final-score');
let assignNumber = 0;
let index2 = 0;
document.querySelector('#choices').addEventListener
('click', function(e){
    
    assignNumber = Number(e.target.getAttribute('name'));
    console.log(assignNumber);
     if (assignNumber == answerArray[index2] ) {
        console.log(`${assignNumber} is equal to ${answerArray[index2]}`);
        score++;
        playAudio(correctSound);
        console.log(`Score: ${score}`);
     } else {console.log(`${assignNumber} is NOT equal to ${answerArray[index2]}`);
        console.log(`Score remains: ${score}`);
        playAudio(incorrectSound);
        countdown -= 10;
     }
        index2++;
        return finalScore.innerText = `${score}`;
});



document.querySelector('#choices').addEventListener
('click', newQuestion);


let initialsArray = [JSON.parse(localStorage.getItem("initialsArray"))];
let scoreArray = [JSON.parse(localStorage.getItem("scoreArray"))];



document.querySelector('#submit').addEventListener
('click', function(event) {
    event.preventDefault();
    var initials = document.querySelector("#initials").value;
    if (initials === "") {
        alert("Please type your initials");
      } else if (initials.length > 3) {
        alert('maximum 3 letters')
      } else {
        initialsArray.push(initials);
        scoreArray.push(finalScore.innerText)
        if (initialsArray[0] === null) {initialsArray.shift()}
        if (scoreArray[0] === null) {scoreArray.shift()}
        localStorage.setItem("initialsArray", JSON.stringify(initialsArray));
        localStorage.setItem("scoreArray", JSON.stringify(scoreArray));
      }
      feedback.classList.remove('hide');
});

const correctSound = document.querySelector('#correct');
const incorrectSound = document.querySelector('#incorrect');
function playAudio(input) {
    input.play();
}


console.log(choices.children);
console.log(questKeys);
console.log(questions["one"]);
console.log("______________________________-----------______");
