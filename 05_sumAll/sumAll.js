const sumAll = function(a,b) {
    if(typeof a !== "number" || typeof b !== "number"){
        return "ERROR"
    }
    if(a < 0 || b < 0){
        return "ERROR"
    }
    sum = 0;
    lowerVal = Math.min(a,b);
    upperVal = Math.max(a,b)
    
    for(; lowerVal <= upperVal; lowerVal++){
        sum += lowerVal;
    }
    return sum
    // the proper mathematical way
    // return (Math.abs(b-a)+1)/2*(a+b)  
};

// Do not edit below this line
module.exports = sumAll;
