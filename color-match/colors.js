

let fruit = ["red", "orange", "yellow", "green"]
let primaryEl = document.getElementById("primary-el")
let secondaryEl = document.getElementById("secondary-el")

function colors(){
    for(let i = 0; i < fruit.length; i++){
        if(i === 0 || i === 2){
            primaryEl.textContent += fruit[i] + ", "
        }
        else{
            secondaryEl.textContent += fruit[i] + ", "
        }
    }
}
colors()