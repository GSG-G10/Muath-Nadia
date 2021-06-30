const startButton = document.querySelector(".header-start");
const leaderButton = document.querySelector(".header-leaderboard");
const headerSection = document.querySelector(".header");
const body = document.body;
const bg = document.querySelector(".main-bg");
let mainSection = document.querySelector("main");

let playerDetails = {
    name: "111",
    score: 0,
}



const questions = {
    1: {
        question: "Question 1. Find the sum of 111 + 222 + 333",
        answers: ["700", "666", "10", "100"],
        rightAnswer: 2,
    },
    2: {
        question: "Question 2. Find the sum of 111 + 222 + 333",
        answers: ["700", "666", "10", "100"],
        rightAnswer: 2,
    },
    3: {
        question: "Question 3. Find the sum of 111 + 222 + 333",
        answers: ["700", "666", "10", "100"],
        rightAnswer: 2,
    },
    4: {
        question: "Question 4. Find the sum of 111 + 222 + 333",
        answers: ["700", "666", "10", "100"],
        rightAnswer: 2,
    },
    5: {
        question: "Question 5. Find the sum of 111 + 222 + 333",
        answers: ["700", "666", "10", "100"],
        rightAnswer: 2,
    },
    6: {
        question: "Question 6. Find the sum of 111 + 222 + 333",
        answers: ["700", "666", "10", "100"],
        rightAnswer: 2,
    },
    7: {
        question: "Question 7. Find the sum of 111 + 222 + 333",
        answers: ["700", "666", "10", "100"],
        rightAnswer: 2,
    },
    8: {
        question: "Question 8. Find the sum of 111 + 222 + 333",
        answers: ["700", "666", "10", "100"],
        rightAnswer: 2,
    },
    9: {
        question: "Question 9. Find the sum of 111 + 222 + 333",
        answers: ["700", "666", "10", "100"],
        rightAnswer: 2,
    },
    10: {
        question: "Question 10. Find the sum of 111 + 222 + 333",
        answers: ["700", "666", "10", "100"],
        rightAnswer: 2,
    },
};

function namePage() {
    mainSection.innerHTML =
        '<h1 class="name-title" > My name is :</h1> <input class="name-input" type="text" placeholder="Enter your name here"> <div class="name-btn"><button class="name-btn-back" onClick="window.location.reload();"><a href="#" ></a>Go Back</button><button class="name-btn-start" onClick="start()"> Start Quiz</button></div>';
};

startButton.addEventListener("click", () => {
    headerSection.parentNode.removeChild(headerSection);
    bg.parentNode.removeChild(bg);
    namePage();
});
let quizerName = localStorage.getItem("name");

function start() {
    let name = document.querySelector(".name-input").value;
    playerDetails.name = name
    localStorage.setItem("name", name)
    questionPage()
}
console.log("The name is ", localStorage.getItem("name"))

function questionPage() {
    mainSection.innerHTML = `<section class="quiz-page"><div class="container" ><div class="quiz-status-bar"><p class="quiz-name">Your Name:<span class="quizer-name">${quizerName}</span> </p><p class="quiz-num">1/10</p></div><section class="quiz-question-box"><div class="quiz-question"><h3>Q1 .  Find the sum of 111 + 222 + 333</h3><button id="q-1" class="quiz-answer">700</button><button id="q-1" class="quiz-answer">666</button><button id="q-1" class="quiz-answer">10</button><button id="q-1" class="quiz-answer">100</button></div></section><button class="quiz-next-question">Next</button></div ></section > `
};
