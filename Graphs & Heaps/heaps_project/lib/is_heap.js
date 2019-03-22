// you may assume that the array will always have a null element at the 0-th index
function isMaxHeap(array, idx=1) {
    let root;
    let left;
    let right;
    for (let index = 1; index < array.length; index++) {
        root = array[index];
        left = array[index * 2];
        right = array[index * 2 + 1];

        if ( root < left ){
            return false;
        }
        if ( root < right ){
            return false;
        }
    }

    return true;
}

module.exports = {
    isMaxHeap
};