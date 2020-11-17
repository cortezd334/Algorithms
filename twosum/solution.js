var twoSum = function(nums, target) {
    const len = nums.length
    let output = []
    for(let i = 0; i < len - 1; i++){
        for( let j = 1; j < len - 2; j++){
            if(nums[i] + nums[j] === target){
            output = [i, j]
            }
        }
    }
    return output
};