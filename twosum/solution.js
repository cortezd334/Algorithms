function twoSum(nums, target) {
    const len = nums.length
    let output = []
    for(let i = 0; i < len; i++){
        for( let j = 1; j < len; j++){
            if(nums[i] + nums[j] === target && i != j){
            output = [i, j]
            }
        }
    }
    return output
};

console.log(twoSum([2,7,11,15], 9))
console.log(twoSum([3,2,4], 6))
console.log(twoSum([3,3], 6))

function tSum(nums, target) {
    const len = nums.length
    let output = []
    for(let i = 0; i < len; i++){
        for( let j = 1; j < len; j++){
            if(nums[j] === target - nums[i] && i != j){
                console.log('here', i, j)
            output = [i, j]
            }
        }
    }
    return output
};

console.log(tSum([2,7,11,15], 9))
console.log(tSum([3,2,4], 6))
console.log(tSum([3,3], 6))
