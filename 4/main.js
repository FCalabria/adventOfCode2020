const input = require('./input')

const hasRequiredFields = passport => {
    const stringified = passport.join(' ')
    return ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid']
        .reduce((valid, param) => stringified.includes(param) && valid, true)
}

const validHeight = height => {
    let [,value, cypher] = /(\d*)(\w{2})/.exec(height)
    value = parseInt(value)
    if (cypher === 'cm') {
        return value >= 150 && value <= 193
    } else if (cypher === 'in') {
        return value >= 59 && value <= 76
    } else {
        return false
    }
}

const valid = input.filter(hasRequiredFields)
    .map(passport => passport
        .join(' ')
        .split(' ')
        .reduce((accl, entry) => {
            const [key, value] = entry.split(':')
            accl[key] = value
            return accl
        }, {}))
    .filter(passport => {
        const validByr = parseInt(passport.byr) >= 1920 && parseInt(passport.byr) <= 2002
        const validIyr = parseInt(passport.iyr) >= 2010 && parseInt(passport.iyr) <= 2020
        const validEyr = parseInt(passport.eyr) >= 2020 && parseInt(passport.eyr) <= 2030
        const validHgt = validHeight(passport.hgt)
        const validHcl = /^#[0-9a-f]{6}$/.test(passport.hcl)
        const validEcl = ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'].includes(passport.ecl)
        const validPid = /^\d{9}$/.test(passport.pid)
        return validByr && validIyr && validEyr && validHgt && validHcl && validEcl && validPid
    })

    console.log(valid.length)
