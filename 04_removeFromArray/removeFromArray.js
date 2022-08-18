const removeFromArray = function(arr) {
    newArr = [];
    let toRemove;
    for (let i = 0; i < arr.length; i++) 
    {
        toRemove = false;
        for (let j = 1; j < arguments.length; j++) 
        {
            if (arguments[j] === arr[i]) 
            {
                toRemove = true;
            }
        }
        if (toRemove === false) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
