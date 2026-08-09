// readonly
const card = document.querySelector(".card")
const container = document.querySelector(".container")
const message = document.getElementById("message")
const score1 = document.querySelector("#score1")
const score2 = document.querySelector("#score2")
const boxes = document.querySelectorAll(".box")
const btn2 = document.querySelector(".button2")
const btn3 = document.querySelector(".button3")
const inp1 = document.querySelector(".inp1")
const inp2 = document.querySelector(".inp2")
const pox = document.querySelector("#pox")
const pxo = document.querySelector("#pxo")
const save = document.querySelector(".save")
const p1 = document.querySelector(".p1h1")
const p2 = document.querySelector(".p2h1")
const player1 = { name: `player1`, Symbol: `X`, score: 0 }
const player2 = { name: `player2`, Symbol: `O`, score: 0 }
let playing = "player1"
const board = ["", "", "", "", "", "", "", "", ""]
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
function saved(){
    player1.name = `${inp1.value}`
    player2.name = `${inp2.value}`
    player1.Symbol = `${pox.value}`
    player2.Symbol = `${pxo.value}`
    p1.innerHTML = `${player1.name}`
    p2.innerHTML = `${player2.name}`
    message.innerText = 'play!'
    card.style.display = 'none'
    container.style.display = 'flex'
}
function restart() {
    playing = "player1"
    score1.innerText = "0"
    score2.innerText = "0"
    player1.score = "0"
    player2.score = "0"
    board.fill("")
    boxes.forEach((box) => {
        box.innerText = ""
    })
    message.innerText = ''
    card.style.display = 'flex'
    container.style.display = 'none'
}
function round() {
    board.fill("")
    boxes.forEach((box) => {
        box.innerText = ""
    })
    message.innerText = ''
}
function put(lol) {
    const cell = lol.target
    let indexx = Number(cell.dataset.cellIndex)
    if (board[indexx] !== "") {
        return
    }
    if (playing === "player1") {
        board[indexx] = player1.Symbol
        cell.classList.remove("O")
        cell.classList.add("X")
        cell.innerText = player1.Symbol
        playing = "player2"
        console.log(board)
    }
    else {
        board[indexx] = player2.Symbol
        cell.classList.remove("X")
        cell.classList.add("O")
        cell.innerText = player2.Symbol
        playing = "player1"
        console.log(board)
    }
    winningConditions.forEach((condition) => {
        const [a, b, c] = condition
        if (board[a] == board[b] && board[b] == board[c] && board[a] == board[c] && board[a] != "") {
            if (playing == "player1") {
                player2.score++
                score2.innerText = `${player2.score}`
                message.innerHTML = `player 2 won 😝`
            }
            if (playing == "player2") {
                player1.score++
                score1.innerText = `${player1.score}`
                message.innerHTML = `player 1 won 😝`
            }
        }
    })
}
boxes.forEach((box, index) => {
    box.addEventListener("click", put)
})
btn3.addEventListener("click", restart)
btn2.addEventListener("click", round)
save.addEventListener("click", saved)