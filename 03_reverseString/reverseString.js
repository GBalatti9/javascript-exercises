const reverseString = function(str) {
    let arr = str.split('');
    let reverse = [];
    arr.forEach(letter => {
        reverse.unshift(letter);
    });
    return reverse.join('')
};

// Do not edit below this line
module.exports = reverseString;
