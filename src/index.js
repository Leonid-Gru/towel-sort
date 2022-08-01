module.exports = function towelSort(matrix) {
    const arr = [];
    if (!matrix) {
        return [];
    }
    for (let i = 0; i < matrix.length; i++) {
        if (i % 2 !== 0) {
            arr.push(...(matrix[i].reverse()));
        } else {
            arr.push(...matrix[i]);
        }
    }
    return arr;
}
