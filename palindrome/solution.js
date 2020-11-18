const palindrome = (str) => {
    console.log('start:', str);
    let letters = str.split('');
    let after
    
    for( let i = 1; i < letters.length; i++){
      let l = letters.splice(i, 1)
      letters.unshift(l)
      after = letters.flat().join('')
    }
    console.log('end:', after)
    if(str !== after){
        return false
    }
    return true
}

console.log(palindrome('home'))
console.log(palindrome('racecar'))
console.log(palindrome('hippoppih'))
console.log(palindrome('food'))