const sumAll = function (num1, num2) {

    let total = 0;

    if (num1 < 0 || num2 < 0 && typeof num1 !== 'number' || typeof num2 !== 'number') { return 'ERROR' };
    if (num1 > Math.floor(num1) && num1 < Math.ceil(num1) || num2 < Math.ceil(num2) && num2 > Math.floor(num2)) { return "ERROR" };

    let start = Math.min(num1, num2);
    let end = Math.max(num1, num2)

    for (let i = start; i <= end; i++) {
        total += i;
    }

    return total;
};

// Do not edit below this line
module.exports = sumAll;
