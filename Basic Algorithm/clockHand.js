function clockHand(num){
    if(num % 2 == 0){
        console.log(num % 2)
        return false
    }
    else{
        console.log(num % 2)
        if(num === 65){
            return false
        }
        return true
    }
}