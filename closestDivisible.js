//Find Closest to n and Divisible by m
//Naive Approach formula (n + m) (n - m)
function findClosest(n,m){
    let closest = 0;
    let minDifference = Infinity;
for(let i = n - Math.abs(m); i <= n + Math.abs(m);i++){
    if(i % m === 0){
       let difference = Math.abs(n - i)
       if(difference < minDifference || (difference === minDifference && Math.abs(i) > Math.abs(closest))){
        closest = i;
        minDifference = difference;
       }
    }
}
return closest;
}

console.log(findClosest(13,4))

//Expected Approach formula quitent and firstValue n * m secondvalue if same sign then use m * ( q + 1) if opposite sign m * (q - 1)
function closestNumber(n,m){
    let q = parseInt(n / m);

    //first value closest
    let n1 = m * q;

    //second value closest
    let n2 = (n * m) > 0 ? m * ( q + 1) : m * ( q - 1)

    //if n1 difference value is less then n2 difference value or condition is true
    if(Math.abs(n - n1) < Math.abs(n - n2)) return n1;

    //esle n2 is closest number
    return n2
}

console.log(closestNumber(15,4))

