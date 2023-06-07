function uniquevalues(arr){
    const arr1 = new Set(arr)
    // console.log(arr1);
    return arr1;
}

const myarray = [1,2,3,4,5,6,1,2,3]
console.log(uniquevalues(myarray));