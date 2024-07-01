const ceaserCipher = {

    cipher: (string,shift) => {
            let capitalString = string.toUpperCase();
            let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            let alphabetArr = alphabet.split("");
            let cipherArr = alphabet.split("");
            let cipheredWord = [];
        
            for(let i =0; i<shift; i++) {
                var newArr = cipherArr.shift();
                cipherArr.push(newArr);
            }
        
        
            for(let i = 0; i<capitalString.length; i++) {
                let cipherCode = alphabetArr.indexOf(capitalString.charAt(i));
                var cipher = cipherArr[cipherCode];
        
            if (cipher !==undefined) {
                cipheredWord.push(cipher);
            }
            if (cipher ==undefined) {
                cipheredWord.push(" ");
            }
            
                var finalCipheredWord = cipheredWord.join('');
        
                }
            
   
    
    
                return finalCipheredWord;
}


} 

module.exports = ceaserCipher;