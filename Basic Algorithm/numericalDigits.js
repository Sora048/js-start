function numericalDigits(digitNum, num){
    
    var separator = 1;

    if(digitNum >= 0){
        
        for(var i = 0; i < digitNum; i++){
            separator *= 10;
        }
        //separator = Math.pow(10, digitNum);
        //console.log(separator)
        
        var remainder = num % separator;
        num = (num-remainder)/separator;
        
        num = num % 10;
        return num;
    }
    else{
        
        for(var i = 0; i > digitNum; i--){
            separator *= 10;
        }
        
        num *= separator;
        num = num - num % 1;//gets rid of the ramaining decimal
        
        num = num % 10;
        return num;
    }
}