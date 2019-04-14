const sortArray = array => array.sort((a, b) => [a - b])

export const getExtreme = (array, side) => {
    const sorted = sortArray(array) 
    const left = sorted[0]
    const right = sorted[array.length - 1]
    
    return side === 'left' ? left : right
}
