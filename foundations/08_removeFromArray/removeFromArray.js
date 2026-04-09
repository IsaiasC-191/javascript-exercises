const removeFromArray = function (arr, ...elements) {

    let newArr = arr;

    for (let element of elements) {
        let tempArr = [];
        for (let i = newArr.length; i > 0; i--) {
            if (newArr[i - 1] === element) {
                newArr.pop();
            } else {
                tempArr.push(newArr.pop());
            }
        }

        newArr = tempArr.reverse();
    }

    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
