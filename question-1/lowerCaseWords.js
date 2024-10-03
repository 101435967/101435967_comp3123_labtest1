const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];

function lowerCaseWords(arr) {
    return new Promise((resoleve, reject) => 
        {
            const filteredArray = arr.filter(item => typeof item === 'string')
            const lowerCaseArray = filteredArray.map(word => word.toLowerCase());
            resoleve(lowerCaseArray);
    });
};

lowerCaseWords(mixedArray).then(result => console.log(result));
