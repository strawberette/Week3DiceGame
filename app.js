const newGame = document.getElementById("newGame")
const hold = document.getElementById("hold")
const diceScore = document.getElementById("diceScore")
const player1Score = document.getElementById("player1Score")
const player2Score = document.getElementById("player2Score")
const diceRoller = document.getElementById("diceRoller")
const totalScore1 = document.getElementById("totalScore1")
const totalScore2 = document.getElementById("totalScore2")
const rollDice = () => {
    for(let i = 0; i < 5; i++) {
    return 1 + Math.floor(Math.random()*6)
}
}
let isPlayer1 = true
let currentThrow = 0

let score1 = 0
let score2 = 0
let tot1 = 0
let tot2 = 0

hold.addEventListener("click",()=> {
    if (currentThrow == 0) {
        return
    }
    if (isPlayer1 == true) {
        score1 += currentThrow
        player1Score.innerHTML = score1
        currentThrow = 0
        diceScore.innerHTML = 0
        isPlayer1 = false   

        if (score1 >= 20) {
            alert("Player 1 is the WINNER!!!!!! Congratulations!")
            tot1++
            totalScore1.innerHTML = tot1
            startNewGame()
        }

    } else {
        score2 += currentThrow
        player2Score.innerHTML = score2
        currentThrow = 0
        diceScore.innerHTML = 0
        isPlayer1 = true

        if (score2 >= 20) {
            alert("Player 2 is the WINNER!!!!!! Congratulations!")
            tot2++
            totalScore2.innerHTML = tot2
            startNewGame()
        }
    }
})


diceRoller.addEventListener("click", () => {    
    currentThrow = rollDice()
    diceScore.style.display = "block"
    switch (currentThrow) {
        case 1:
            diceScore.setAttribute("src", "Alea_1.png")
            break
        case 2:
            diceScore.setAttribute("src", "Alea_2.png")
            break
        case 3:
            diceScore.setAttribute("src", "Alea_3.png")
            break
        case 4:
            diceScore.setAttribute("src", "Alea_4.png")
            break
        case 5:
            diceScore.setAttribute("src", "Alea_5.png")
            break
        case 6:
            diceScore.setAttribute("src", "Alea_6.png")
            break
    }
    diceScore.innerHTML = currentThrow
    if (isPlayer1 == true) {
        // diceScore.innerHTML = 0

       if (currentThrow == 1) {
            
            isPlayer1 = false
            currentThrow = 0
            // hold.removeEventListener("click")
            return    
       }  
        
    } else {
        // dice1Score.innerHTML = 0
        // diceScore.innerHTML = currentThrow
        if (currentThrow == 1) {
           
            currentThrow = 0
            // hold.removeEventListener("click")
            isPlayer1 = true
            return
        } 
    

    }

})

startNewGame = () => {
    isPlayer1 = true
    player1Score.innerHTML = score1 = 0
    player2Score.innerHTML = score2 = 0
    diceScore.innerHTML = 0
    diceRoller.click()
}

newGame.addEventListener("click", () => {
    tot1 = 0
    tot2 = 0
    totalScore1.innerHTML = tot1
    totalScore2.innerHTML = tot2
    startNewGame()
})

