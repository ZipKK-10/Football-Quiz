const startPage = document.getElementById('start')
const quizPage = document.getElementById('quiz')
const startButton = document.getElementById('start-btn')
const questionTag = document.getElementById('question')
const questionNumber = document.getElementById('currentQuestion')
const answersContainer = document.getElementById('answers')
const answerATag = document.getElementById('answerA')
const answerBTag = document.getElementById('answerB')
const answerCTag = document.getElementById('answerC')
const answerDTag = document.getElementById('answerD')
const nextQuestion = document.getElementById('nextQuestions')
const scorePage = document.getElementById('score')
const scoreResult = document.getElementById('result')
const scorePercantage = document.getElementById('percentage')
const homeButton = document.getElementById('home-btn')

let questionsIndex = 0; // index questions 
let indexNumber = 0; // question number
let score = 0;

//start quiz//
startButton.addEventListener('click', startQuiz)

function startQuiz() {
    startPage.style.display = "none"
    quizPage.style.display = "flex"
    runQuestion();
    runTime();
}

//time countdown//
let counter = 15;

function runTime() {
    setInterval(() => {
        counter--;
        if (counter >= 0) {
            timeLeft = document.getElementById('timer');
            timeLeft.innerHTML = counter;
        } else {
            disabled(); //  score = 0
        }
    }, 1500);
}

//questions and answers//
let questions = [{
        question: "Kto został królem strzelców na mundialu we Francji w 1998 roku?",
        answers: ["Davor Šuker", "Dennis Bergkamp", "Ronaldo Nazario", "Thierry Henry"],
        correct: answerA,
    },
    {
        question: "Kto zagrał w finale mundialu w 2006 roku?",
        answers: ["Francja-Brazylia", "Włochy-Francja", "Brazylia-Niemcy", "Hiszpania-Holandia"],
        correct: answerB,
    },
    {
        question: "Kto wygrał ostatni Puchar Zdobywcow Pucharów?",
        answers: ["Parma", "Olympique Marseille", "Feyenoord", "Lazio"],
        correct: answerD,
    },
    {
        question: "Który trener zdobył UEFA Ligę Mistrzów i Mistrzostwo Świata?",
        answers: ["Vicente del Bosque", "Carlo Ancelotti", "Luiz Felipe Scolari", "Didier Deschamps"],
        correct: answerA,
    },
    {
        question: "W którym klubie nie grał Christian Vieri?",
        answers: ["Roma", "Milan", "Inter", "Juventus"],
        correct: answerA,
    },
    {
        question: "Kto jest 2-krotnym Mistrzem Świata?",
        answers: ["Romario", "Cafu", "Rivaldo", "Roberto Carlos"],
        correct: answerB,
    },
    {
        question: "Który klub nie posiada honorowej odznaki Ligi Mistrzów?",
        answers: ["AC Milan", "FC Barcelona", "Manchester United", "Ajax Amsterdam"],
        correct: answerC,
    },
    {
        question: "Która z drużyn nigdy nie została Mistrzem Niemiec?",
        answers: ["Werder Brema", "Hertha Berlin", "Bayer 04 Leverkusen", "TSV 1860 Monachium"],
        correct: answerC,
    },
    {
        question: "Który piłkarz nie grał w MLS?",
        answers: ["David Beckham", "Lothar Matthäus", "Kaká", "Gabriel Batistuta"],
        correct: answerD,
    },
    {
        question: "Po kim Ronaldinho przejął numer 10 w PSG?",
        answers: ["Mikeal Arteta", "Pedro Pauleta", "Nicolas Anelka", "Jay-Jay Okocha"],
        correct: answerD,
    },
    {
        question: "Która reprezentacja zagrała w meczu finałowym mundialu?",
        answers: ["Portugalia", "Bułgaria", "Szwecja", "Jugosławia"],
        correct: answerC,
    },
    {
        question: "W którym roku Holandia zdobyła Mistrzostwo Europy?",
        answers: ["1992", "1988", "1996", "1980"],
        correct: answerB,
    },
    {
        question: "Który klub ma najwięcej tytułów Mistrza Brazylii?",
        answers: ["SE Palmeiras", "Fluminense FC", "SC Corinthians", "Vasco da Gama"],
        correct: answerA,
    },
    {
        question: "Ile sezonów Sir Alex Ferguson prowadził Manchester United?",
        answers: ["20", "26", "29", "24"],
        correct: answerB,
    },
    {
        question: "Który piłkarz nie zdobył Złotej Piłki?",
        answers: ["Andriy Shevchenko", "Micheal Owen", "Steven Gerrard", "Zinédine Zidane"],
        correct: answerC,
    },
    {
        question: "Kogo Roman Abramowicz ściągnął do Chelsea najpóźniej?",
        answers: ["Joe Cole", "Juan Sebastian Veron", "Didier Drogba", "Claude Makalele"],
        correct: answerC,
    },
    {
        question: "Z którego kraju pochodzi klub Vissel Kobe?",
        answers: ["Korei Południowej", "Wietnamu", "Chin", "Japonii"],
        correct: answerD,
    },
    {
        question: "Kto ma najwięcej występów w koszulce Realu Madryt?",
        answers: ["Raúl", "Fernando Hierro", "Iker Casillas", "Guti"],
        correct: answerA,
    },
    {
        question: "Kto nie był współgospodarzem EURO 2021?",
        answers: ["Szkocja", "Belgia", "Rosja", "Dania"],
        correct: answerB,
    },
    {
        question: "Które drużyny 3-krotnie zdobyły Mistrzostwo Europy?",
        answers: ["Niemcy i Hiszpania", "Niemcy i Włochy", "Francja i Włochy", "Francja i Hiszpania"],
        correct: answerA,
    },
]

