const sortArray = array => array.sort((a, b) => [a - b])

export const getExtreme = (array, start) => {
    const sorted = sortArray(array)
    return (
        start ? sorted[0] : sorted[array.length - 1]
    )
}
