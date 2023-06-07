function randomelements(arr){
    const length = arr.length
    const newarray = [arr[0], arr[1], arr[length - 1]]
    return newarray
}

const arr = [1,2,3,4,5]
console.log(randomelements(arr));