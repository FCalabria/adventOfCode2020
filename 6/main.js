const input = require('./input')

const getUniqueSet = (stringArray) => {
    return new Set(stringArray
        .join('')
        .split(''))
}

const getLettersMap = (stringArray) => {
    return stringArray
            .join('').split('')
            .reduce((map, letter) => {
                map[letter] ? map[letter] = map[letter] + 1 : map[letter] = 1
                return map
            }, {})
}

const result = input
    .map(result => {
        // return getUniqueSet(result).size
        return Object.entries(getLettersMap(result))
            .filter(([key, value]) => value === result.length)
            .length
    })
    .reduce((acc, el) => acc + el, 0)

    console.log(result)