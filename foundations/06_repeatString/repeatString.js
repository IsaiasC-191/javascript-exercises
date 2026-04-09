const repeatString = function (str, num) {

    // Method 1
    let repeatedStr = [];

    if (num < 0) { return 'ERROR' };

    while (num > 0) {
        repeatedStr.push(str);
        num--;
    }

    return repeatedStr.join('');

    // Method 2
    // let repeatedStr = '';

    // if (num < 0) { return 'ERROR' };

    // while (num > 0) {
    //     repeatedStr = repeatedStr.concat(str);
    //     num--;
    // }

    // return repeatedStr;

};

// Do not edit below this line
module.exports = repeatString;
