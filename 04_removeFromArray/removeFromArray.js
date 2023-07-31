const removeFromArray = function(arr, ...num) {
    console.log(num);
    let newArray = [];

    arr.forEach(number => {
        if(!num.includes(number)){
            newArray.push(number)
        }
    })

    return newArray
};

// console.log(removeFromArray([1,2,3], 2, 3));

// Do not edit below this line
module.exports = removeFromArray;
