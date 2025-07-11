let nums = [1,1,2,2,3,3,3,4]
let result = []
let val = 4

// for(let i = 0;i < nums.length;i++){
//     if(nums[i] !== val){
//         result.push(nums[i])
//     }
// }

// console.log(result)

function numsFun(nums){
for(let i = 0;i < nums.length;i++){
    if(nums[i] !== val){
        result.push(nums[i])
    }
}
return result
}

let resultFun = numsFun(nums)
console.log(resultFun)