function rangeIndex(arr, min, max){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] <= min || arr[i] >= max){
            console.log(arr[i], "min to max index");
            var remove = arr[i];
            for(var k = i; k < arr.length - i; k++){
                arr[k] = arr[k+1];
            }
            arr[arr.length-1] = remove;
            arr.pop();
            i--;
        }
        else{
            console.log(arr[i], "Skipped");
        }

    }

    return arr;
}