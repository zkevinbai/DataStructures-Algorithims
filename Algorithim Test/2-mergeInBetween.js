const mergeInBetween = (list1, list2, a, b) => {
    let endOfTwo = list2;
    while (endOfTwo.next) {
        endOfTwo = endOfTwo.next;
    }

    if (a === 1 && b === 1) {
        endOfTwo = list1.next;
        return list2;
    }

    let aMinusOne = list1;

    for (let index = 0; index < a - 2; index++) {
        aMinusOne = aMinusOne.next;
    }

    let bPlusOne = list1;

    for (let index = 0; index < b; index++) {
        bPlusOne = bPlusOne.next;
    }

    aMinusOne.next = list2;
    endOfTwo.next = bPlusOne;

    if ( a === 1) return list2;

    return list1;
}