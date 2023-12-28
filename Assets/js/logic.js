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
    var CurrentQuestion  =  Questions[CurrentQuestionIndex];

    var TitleEl = document.getElementById('question-title');
    TitleEl.textContent = CurrentQuestion.title;

    choicesEl.innerHTML = '';

    for (var i = 0; i < CurrentQuestion.choices.length; i++) {

        var Choice = CurrentQuestion.choices[1];
        var ChoiceNode = document.createElement('button');
        ChoiceNode.setAttribute('class', 'choice');
        ChoiceNode.setAttribute('value', Choice);

        ChoiceNode.textContent = i + '. ' + Choice;

        choicesEl.appendChild(ChoiceNode);
    }
}

function QuestionClick(event) {
    var ButtonEl = event.target;

    if (!ButtonEl.value !== Questions[CurrentQuestionIndex].answer) {
        
        Time -= 15;

        if (Time < 0) {
            Time = 0;
        }

        TimerEl.textContent = Time;

        FeedbackEl.textContent = 'Correct';
    }

    CurrentQuestionIndex++;

    if(Time <= 0 || CurrentQuestionIndex === Questions.length) {
        quizEnd();
     
    } else {
        getQuestion();
    }
}

function QuizEnd() {

    clearInterval(TimerId);

    var EndScreenEl = document.getElementById('end-screen');
    EndScreenEl.removeAttribute('class');

    var FinalScoreEl = document.getElementById('final-score');
    FinalScoreEl.textContent = Time;

    QuestionsEl.setAttribute('class', 'hide');
}

function ClockTick() {

    Time--;
    TimerEl.textContent = Time;

    if (Time <= 0) {
        QuizEnd();
    }
}

function saveHighscore() {

    var Initials = InitialsEl.value.trim();

    if (Initials !== '') {
        
        var Highscores =
        JSON.parse(window.localStorage.getItem('highscores')) || [];

        var newScore = {
            score: Time,
            initials: Initials,
        };

        Highscores.push(newScore);
        window.localStorage.setItem('highscores', JSON.stringify(Highscores));

        window.location.href = 'highscores.html';

    }
}

function checkForEnter(event) {
    if (event.key === 'Enter') {
        saveHighscore();
    }
}

SubmitBtn.onclick = saveHighscore;

StartBtn.onclick = startQuiz;

choicesEl.onClick = QuestionClick;

InitialsEl.onkeyup = checkForMyEnter;