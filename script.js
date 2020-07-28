//Create timerArea variable
var timerAreaEl = document.querySelector("#timerArea");
//Create questionArea variable
var questionAreaEl = document.querySelector("#questionArea");
//Create answerArea variable
var answerAreaEl = document.querySelector("#answerArea");
//Create highScoresArea variable
var highScoresAreaEl = document.querySelector("#highScoresArea")
//Create container Variable
var containerEl = document.querySelector("#container")
//Create counter variable to keep track of question index number
var counter = 0;

//Variable holding questions, answers and their true/false values
var questionsArray = [
    {
        //Q1
        question: "Commonly used data types DO NOT include:",
        //Q1 Answers
        answers: [
            {
                text: "1. strings",
                isCorrect: false
            },
            {
                text: "2. booleans",
                isCorrect: false
            },
            {
                text: "3. alerts",
                isCorrect: true
            },
            {
                text: "4. numbers",
                isCorrect: false
            }
        ]
    },
    {
        //Q2
        question: "The condition in an if/else statement is enclosed with______.",
        //Q2 Answers
        answers: [
            {
                text: "1. quotes",
                isCorrect: false
            },
            {
                text: "2. curly brackets",
                isCorrect: false
            },
            {
                text: "3. parantheses",
                isCorrect: true
            },
            {
                text: "4. square brackets",
                isCorrect: false
            }
        ]
    },
    {
        //Q3
        question: "Arrays in Javascript can be used to store____.",
        //Q3 Answers
        answers: [
            {
                text: "1. numbers and strings",
                isCorrect: false
            },
            {
                text: "2. other arrays",
                isCorrect: false
            },
            {
                text: "3. booleans",
                isCorrect: false
            },
            {
                text: "4. all of the above",
                isCorrect: true
            }
        ]
    },
    {
        //Q4
        question: "String values must be enclosed with ___ when being assigned to variables.",
        //Q4 Answers
        answers: [
            {
                text: "1. commas",
                isCorrect: false
            },
            {
                text: "2. curly brackets",
                isCorrect: false
            },
            {
                text: "3. quotes",
                isCorrect: true
            },
            {
                text: "4. parentheses",
                isCorrect: false
            }
        ]
    },
    {
        //Q5
        question: "A very usefull tool used during development and debugging for printing content to the debugger is:",
        //Q5 Answers
        answers: [
            {
                text: "1. Javascript",
                isCorrect: false
            },
            {
                text: "2. terminal/bash",
                isCorrect: false
            },
            {
                text: "3. for loops",
                isCorrect: false
            },
            {
                text: "4. console log",
                isCorrect: true
            }
        ]
    }
]

// DELETE BELOW IF NOT NEEDED 
//   // High Scored Link
//   var a = document.createElement('a');  
//   var link = document.createTextNode("High Scores"); 
//   a.appendChild(link);  
//   a.title = "High Scores";  
//   a.href = "highScores.html";  
//   timerAreaEl.appendChild(a);

//Used for timer function
var intervalState;

//Timer
var timerText = document.createElement("p");
var seconds = 75;
timerText.textContent = "Time Remaining: " +seconds;
timerAreaEl.appendChild(timerText);

//Start Button
var startButton = document.createElement("button");
startButton.className = "btn btn-info btn-lg";
startButton.textContent = "Start Quiz"
timerAreaEl.appendChild(startButton);



// DELETE BELOW IF NOT NEEDED
//Stop Button-- most likely wont be needed
// var stopButton = document.createElement("button");
// stopButton.textContent = "Stop"
// timerAreaEl.appendChild(stopButton);

//End Button-- most likely wont be needed
// var endButton = document.createElement("button");
// endButton.textContent = "End"
// timerAreaEl.appendChild(endButton);


//Start Timer Function
function startTimer(){
    //Start Timer
    intervalState = setInterval(function(){
        seconds = seconds - 1;
        timerText.textContent = seconds;
        if(seconds <= 0){
            clearInterval(intervalState)
            console.log("Time up!")
        }
    }, 1000)
};

//Rungame- Start Timer, Render Q&A set
function runGame(){
    startTimer();
    renderQuestion(counter);
    renderAnswers(counter);
    };

//Determine if another question exists in array  
function hasNextQuestion(){
 return (counter<5);   
};


