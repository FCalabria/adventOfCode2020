const input = require('./input')

const getDecimal = (binary, max, firstChar, lastChar) => {
    return binary
        .split('')
        .reduce((limits, char) => {
            const half = Math.ceil((limits[1] - limits[0])/ 2)
            if (char === firstChar) {
                limits[1] = limits[1] - half
            } else {
                limits[0] = limits[0] + half
            }
            return limits
        }, [0, max])[0]
}

const seat = input
    .map(binary => {
        const row = getDecimal(binary.substring(0, 7), 127, 'F', 'B')
        const col = getDecimal(binary.substring(7), 7, 'L', 'R')
        return row * 8 + col
    })
    // .reduce((max, current) => current >= max ? current : max, 0)
    .sort((a, b) => a - b) // 75 to 864
    .filter((id, i, full) => full[i+1] && full[i+1] !== id + 1)
console.log(seat[0] + 1)