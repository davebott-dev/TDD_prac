const analyzeArray = {
    analyze: ([...arr]) => {
        let sum = 0;
        let count =0;
    
        for(let i =0;i<arr.length; i++) {
            sum+=arr[i];
            count +=i;
        }
    
    
        const arrObject = {
            average: sum/count,
            minimum: (Math.min(...arr)),
            maximum: (Math.max(...arr)),
            length: (arr.length)
        }
        
    
        return(arrObject) 



    }



} 


module.exports = analyzeArray