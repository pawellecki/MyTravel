const sortArray = array => {
    array.sort((a, b) => [a - b])
}

export const getExtremes = array => {
    console.log(' INT array:',array)

    const sorted = sortArray(array)
    console.log('sorted:',sorted)
    return sorted[0] + sorted[1]
}
