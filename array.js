let country = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"]

country.shift() // remove first item in array[0]
country.pop() // remove last item in array[end]
country.push("Pakistan") // add last item in array[end]
country.unshift("China") // add first item in array[0]

console.log("The 5 Largest Population countries in the World")
for(let i = 0; i < country.length; i++){
    console.log("- " + country[i])

}



let cards = [7, 4]
cards.push(6)

let message = [
    "Hello",
    "Hi!",
    "Wats up?"
]

let newMessage = "Hey guys."

message.push(newMessage)

console.log(message)

// let message = [
//     "hey",
//     "hi!",
//     "hello"
// ]

// for(let count = 0; count < message.length; count +=1){
//     console.log(message[count])
// }

let cards = [7, 3, 9]

for(let i = 0; i < cards.length; i++){
    console.log(cards[i])
}


//Array Oject structure

// let course = {
//     title: "Learn CSS Grind",
//     lessons: 16,
//     author: "Rick",
//     length: 20,
//     level: 2,
//     isFree: true,
//     tags: ["html", "css"]
// }

// console.log(course.author) or console.log(course["author"]) //Output: Rick