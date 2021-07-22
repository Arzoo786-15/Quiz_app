const quizDB=[{
    question:"Q1: What is thw full form of HTML?",
     a:"Hello to My Land",
     b:"hey there my land",
     c:"hyper text makeup language",
     d:"hyper text markup  language",
     ans:"ans4"
},
{
    question:"Q2: We can handle old browsers by placing CSS codes inside.",
    a:" //……………….//",
    b:"<!………………>",
    c:" /*………………*/",
    d:"None of Above",
    ans:"ans3"
},
{
    question:"Q3: …………………. is used to import an external style sheet in a manner similar to the <link> element.",
    a:"@insert",
    b:"@import",
    c:"#import",
    d:" #insert",
    ans:"ans2"
},{
    question:"Q4: In CSS tables, the possible values for the caption-side property can have the following values.",
    a:"top, bottom, left or right",
    b:" top, bottom, center, left or right",
    c:" top or bottom",
    d:" left or right",
    ans:"ans1"
}
]
const question=document.querySelector(".question");
const option1=document.querySelector("#option1");
const option2=document.querySelector("#option2");
const option3=document.querySelector("#option3");
const option4=document.querySelector("#option4");
const submit=document.querySelector("#submit");
const answers=document.querySelectorAll(".answer");
const  showScore=document.querySelector("#showScore");
let questionCount=0;
let score=0;
const loadQuestion=()=>{
    const questionList=quizDB[questionCount]
   question.innerText= questionList.question;
   option1.innerText=questionList.a;
   option2.innerText=questionList.b;
   option3.innerText=questionList.c;
   option4.innerText=questionList.d;

}
loadQuestion();
const getCheckAnswer=()=>{
let answer;
answers.forEach((currAnsElem)=>{
    if(currAnsElem.checked){
        answer=currAnsElem.id;
    }
   
})
return answer;
}
const deselectAll=()=>{
    answers.forEach((currAnsElem)=>currAnsElem.checked=false);
}
submit.addEventListener("click",function(e){
    const checkedAnswer=getCheckAnswer();
    console.log(checkedAnswer);
    if(checkedAnswer==quizDB[questionCount].ans){
        score++;
    }
    questionCount++;
    deselectAll();
    if(questionCount<quizDB.length){
       loadQuestion();
    }
    else{
showScore.innerHTML=`
<h3>You Scored ${score}/${quizDB.length}</h3>
<button class="btn" onclick="location.reload()">Play again</button>
`
showScore.classList.remove("scoreArea")
    }

})