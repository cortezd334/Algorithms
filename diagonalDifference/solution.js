const diagonalDifference = (arr) => {
    let left = 0;
    let right = 0;
    for(let i = 0; i < arr.length; i++){
        let j = i;
        let k = (arr.length - 1) - j;
        left += arr[i][j]
        right += arr[i][k]
    }
    return Math.abs(left - right)
}

console.log(diagonalDifference([[11, 2, 4], [4, 5, 6], [10, 8, -12]]))
console.log(diagonalDifference([[-11, 2, 4], [4, 5, 6], [10, 8, -12]]))
console.log(diagonalDifference([[-1, 9, 54], [4, -5, 6], [-1, 8, 1]]))