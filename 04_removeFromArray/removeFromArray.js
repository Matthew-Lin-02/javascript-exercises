const removeFromArray = function(array, ...theArgs) {

    //spliced from the original
    // let removeIndex;
    // for(const arg of theArgs){
    //     console.log(arg)
    //     removeIndex = array.indexOf(arg)
        
    //     if(removeIndex !== -1){
    //         array.splice(removeIndex,1)
    //     } 
    // }

    // return array;

    // added to a new array
    // const newArray = [];

    // array.forEach((item)=>{
    //     if(!theArgs.includes(item)){
    //         newArray.push(item);
    //     }
    // })
    // return newArray

    //filtered
    return array.filter(val=>!theArgs.includes(val) )

   



};

// Do not edit below this line
module.exports = removeFromArray;
