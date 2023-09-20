const data = require('./data.json');

const task11Result = (animals) => {

    const result = {
        "dogs": animals.reduce((acc, item) => {
            if (item.type === 'dog') {
                acc += 1
            }
            return acc
        }, 0),
        "cats": animals.reduce((acc, item) => {
            if (item.type === 'cat') {
                acc += 1
            }
            return acc
        }, 0),
        "avgage": animals.reduce((acc, item) => {
            acc += item['age']
            return acc
        }, 0)/animals.length
    };
    return result;
};

console.log(task11Result(data));

const task12Result = (animals) => {
    let result = 0;
    for (let i = 0; i < animals.length; i++) {
        if (animals[i]['breed']) {
            result++
        }
    }
    return result;
};

console.log(task12Result(data));

const task13Result = (animals) => {
    const result = [];

    for (let i = 0; i < animals.length; i++) {
        if (animals[i].type === 'cat' && animals[i]['features'].includes('black')) {
            result.push(animals[i])
        }
        if (animals[i].type === 'dog' && animals[i]['features'].includes('white')) {
            result.push(animals[i])
        }
    }
    
    return result;
};

console.log(task13Result(data));

const task14Result = (animals) => {


    const cats = animals.filter((animal) => animal.type === 'cat').sort((a,b) => b['age'] - a['age'])
    const dogs = animals.filter((animal) => animal.type === 'dog').sort((a,b) => a['age'] - b['age'])

    const result = cats.concat(dogs);

    return result;
};

console.log(task14Result(data));

const myPowFunc = (number, n) => {

    // Для целых n можно использовать такую реализацию
    let multi = number
    if (n < 0) {
        multi = 1/number
        number = 1/number

    }
    for (let i = 1; i < Math.abs(n); i++) {
       number *= multi
    }
    return number

    // Для любых n
   // return number**n
};

console.log(myPowFunc(3, 5));

const myFlatFunc = (...inputArray) => {
    const result = []
    for (let i = 0; i < inputArray.length; i++) {
        const currentElement = inputArray[i]
        if (Array.isArray(currentElement)) {
            result.push(...myFlatFunc(...currentElement))
        } else {
            result.push(currentElement)
        }
    }
    return result;
};

console.log(myFlatFunc([1, 3, 5, [1, [4,5], 'asdf', [76, [56, [66, 59]]]]]));
// result 1, 3, 5, 1, 4, 5, 'asdf', 76, 56, 66, 59