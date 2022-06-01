const startPage = document.getElementById('start')
const quizPage = document.getElementById('quiz')
const startButton = document.getElementById('start-btn')

//start quiz//
startButton.addEventListener('click', startQuiz)

function startQuiz() {
    startPage.style.display = "none"
    quizPage.style.display = "flex"
}
