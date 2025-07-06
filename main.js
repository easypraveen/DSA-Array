// Problem: Remove Duplicates from Sorted Array
// Output: 4, nums = [1,2,3,4]


//without using non-prebuild function of javascript
let num = [1,1,2,2,3,3,3,4];
let outputNum = [];

for(let i = 0 ; i < num.length; i++){
  let isDuplicate = false;
  for(let j = 0;j < outputNum.length; j++){
      if(num[i] === outputNum[j]){
          isDuplicate = true;
          break;
      }
  }
  if(!isDuplicate){
      outputNum.push(num[i])
  }
}

console.log(`"Output" :${outputNum.length} , "outputNum" = ${outputNum}`)


//Using function
function removeDuplicate(nums){
    if(nums.length === 0) return 0;
    let i = 0;
    for(let j = 1; j < nums.length;j++){
        if(nums[j] !== nums[i]){
          i++;
          nums[i] = nums[j]
        }
    }
    return i + 1
}

let nums = [1,1,2,2,3,3,3,4];
let length = removeDuplicate(nums)
console.log(length)
console.log(nums.splice(0,length))