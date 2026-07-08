const message = document.getElementById("message")
const score1 = document.querySelector(".score1")
const score2 = document.querySelector(".score2")
const boxes = document.querySelectorAll(".box") 
const btn1 = document.querySelector(".button1")
const btn2 = document.querySelector(".button2")
const btn3 = document.querySelector(".button3")
const player1 = { name:"player1", Symbol:"X", score: 0}
const player2 = { name:"player2", Symbol:"O", score: 0}
let playing = player1
const board = ["", "", "", "", "", "", "", "", ""]
const box1 = document.querySelector("#1")
const box2 = document.querySelector("#2")
const box3 = document.querySelector("#3")
const box4 = document.querySelector("#4")
const box5 = document.querySelector("#5")
const box6 = document.querySelector("#6")
const box7 = document.querySelector("#7")
const box8 = document.querySelector("#8")
const box9 = document.querySelector("#9")
const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
function newGame() {
    playing = player1
    board.fill("")
}
newGame()
btn1.addEventListener("click", () => {
    message.classList.add("nono");
})
btn2.addEventListener("click", () => {
    message.classList.remove("nono");
    newGame()    
})
box