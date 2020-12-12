const input = require('./input.js')

for (const i in input) {
    for (const j in input) {
        for (const k in input) {
            if (input[i] + input[j] + input[k] === 2020) {
                console.log(input[i] * input[j] * input[k])
                return
            }
        }
    }
}