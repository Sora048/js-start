let hands = ["rock", "paper", "scissor"]

function getHand(){
    let call = Math.floor(Math.random()*3)
    return hands[call]
}

console.log(getHand())