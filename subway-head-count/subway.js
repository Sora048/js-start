//Subway counting
let countEl = document.getElementById("count-el")

let saveEl = document.getElementById("save-el")

let count = 0

function increment(){
    count+=1
    countEl.textContent = count
}

function save(){
    let previous = count + " - "    
    saveEl.textContent += previous
    count = 0
    countEl.textContent = count
}
save()

