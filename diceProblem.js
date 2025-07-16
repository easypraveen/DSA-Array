//Naive Approach dice problem
//using switch case
function oppositeFaceOfDice(n){
    let oppositeface;
    switch (n) {
        case 1:
        oppositeface = 6
        break;
        case 2:
        oppositeface = 5
        break;
        case 3:
        oppositeface = 4
        break;
        case 4:
        oppositeface = 3
        break;
        case 5:
        oppositeface = 2
        break;
        default:
        oppositeface = 1
    }
    return oppositeface
}

console.log(oppositeFaceOfDice(5))

//Expected Approach
function findDiceProblem(n){
  let ans = 7 - n;
  return ans;
}

console.log(findDiceProblem(5))