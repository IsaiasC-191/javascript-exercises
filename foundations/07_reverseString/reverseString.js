const reverseString = function (str) {
    let strArr = str.split('');
    let reverseArr = strArr.reverse();

    return reverseArr.join('');


    // Method 2
    // let strArr = str.split('');
    // let reversedArr = [];

    // for (let i = strArr.length; i > 0; i--) {
    //     reversedArr.push(strArr.pop());
    // }

    // return reversedArr.join('');


    // Method 3
    // let reversed = ''

    // for (let i = 0; i < str.length; i++) {
    //     reversed = str[i] + reversed;
    // }

    // return reversed;
};

// Do not edit below this line
module.exports = reverseString;
