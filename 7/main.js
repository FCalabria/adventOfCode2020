const input = require('./input')

const createRulesMap = rules => rules
    .reduce((map, rule) => {
        const [, main, conditions] = /(.*) bags contain (.*)\./.exec(rule)
        map[main] = conditions
            .split(', ')
            .reduce((innerMap, condition) => {
                const [, quantity, color] = /(\d*) (.*) bags?/.exec(condition)
                innerMap[color] = parseInt(quantity)
                return innerMap
            }, {})
        return map
    }, {})

const rules = createRulesMap(input)

const addCanContain = (color, baseSet) => {
    return Object.entries(rules)
        .filter(([, value]) => value[color])
        .reduce((acc, [key]) => acc.add(key), baseSet)
}

const result = new Set()
let i = -1
do {
    addCanContain(Array.from(result)[i] || 'shiny gold', result)
    i++
} while (i < result.size);

console.log(result.size)