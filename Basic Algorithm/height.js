function heights(arr){
    var height = 0;
    var left = [];
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > height){
            height = arr[i];
            left.push(height);
        }
    }
    return left;
}