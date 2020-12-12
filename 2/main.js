const input = require('./input')

// const valid = input.reduce((valid, current) => {
//     const [,min, max, letter, pass] = /(\d*)-(\d*)\s(\w):\s(\w*)/g.exec(current)
//     const reps = pass.split('').filter(char => char === letter).length
//     if (reps >= parseInt(min) && reps <= parseInt(max)) {
//         ++valid
//     }
//     return valid
// }, 0)

const valid = input.reduce((valid, current) => {
    const [,first, second, letter, pass] = /(\d*)-(\d*)\s(\w):\s(\w*)/g.exec(current)
    const exists = (pos) => pass[pos - 1] === letter ? 1 : 0
    if (exists(first) + exists(second) === 1) {
        ++valid
    }
    return valid
}, 0)
console.log(valid)