function maxmin(arr){
    const max = Math.max(...arr)
    const min = Math.min(...arr)

    const obj = {"Max":max, "Min":min}
    return obj;
}

const array = [5,8,7,9,10,6]
console.log(maxmin(array));