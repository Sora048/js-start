//let myLead = ["www.awesomelead.com", "ww.epiclead.com", "www.greatlead.com"]
let myLead = []

const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteEl = document.getElementById("delete-btn")
const tabEl = document.getElementById("tab-btn")

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
if(leadsFromLocalStorage){
    myLead = leadsFromLocalStorage
    render(myLead)
}

// const tabs = [
//     {url: "https://www.linkedin.com/in/per-harald-borgan/"}
// ]

tabEl.addEventListener("click", function(){

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        console.log(tabs)
        
        myLead.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLead))
        render(myLead)

    })
})

function render(lead){
    let listItems = ""
    for(let i = 0; i < lead.length; i++){

        listItems += `
            <li>
                <a target='_blank' href='${lead[i]}'>  
                    ${lead[i]} 
                </a>
            </li>
        ` 
    }
    ulEl.innerHTML = listItems
}

deleteEl.addEventListener("dblclick", function(){
    console.log("double clicked")
    localStorage.clear()
    myLead = []
    render(myLead)
})

inputBtn.addEventListener("click", function(){
    myLead.push(inputEl.value)  //get input tag
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLead))
    render(myLead)
})

