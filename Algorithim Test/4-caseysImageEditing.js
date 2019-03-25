function largestMatrix(array) {
    let maxSquare = [];

    for (let index = 0; index < array.length; index++) {
        const subArray = array[index];

        if (!maxSquare.length){
            if (!subArray.includes(0)){
                maxSquare.push(subArray);
            } else {
                let slice = [];
                for (let i = 0; i < subArray.length; i++) {
                    const number = subArray[i];
                    if (number === 1) {
                        slice.push(1);
                    } else {
                        break;
                    }
                }
                maxSquare.push(slice);
            }
        } else {
            let slice = [];
            for (let i = 0; i < subArray.length; i++) {
                const number = subArray[i];
                if (number === 1) {
                    slice.push(1);
                } else {
                    break;
                }
            }
            maxSquare.push(slice);
        }
    }

    return maxSquare;
}

let arr = [
[0, 1, 1],
[1, 1, 0],
[1, 0, 1]
];
