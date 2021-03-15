exports.min = function min(array) {
    if (array === undefined || array.length === 0)
        return 0
    return array.reduce((acc, cur) => {
        if (acc < cur)
            return acc
        else
            return cur
    })
}

exports.max = function max(array) {
    if (array === undefined || array.length === 0)
        return 0
    return array.reduce((acc, cur) => {
        if (acc > cur)
            return acc
        else
            return cur
    })
}

exports.avg = function avg(array) {
    if (array === undefined || array.length === 0)
        return 0
    return array.reduce((acc, cur) => acc + cur) / array.length
}


