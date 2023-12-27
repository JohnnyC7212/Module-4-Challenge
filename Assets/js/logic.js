var CurrentQuestionIndex = 0;
var Time = Questions.length * 15;
var TimerId;

var QuestionsEl = document.getElementById('questions');
var timerEl = document.getElementById('time');
var choicesEl = document.getElementById('choices');
var SubmitEl = document.getElementById('submit');
var StartEl = document.getElementById('start');
var InitialsEl = document.getElementById('initials');
var FeedbackEl = document.getElementById('feedback');


function startMyQuiz() {
    var myStartScreenEl = document.getElementById('start-screen');
    StartScreenEl,setAttribute('class', 'hide');

    QuestionsEl.removeAttribute('class');

    TimerId = setInterval(clockTick, 1000);

    timerEl.textContent = Time;

    getMyQuestion();
}

function getQuestion() {
    var CurrentQuestion  =  Questions
}