//DELETE BELOW IF NOT NEEDED
//Variable question based on array 


// var currentQ = questionsArray[counter];
        

       
// //qElement is a paragraph- containing text for the current question index # (starting at 0)    
// var qElement = document.createElement("p");
    
// qElement.textContent = currentQ.question;
// console.log('currentQ.question-->', currentQ.question)
// //after saying this then we want to append eacuh answer to the answerAreaEl
// //looping lthrough questions array for answers array to add i at that array
// questionAreaEl.appendChild(qElement)


//add answr to answer area
        // for (var i = 0; i < currentQ.answers.length; i++) {
        //     var currentAnswer = currentQ.answers[i]
        //     console.log('currentAnswer --> ', currentAnswer)
        //     var isCorrect = currentAnswer.isCorrect
        //     console.log('isCorrect -->', isCorrect)
            
        //     var answer = document.createElement("button");
        //     answer.textContent =  currentAnswer.text
        //     answer.addEventListener("click", function(){
                
        //         if(!isCorrect){
        //             seconds -= 10;
        //             alert("Incorrect")
        //             counter++
        //         }
        //         else{
        //             alert("Correct")
        //             counter++
        //         }

        //     })
        //     answerAreaEl.appendChild(answer)
        //     console.log('answer added')
            
        // }
    
//Render Question
function renderQuestion(index){
    questionAreaEl.innerHTML="";
    var currentQ = questionsArray[index];
    var qElement = document.createElement("p");
    qElement.textContent = currentQ.question;
    console.log('currentQ.question-->', currentQ.question)
    questionAreaEl.appendChild(qElement)
    }

//Render Answer
function renderAnswers(index){
        answerAreaEl.innerHTML="";
        for (var i = 0; i < questionsArray[index].answers.length; i++) {
            var currentAnswer = questionsArray[index].answers[i]
            console.log('currentAnswer --> ', currentAnswer)
            var isCorrect = currentAnswer.isCorrect
                console.log('isCorrect -->', isCorrect)
            
                var answer = document.createElement("button");
                answer.textContent =  currentAnswer.text
                answer.addEventListener("click", function(){
                
                if(!isCorrect){
                    seconds -= 10;
                    alert("Incorrect")
                    counter++
                }
                else{
                    alert("Correct")
                    counter++
                }
                if (hasNextQuestion()){
                    renderQuestion(counter);
                    renderAnswers(counter)                
                }
                else if (!hasNextQuestion()){
                    endGame()
                }

            })
            answerAreaEl.appendChild(answer)
            }    
        };


//End Game- stop timer- prompt user for initials
function endGame(){
    clearInterval(intervalState);
    answerAreaEl.innerHTML="";
    questionAreaEl.innerHTML="";
    score = seconds;
    var yourInitials = prompt("Your final score is " + seconds + ". Please enter your initials")
    if (yourInitials) {
    localStorage.setItem('user_initials', yourInitials);
    localStorage.setItem('score', score);
    console.log(localStorage);
    
//    var playAgain = document.createElement("button");
//    playAgain.textContent = "Play Again"
//    document.body.appendChild(playAgain)
};

//Render High Scores
//function renderHighScores(){
//    var scoreBoard = document.createElement("ul");
//    scoreBoard.setAttribute("id", "topScores");
//    for(var i = 0; i < localStorage.length; i += 2){
//        var li = document.createElement("li");
//        li.innerHTML = yourInitials, score;
//        scoreBoard.appendChild(li);
//    }
//    highScoresAreaEl.appendChild(scoreBoard);
//}

//DELETE BELOW IF NOT USED
//Stop Timer button function - most likely wont be used as the End timer function includes this
// function stopTimer(){
//      clearInterval(intervalState);
// }

// //End timer button function - saved the seconds as text- want to use function for when user click last set of questions to show their final score. 
// function endTimer(){
//     var endElement = document.createElement("p");
//     clearInterval(intervalState);
//     endElement.textContent = "Timer ended. Remaining seconds: " + seconds;
//     timerAreaEl.appendChild(endElement);

}


//Start functions on event click
startButton.addEventListener("click", runGame);
playAgain.addEventListener("click", refreshPage);
//DELETE IF NOT USED
//stopButton.addEventListener("click", stopTimer)
//endButton.addEventListener("click", endTimer)
