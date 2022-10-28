const quizData = [
    {
       question: "Inside which HTML element do we put the JavaScript",
      a:"scripting",
      b:"js",
      c:"javaScript",
      d:"script",
      correct:"d",
    },
    {
      question: "How to write an IF statement in JavaScript?",
    a:"if i = 5 then",
    b:"if(i==5)",
    c:"if i = 5",
    d:"if i== 5 then",
    correct:"b",
    },
    {
      question:"what does HTML stand for?",
    a:"Hypertext Markup Language",
    b:"Hypertaxt Markdown Language",
    c:"Hypertaxt Markine Language",
    d:"none",
    correct:"a",
    },
    {
      question:"what year was Javascript launched?",
    a:"1996",
    b:"1995",
    c:"1992",
    d:"none of the abova",
    correct:"b",
    },
];

const quiz = document.getElementById('quiz')
const answerEls = document.getElementById('answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const sudmitBtn = document.getElementById('sudmit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz(){

  deselectAnswers()

  const currentQuizData = quizData [currentQuiz]


  questionEl.innerHTML = currentQuizData.question
  a_text.innerText = currentQuizData.a
  b_text.innerText = currentQuizData.b
  c_text.innerText = currentQuizData.c
  d_text.innerText = currentQuizData.d

}
function  deselectAnswers(){
  answerEls.forEach(answerEls => answerEls.checked = false ) 
}
function getSelected(){
  let answerEls;
  answerEls.forEach(answerEl => {
    if(answerEl.checked) {
      answer = answerEl.id
    }
  })
  return answer
}

sudmitBtn.addEventListener('click',()=>{
  const answer = getSelected()
  if (answer){
    if(answer === quizData[currentQuiz].correct){
      score++
    }
    currentQuiz++

    if (currentQuiz < quizData.length){
      loadQuiz()
    } else{
      quiz.innerHtml=`
      <h2>You answered ${score}/${quizData.length}question correctly</h2>
      <button onclick="location.reload()">Reload</button>
      `
    }
  }
});
