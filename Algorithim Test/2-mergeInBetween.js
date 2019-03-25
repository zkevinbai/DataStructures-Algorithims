const mergeInBetween = (list1, list2, a, b) => {
    // Write your code here
    let startMinusOne = list1;
    let endPlusOne = list2;

    for (let index = 0; index < a - 1; index++) {
        startMinusOne = list1.next;
    }

    for (let index = 0; index < b + 1; index++) {
        endPlusOne = list1.next;
    }

    let endOfTwo = list2;
    while(list2.next){
        endOfTwo = endofTwo.next;
    }

    startMinusOne.next = list2;
    endOfTwo.next = endPlusOne;

    return list1;
}

