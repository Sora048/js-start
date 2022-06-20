function removeRange(arr){
    for(var i = start; i <= end; i++){
        
        var temp = arr[i];
        for(var j = i; j < arr.length; j++){
            arr[j] = arr[j+1];
        }
        arr[arr.length - 1] = temp;
        arr.pop();
        console.log("arr[i] is now", arr);
        i--;
        end--;
    }
    return arr
}