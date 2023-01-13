// You want questions and answers

// you want to edit the innertext of the variable #question-title
const questions = {
    one: {
        ask:"What is the ' typeof ' an array?",
         options: ["None of your business", "Object", "Array", "Value"] },
    two: {
        ask:"In a ' for ' loop, what does ' i ' stand for?",
         options:["Iterator", "Index", "Indices", "Anything"] } ,
    three: {
        ask:"Which of these updates did NOT come in ES6?",
         options:["Arrow Functions", "Nested Objects", "Destructuring Assignment", "Getters and Setters" ] } ,  
    four: {
        ask:"What does the keyword ' this ' refer to?",
         options:["Refer to?", "The Window", "The Global Object", "Its parent object" ] } ,
    five: {
        ask:"How do I end a loop?",
         options:["Using an evaluating condition", "Using the keyword 'break'", "Both of the above", "None of the above"] } ,
    six: {
        ask:"Inside which HTML element do we put the JavaScript?",
         options:["<scripting>", "<js>", "<javascript", "<script>"] } ,
    seven: {
        ask:"How do you create a function in JavaScript?",
         options:["function:myFunction()", "function myFunction()", "function = myFunction()", "O Function! myFunction!"] } ,
    eight: {
        ask:"How do you call a function named 'myFunction'?",
         options:["myFunction()", "call function myFunction()", "call myFunction()", "Hey, I just met you, and this is crazy, but here's my number, so call myFunction()"] } ,
    nine: {
        ask:"Which of these IF statements is correct?",
         options:["if (i <> 5)", "if i <> 5", "if (i != 5)", "if i =! 5 then"] } ,
    ten: {
        ask:"How do you round the number 7.25, to the nearest integer?",
         options:["Math.rnd(7.25", "Math.round(7.25)", "rnd(7.25", "round(7.25)"] } ,
    eleven: {
        ask:"How do you find the number with the highest value of x and y?",
         options:["ceil(x,y)", "top(x,y)", "Math.ceil(x,y)", "Math.max(x,y)"] } ,
    twelve: {
        ask:"What will the following code return: Boolean(10 > 9)",
         options:["(10, 9)", "Boolean[0]", "true", "NaN"] } ,
    answers: [1, 2, 3, 4]

    // updateText() { 
    //     for (let key in this) {
    //         if (this[key] == true){
    //             this.trueKeyArray.push(key);
    //           }
    //     }
    // }
}


let questKeys = Object.keys(questions);
let askArray = [];
let optionsArray = [];
questKeys.forEach((property) => {
    askArray.push(questions[property].ask);
    optionsArray.push(questions[property].options);
}) 
console.log(questKeys);
console.log(questions["one"]);

console.log(askArray);
console.log(optionsArray);


const questionTitle = document.getElementById('question-title');
const choiceBtn1 = document.getElementById('choice-btn-1');
const choiceBtn2 = document.getElementById('choice-btn-2');
const choiceBtn3 = document.getElementById('choice-btn-3');
const choiceBtn4 = document.getElementById('choice-btn-4');


// function
// event listener at ParentNode of target
// if one of the buttons is clicked
// then it should trigger the next value along in the questKeys array
// until it reaches "answers"


questionTitle.innerText = askArray[0];
choiceBtn1.innerText = optionsArray[0][0];
choiceBtn2.innerText = optionsArray[0][1];
choiceBtn3.innerText = optionsArray[0][2];
choiceBtn4.innerText = optionsArray[0][3];

console.log(questions.one.options[0]);
// export questkeys