function runQuestion() {
    let quest = questions[questionsIndex];
    questionNumber.textContent = indexNumber + 1 + " / " + questions.length;     //  question number
    questionTag.textContent = quest.question;
    answerATag.innerHTML = "<h4>A.</h4>" + " " + quest.answers[0];
    answerBTag.innerHTML = "<h4>B.</h4>" + " " + quest.answers[1];
    answerCTag.innerHTML = "<h4>C.</h4>" + " " + quest.answers[2];
    answerDTag.innerHTML = "<h4>D.</h4>" + " " + quest.answers[3];
}

const lastQuestion = questions.length - 1;

// next question
nextQuestion.addEventListener('click', setNext)

function setNext() {
    resetClass(); // reset classes for answers
    counter = 15; // time value for each question
    indexNumber++; // set question number
    if (questionsIndex < lastQuestion) {
        questionsIndex++;
        runQuestion();
    } else if (questionsIndex === lastQuestion) {
        final();

        function final() {
            quizPage.style.display = "none";
            scorePage.style.display = "flex";
            scoreResult.innerHTML = score + "/" + questions.length; // last question + score page
            scorePercantage.innerHTML = Math.round(100 * score / questions.length) + "%";   // % of result
            homeButton.addEventListener('click', goHome); // back to homepage

            function goHome() {
                window.location.reload(true);
                score = 0;
            }
        }
    }
}

let answersTag = document.querySelectorAll('.answer-btn');
const answersLen = answersContainer.children.length;

// check answers 
answersTag.forEach(function (answer) {
    answer.addEventListener('click', function () {
        if (answer === questions[questionsIndex].correct) {
            answer.classList.add('correct');
            answer.innerHTML = "+1";
            score++; // add point
            console.log('correct');
        } else {
            answer.classList.add('wrong');
            answer.innerHTML = ":(";
            showCorrectAnswer();
        }

        function showCorrectAnswer() {
            for (let i = 0; i < answersLen; i++) {
                if (answersContainer.children[i] === questions[questionsIndex].correct) {
                    answersContainer.children[i].classList.add('correct');
                    answersContainer.children[i].classList.add('transition-time');
                }
            }
        }

        disabled(); // another answers are unclickable
        counter = 0; // pause timer
    })
})

function resetClass() {
    for (let i = 0; i < answersLen; i++) {
        answersContainer.children[i].classList.remove('correct');
        answersContainer.children[i].classList.remove('wrong');
        answersContainer.children[i].classList.remove('answered');
        answersContainer.children[i].classList.remove('transition-time');
    }
}

function disabled() {
    for (let i = 0; i < answersLen; i++) {
        answersContainer.children[i].classList.add('answered');
    }
}
