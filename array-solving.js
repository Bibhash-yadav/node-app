const find_max_occuring_value = (array) => {
    const array_object = {}
    const array_object_keys = []

    array.forEach(item => {
        if (array_object[item]) {
            array_object[item] += 1
            return
        }
        array_object[item] = 1
    })
    for (let key in array_object) {
        if (array_object[key] >= 2) {
            array_object_keys.push(array_object[key])
        }
    }

    const max_key = Math.max(...array_object_keys);
    console.log(Object.keys(array_object).find(key => array_object[key] === max_key))

}

const array = [1, 4, 4, 4, 5, 3];
find_max_occuring_value(array)


// Useful Links:

/**
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for-await...of
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in


https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for

 */
