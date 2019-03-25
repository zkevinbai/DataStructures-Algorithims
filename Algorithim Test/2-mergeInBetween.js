const mergeInBetween = (list1, list2, a, b) => {
    let endOfTwo = list2;
    while (endOfTwo.next) {
        endOfTwo = endOfTwo.next;
    }

    // if (a === 1 && b === 1){
    //     endOfTwo = list1.next;
    //     return list2;
    // }

    let startMinusOne = list1;
    let endPlusOne = list1;

    for (let index = 0; index < a; index++) {
        startMinusOne = list1.next;
    }

    for (let index = 0; index < b + 1; index++) {
        endPlusOne = list1.next;
    }

    startMinusOne.next = list2;
    endOfTwo.next = endPlusOne;

    return list1;
}

