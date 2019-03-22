class MaxHeap {
    constructor() {
        this.array = [null];
    }
    
    getParent(idx) {
        return Math.floor(idx / 2);
    }

    getLeftChild(idx) {
        return idx * 2;
    }

    getRightChild(idx) {
        return idx * 2 + 1;
    }

    siftUp(idx) {
        if (idx === 1) return;

        let parentIdx = this.getParent(idx);
        let parent = this.array[ parentIdx ];
        let siftNum = this.array[ idx];
        
        if (siftNum > parent){
            this.array[parentIdx] = siftNum;
            this.array[idx] = parent;

            this.siftUp(parentIdx);
        }
    }

    // take parent
    // check left child
    // check right child
    
    siftDown(idx) {
        if(idx === this.array.length - 1) return;

        let leftChildIdx = this.getLeftChild(idx);
        let rightChildIdx = this.getRightChild(idx);

        let leftChild = (this.array[leftChildIdx]);
        let rightChild = this.array[rightChildIdx];

        leftChild = leftChild || 0;
        rightChild = rightChild || 0;

        let parent = this.array[idx];

        if(parent < leftChild && leftChild > rightChild) {
            this.array[leftChildIdx] = parent;
            this.array[idx] = leftChild;
            this.siftDown(leftChildIdx);
        } else if (parent < rightChild && rightChild > leftChild) {
            this.array[rightChildIdx] = parent;
            this.array[idx] = rightChild;
            this.siftDown(rightChildIdx);
        }
    }

    insert(val) {
        let lastIdx = this.array.length;
        this.array.push(val);

        this.siftUp(lastIdx);
    }

    deleteMax() {
        if (this.array.length === 1) return null;
        if (this.array.length === 2) return this.array.pop();

        let max = this.array[1];

        // you use the last number as the new root because you don't know
        // if left child of root or right child of root is bigger
        this.array[1] = this.array.pop();
        this.siftDown(1);

        return max;
    }

}

module.exports = {
    MaxHeap
};