// creating an array and passing the number, questions, options and answers
let questions = [
    {
        numb: 1,
        question: "What does HTML stand for?",
        answer: "Hyper Text Markup Language",
        options: [
            "Hyper Text Markup Language",
            "Hyper Text Preprocessor",
            "Hyperlinks and Text markup Language",
            "Home Tool Markup Language",
        ]
    },
    {
        numb: 2,
        question: "How can you make a numbered list?",
        answer: "ul",
        options: [
            "ul",
            "ol",
            "list",
            "dl",
        ]
    },
    {
        numb: 3,
        question: "Which of these elements are all <table> elements?",
        answer: "table,tr,td",
        options: [
            "table,tr,td",
            "table,head,tfoot",
            "table,tr,tt",
            "thead,body,tr",
        ]
    },
    {
        numb: 4,
        question: "Which HTML element defines the title of a document?",
        answer: "title",
        options: [
            "title",
            "head",
            "meta",  
            "origin",
        ]
    },
    {
        numb: 5,
        question: "Which HTML element is used to specify a footer for a document or section?",
        answer: "footer",
        options: [
            "section",
            "bottom",
            "footer",
            "foot",
        ]
    },
    {
        numb: 6,
        question: "What does CSS stand for?",
        answer: "Cascading Style Sheets",
        options: [
            "Computer Style Sheets",
            "Cascading Style Sheets",
            "Colourful Style sheets",
            "Creative Style sheets",
        ]
    },
    {
        numb: 7,
        question: "Where in an HTML document is the correct place to refer to an external style sheet?",
        answer:    "in the head section",
        options: [
            "in the body section",
            "At the end of the document",
            "in the head section",
            "in the footer section",
        ]
    },
    {
        numb: 8,
        question: "Which HTML attribute is used to define inline styles?",
        answer: "style",
        options: [
            "font",
            "style",
            "styles",
            "class",
        ]
    },
    {
        numb: 9,
        question: "How do you make each word in a text start with a capital letter?",
        answer: "text-transform: capitalize",
        options: [
            "you cant do that with CSS",
            "text-style: capitalize",
            "transform: capitalize",
            "text-transform: capitalize",
        ]
    },
    {
        numb:10 ,
        question: "Which property is used to change the left margin of an element?",
        answer: "margin-left",
        options: [
            "indent",
            "margin-left",
            "padding-left",
            "margin",
        ]
    },
    {
        numb: 11,
        question: "Inside which HTML element do we put the JavaScript?",
        answer: "script",
        options: [
            "script",
            "js",
            "scripting",
            "javasript",
        ]
    },
    {
        numb: 12,
        question: "Where is the correct place to insert a JavaScript?",
        answer:  "Both the head section and the body section are correct",
        options: [
            "The body section",
            "Both the head section and the body section are correct",
            "The head section",
            "The footer section",
        ]
    },
    {
        numb: 13,
        question: "How do you create a function in JavaScript?",
        answer:  "function myFunction()",
        options: [
            "function = myFunction()",
            "function myFunction()",
            "function:myFunction()",
            "function: Function()",
        ]
    },
    {
        numb: 14,
        question: "How to write an IF statement in JavaScript?",
        answer:  "if(i == 5)",
        options: [
            "if i = 5 then",
            "if i == 5 then",
            "if i = 5",
            "if(i == 5)",
        ]
    },
    {
        numb: 15,
        question: "How can you add a comment in a JavaScript?",
        answer:  "//This is a  comment",
        options: [
            "//This is a  comment",
            "/*This is a comment/*",
            "(!--This is a comment--)",
            "A and b are both correct",
        ]
    }
]

//getting all required elements
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const timeCount = document.querySelector(".timer .timer_sec");
const timeLine = document.querySelector("header .time_line");
const timeOff = document.querySelector("header .time_txt");

const option_list = document.querySelector(".option_list");

//if start Quiz Button Clicked
start_btn.onclick = ()=>{
    info_box.classList.add( "activeInfo"); //show the info box
}

//if Exit Button Clicked
exit_btn.onclick = ()=>{
    info_box.classList.remove( "activeInfo"); //hide the info box
}

//if continue Button Clicked
continue_btn.onclick = ()=>{
   info_box.classList.remove("activeInfo"); //hide the info box
   quiz_box.classList.add("activeQuiz"); //show the quiz box
   showQuestions(0);
   queCount(1)
    startTimer(15)
    startTimerLine(0);
}

let que_count = 0;
let que_number = 1;
let counter;
let counterLine;
let timeValue = 15;
let widthValue = 0;
let userScore = 0;

 const next_btn = document.querySelector(".next_btn")
 const result_box = document.querySelector(".result_box")
 const restart_quiz = document.querySelector(".buttons .restart")
 const quit_quiz = document.querySelector(".buttons .quit")


 restart_quiz.onclick = ()=>{
    quiz_box.classList.add("activeQuiz");
    result_box.classList.remove("activeresult_box");
    let que_count = 0;
    let que_number = 1;
    let timeValue = 15;
    let widthValue = 0;
    let userScore = 0;  
    showQuestions (que_count);
    queCount(que_number);
    clearInterval(counter)
    startTimer(timeValue)
    clearInterval(counterLine)
    startTimerLine(widthValue)
    next_btn.style.display = "none"
    timeOff.textContent = "Time Left"

}

