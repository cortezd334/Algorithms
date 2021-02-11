//first letter is 'key' must be in word
//valid english == wordlist
//min 5 letters long
//only letters included (string of 7 letters)
//letters may be reused

function numKeypadSolutions(wordlist, keypads) {
    const wordCount = []
    for(let keypad of keypads){
        let obj = {};
        let key = keypad[0];
        let validWord = 0;

        for(let letter of keypad) obj[letter] = true;

        for(let word of wordlist){
            let included = false;
            let i = 0;
            let len = word.length

            while(i < len){
                if(!obj[word[i]]) break;
                if(word[i] === key) included = true;
                if(i === len - 1 && included === true) validWord++;
                i++;
            }
        }
        wordCount.push(validWord);
    }
    return wordCount;
}

console.log(numKeypadSolutions(['APPLE', 'PLEAS', 'PLEASE'], ['AELWXYZ', 'AELPXYZ', 'AELPSXY', 'SAELPRT', 'XAEBKSY']))