let player = {
    name: "Rick",
    chips: 120,
    sayHello: function(){
        console.log("Kamusta")
    }
}

let cards = []
let sum = 0
let hasBlackjack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("card-el")

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard(){
    let random = Math.floor(Math.random() * 13 + 1)

    if(random === 1){
        return 11
    }
    else if(random >= 10){
        return 10
    }
    else{
        return random
    }
}

function startGame(){
    
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    
    renderGame()
}

function renderGame(){
    for(let i = 0; i < cards.length; i++){
        cardEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum: " + sum

    if(sum <= 20){
        message = "Do You Want To Draw New Card?🧐"
        isAlive = true
    }
    else if(sum === 21){
        message = "BlackJack!😎"
        hasBlackjack = true
    }
    else{
        message = "You Lose!🖕"
        isAlive = false
    }

    messageEl.textContent = message
}

function newCard(){

    if(isAlive === true && hasBlackjack === false){
        let newCard = getRandomCard()
        sum += newCard
        cards.push(newCard)
        renderGame()
    }
    else{
        //
    }
}
