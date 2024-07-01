const reverseString = {
    reverse: (string) => {
        let splitWord = string.split("");
        let reversedWord = splitWord.reverse();
        let newWord = reversedWord.join('');
        return newWord;




    }
    
    
}


module.exports = reverseString;
