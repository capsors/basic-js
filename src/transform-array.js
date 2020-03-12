module.exports = function transform(arr) {
    if (!Array.isArray(arr)) {
        throw Error('arguement is not array')
    }

    let newArray = []

    for (let i = 0; i < arr.length; i++) {
        switch (arr[i]) {
            case '--double-next':
                if (arr[i + 1] !== undefined) {
                    newArray.push(arr[i + 1]);
                }
                break;
            case '--discard-next':
                i = i + 1;
                break;
            case '--discard-prev':
                newArray.pop();
                break;
            case '--double-prev':
                if (arr[i - 1] !== undefined) {
                    newArray.push(arr[i - 1]);
                }
                break;
            default:
                newArray.push(arr[i]);
                break;

        }

    }
    return newArray;
};