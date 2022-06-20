function creditCard(){
//step1
    var last = digitArr.length - 1;
    var aside = digitArr[last];
    console.log("Removed is ",aside);
    digitArr.pop();

//step2
    for(var i = digitArr.length-1; i>=0; i-=2){
        digitArr[i] = digitArr[i] * 2;
    }

//step3
    for(var i = 0; i < digitArr.length; i++){
        if(digitArr[i] > 9){
            console.log("this digit is subtracted", digitArr[i]);
            digitArr[i] = digitArr[i] - 9;
        }
    }

//step4
    var sum = 0;
    for(var i = 0; i < digitArr.length; i++){
        sum += digitArr[i];
    }

//step5
    var conclude = sum + aside;

    console.log(conclude);
    if(conclude % 10 !== 0){
        return false
    }
    else{
        return true
    }
}