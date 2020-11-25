const reverse = (x) => {
    const neg = x < 0
    let num = neg ? (x * -1) : x
    let newX = neg ? '-' : ''
    if(num == 0){
        return 0
    } else {
        while(num > 0){
        let digit = num % 10
        num = Math.floor(num/10)
        newX += digit.toString()
        }
        let result = +newX
        if(-(2**31) <= result && result <= ((2**31)-1)){
            return result
        } else {
            return 0
        }
    }
}

console.log(123, reverse(123))
console.log(-123, reverse(-123))
console.log(120, reverse(120))
console.log(0, reverse(0))
console.log(1534236469, reverse(1534236469))