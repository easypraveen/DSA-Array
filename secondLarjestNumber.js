let arr = [4,9,0,2,8,7,1]

function secondLarjest(arr){
    let firstLarjest = -Infinity;
    let secondLarjest = -Infinity ;
    for(let i = 0;i < arr.length;i++){
        if(arr[i] > firstLarjest){
            secondLarjest = firstLarjest;
            firstLarjest = arr[i];
        } else if(arr[i] > secondLarjest){
            secondLarjest = arr[i]
        }
    }
    return secondLarjest;
}

let result = secondLarjest(arr)
console.log(result)