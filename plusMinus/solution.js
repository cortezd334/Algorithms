const plusMinus = (arr) => {
    let pos = 0;
    let neg = 0;
    let zero = 0;
    let len = arr.length;

    for(let i = 0; i < len; i++) {
        if(arr[i]===0){
            zero++
        } else if(arr[i]>0){
            pos++
        } else {
            neg++
        }
    }
    console.log((pos/len).toFixed(6))
    console.log((neg/len).toFixed(6))
    console.log((zero/len).toFixed(6))
}

console.log(plusMinus([-4, 3, -9, 0, 4, 1]))
console.log(plusMinus([1, 2, 3, -1, -2, -3, 0, 0]))
console.log(plusMinus([-4, 3, -9, 0, -4, 1]))