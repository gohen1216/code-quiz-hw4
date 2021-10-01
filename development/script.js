const start_btn = document.querySelector(".start_btn button");
const instructions= document.querySelector(".instructions");
const questionsEL= document.querySelector(".questions")
const timerEL = document.querySelector('.time');






start_btn.onclick = ()=>{
    instructions.style.display="none";    
    start_btn.style.display="none";   
    questionsEL.style.display="block"; 
    timerEL.style.display="block"; 
    newQuiz()    
 }
var totalTime = 201;
var questionIndex=0;
var interval;
function newQuiz() {
    questionIndex = 0;
    totalTime = 200;
    timerEL.textcontent = totalTime;
    // initialInput.textContent = "";
    interval = setInterval(function(){
        timerEL.innerHTML=totalTime;
        totalTime--;
        if (totalTime === 0){
          clearInterval(interval);
          timerEL.innerHTML='Done';
          // or...
          alert("You're out of time!");
        }
      }, 1000);
      askquestion()
}
 
function askquestion(){
    document.querySelector(".questionTitle").textContent=questions[questionIndex].question
    document.querySelector("#btn1").textContent=questions[questionIndex].choices[0]
document.querySelector("#btn2").textContent=questions[questionIndex].choices[1]
document.querySelector("#btn3").textContent=questions[questionIndex].choices[2]
document.querySelector("#btn4").textContent=questions[questionIndex].choices[3]
} 



function chooseA() { checkAnswer("a"); }
function chooseB() { checkAnswer("b"); }
function chooseC() { checkAnswer("c"); }
function chooseD() { checkAnswer("d"); }

function checkAnswer(guess) {
    if(guess===questions[questionIndex].answer.charAt(0)){
        alert('Correct!')
    } else {
        alert('Wrong!')
    }
    questionIndex++;
    askquestion();
}
var questions = [
    {
        question: "What year was Javascript invented?",
        choices: ["a. 2003", "b. 1995", "c. 1993", "d. 2005"],
        answer: "b. 1995"
    },
    
    {
        question: "String values must be enclosed within _____ when being assigned to variables.",
        choices: ["a. commas", "b. curly brackets", "c. quotes", "d. parenthesis"],
        answer: "c. quotes"
    },
    
    
    {
        question: "Commonly used data types DO NOT include:",
        choices: ["a. strings", "b. booleans", "c. alerts", "d. numbers"],       
         answer: "c. alerts"
    },
    
    {
        question: "Who invented Javascript?",
        choices: [" a. Dave Shea ", "b. Brendan Eich", "c. Tim Berners-Lee", "d. Johnetta Johnson"],
        answer: "b.Brendan Eich"
    },
    
    {
        question: "How do you call a function named myFunction?",
        choices: ["a. call myFunction()", "b. call function myFunction()", "c. myFunction()", "d. call myFunction"],
        answer: "c. myFunctions()"
    },
    
    {
        question: "Where is the correct place to insert a JavaScript?",
        choices: ["a. The <head> section", "b. The <body> section", "c. Both the <head> section and the <body> section are correct", "d. Neither the <head> section and the <body> section are correct"],
        answer: "c.  Both the <head> section and the <body> section are correct"
    },
    
    {
        question: "How can you add a comment in a JavaScript?",
        choices: ["a. 'This is a comment", "b. <!--This is a comment-->", "c. //This is a comment", "d. this is a comment"],
        answer: "c. //This is a comment"
    },
    
    {
        question: "What is the correct syntax for referring to an external script called xxx.js?",
        choices: ["a.<script name= xxx.js> ", "b. <script src= xxx.js>", "c. <script href= xxx.js>", "d.<script= xxx.js>"],
        answer: "b. <script src= xxx.js>  "
    },
    
    {
        question: "How do you create a function in JavaScript?",
        choices: ["a. function = myFunction()", "b. function:myFunction()", "c.function myFunction() ", "d. functionmyFunction()  "],
        answer: "c.function myFunction() "
    },
    
    {
        question: "Which event occurs when the user clicks on an HTML element?",
        choices: ["a. onclick", "b. onchange", "c. onmouseover", "d. onmouseclick"],
        answer: "a. onclick"
    }
];

