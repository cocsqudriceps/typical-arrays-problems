exports.min = function min(array) {
    if (array === undefined || array.length === 0)
        return 0
    return array.reduce((acc, cur) => acc < cur ? acc : cur)
}

exports.max = function max(array) {
    if (array === undefined || array.length === 0)
        return 0
    return array.reduce((acc, cur) => acc > cur ? acc : cur) ?? 0
}

exports.avg = function avg(array) {
    if (array === undefined || array.length === 0)
        return 0
    return array.reduce((acc, cur) => acc + cur) / array.length
}


