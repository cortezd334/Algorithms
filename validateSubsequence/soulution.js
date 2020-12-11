const validateSubsequence = (array, subsequence) => {
    let aIdx = 0
    let sIdx = 0
    while(aIdx < array.length && sIdx < subsequence.length){
        if(array[aIdx] === subsequence[sIdx]) sIdx++;
        aIdx++
    }
    return sIdx === subsequence.length
}

console.log(validateSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10]))
console.log(validateSubsequence([1, 1, 6, 1], [1, 1, 1, 6]))
console.log(validateSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [5, 1, 22, 25, 6, -1, 8, 10, 10]))
console.log(validateSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [5, 1, 25, 22, 6, -1, 8, 10]))
console.log(validateSubsequence([1, 1, 1, 1, 1], [1, 1, 1]))