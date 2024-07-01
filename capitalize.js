const capitalize = {
    capitalize: (string) => {
        let capitalLetter = string.charAt(0).toUpperCase();
        let restLetters = "";
     
        for(let i =1; i<string.length; i++) {
             restLetters += string.charAt(i).toLowerCase();
        }
         let newWord = capitalLetter + restLetters;
         return newWord;

    }


}

module.exports = capitalize;
