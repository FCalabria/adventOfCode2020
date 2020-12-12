const input = require('./input')

const results = [1, 3, 5, 7].map(n => {
    let trees = 0
    input.forEach((row, i) => {
        const xCoord = i * n % row.length
        if (row[xCoord] === '#') {
            ++trees
        }
    })
    return trees
})
let lastTrees = 0
input.forEach((row, i) => {
    if (!(i%2)) {
        const xCoord = (i / 2) % row.length
        if (row[xCoord] === '#') {
            ++lastTrees
        }
    }
})
results.push(lastTrees)
console.log(results.reduce((accl, n) => accl * n, 1))