quit_quiz.onclick = ()=>{
    window.location.reload();
}

 //if Next Button is Clicked
next_btn.onclick = () =>{
    if(que_count < questions.length -1){
        que_count++;
        que_number++;
        showQuestions (que_count);
        queCount(que_number);
        clearInterval(counter)
        startTimer(timeValue)
        clearInterval(counterLine)
        startTimerLine(widthValue)
        next_btn.style.display = "none"
        timeOff.textContent = "Time Left"

    }else{
        clearInterval(counter)
        clearInterval(counterLine)
        console.log("questions complete");
        showResultBox();
    }
}

 //getting questions and options from array
 function showQuestions(index){
    const que_text = document.querySelector(".que_text");
    const option_list = document.querySelector(".option_list");
    let que_tag = '<span>' + questions[index].question + '<span/>';
    let option_tag = '<div class = "option">' + questions[index].options[0] + '<span></span></div>'
                       + '<div class = "option">' + questions[index].options[1] + '<span></span></div>'
                       + '<div class = "option">' + questions[index].options[2] + '<span></span></div>'
                       + '<div class = "option">' + questions[index].options[3] + '<span></span></div>';
    que_text.innerHTML = que_tag;
    option_list.innerHTML = option_tag 
    const option = option_list.querySelectorAll(".option");
    for(let i = 0; i< option.length; i++){
        option[i].setAttribute("onclick","optionSelected(this)");
    }
}   

let tickicon = ' <div class="icon tick"><i class="fas fa-check"></i></div>';
let crossicon = '<div class="icon cross"><i class="fas fa-times"></i></div>';

function optionSelected(answer){
    clearInterval(counter);
    clearInterval(counterLine);
    let userAns = answer.textContent;
    let correctAns = questions[que_count].answer;
    let allOption = option_list.children.length;
    if (userAns == correctAns){
        userScore += 1;
        console.log(userScore);
        answer.classList.add("correct")
        console.log("ans is correct");
        answer.insertAdjacentHTML("beforeend", tickicon);
    } else{
        answer.classList.add("incorrect")
        console.log("ans is wrong");
        answer.insertAdjacentHTML("beforeend", crossicon);
        
        for(let i = 0; i< allOption; i++){
            if(option_list.children[i].textContent == correctAns){
                option_list.children[i].setAttribute("class", "option correct");
                option_list.children[i].insertAdjacentHTML("beforeend", tickicon);
                
            }
        }
    }
    for(let i = 0; i < allOption; i++){
        option_list.children[i].classList.add("disabled")
    }
    next_btn.style.display = "block"
}
function showResultBox(){
    quiz_box.classList.remove("activeQuiz");
    info_box.classList.remove("activeInfo");
    result_box.classList.add("activeresult_box");
    const scoreTest = document.querySelector(".score_test");
    if(userScore > 10){
        let scoreTag = '<span>and Congrats!, You got <p>' + userScore +'</p> out of <p>' + questions.length + '</p></span>';
        scoreTest.innerHTML = scoreTag;
    }
    else if(userScore > 5){
        let scoreTag = '<span>and Nice, You got <p>' + userScore +'</p> out of <p>' + questions.length + '</p></span>';
        scoreTest.innerHTML = scoreTag;
    }
    else{
        let scoreTag = '<span>and sorry, You got <p>' + userScore +'</p> out of <p>' + questions.length + '</p></span>';
        scoreTest.innerHTML = scoreTag;
    }
}
function startTimer(time){
    counter = setInterval(timer, 1000);
    function timer(){
        timeCount.textContent = time;
        time--;
        if(time < 9){
            let addZero = timeCount.textContent;
            timeCount.textContent = "00"
            timeCount.textContent = "0" + addZero
        }
        if(time < 0 ){
            clearInterval(counter);
            timeCount.textContent = "00";
            timeOff.textContent = "Time Off"

            let correctAns = questions[que_count].answer;
            let allOption = option_list.children.length;

            for(let i = 0; i< allOption; i++){
                if(option_list.children[i].textContent == correctAns){
                    option_list.children[i].setAttribute("class", "option correct");
                    option_list.children[i].insertAdjacentHTML("beforeend", tickicon);
                    
                }
            }
            for(let i = 0; i < allOption; i++){
                option_list.children[i].classList.add("disabled")
            }
            next_btn.style.display = "block"
        }
    }
}
function startTimerLine(time){
    counterLine = setInterval(timer, 31);
    function timer(){
        time += 1;
        timeLine.style.width = time + "px";
        if(time > 549 ){
            clearInterval(counterLine);
        }
       
    }
}




function queCount(index){
    const button_ques_counter = document.querySelector(".total_que");
    let totalQuestionTag = '<span><p>' + index +'</p>of<p>'+ questions.length +'</p>questions</span>'
    button_ques_counter.innerHTML = totalQuestionTag;
}                

 