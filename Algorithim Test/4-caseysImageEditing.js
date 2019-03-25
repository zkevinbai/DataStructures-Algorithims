function largestMatrix(arr) {
    let squared = arr.length ** 2;
    let zeroCount = 0;
    let max = arr.length - 1;

    for (let index = 0; index < arr.length; index++) {
        let subArr = arr[index];


        for (let index = 0; index < subArr.length; index++) {
            if (subArr[index] === 0){
                max -= 1;
                zeroCount += 1;
            }            
        }        
    }

    if (zeroCount === squared) return 0;
    if ( max < 1) return 1;

    return max;
}
let arr = [
[0, 1, 1],
[1, 1, 0],
[1, 0, 1]
];