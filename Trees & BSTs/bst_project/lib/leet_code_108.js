// View the full problem and run the test cases at:
//  https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/

class TreeNode{
    constructor(value){
        this.value=value;
        this.left=null;
        this.right=null;

    }
  insert(value, root = this) {
    const node = new TreeNode(value)
    if (!root) {
      root = node
    } else if (root.val > value) {
      if (!root.left) {
        root.left = node;
      } else {
        this.insert(value, root.left)
      }
    } else {
      if (!root.right) {
        root.right = node;
      } else {
        this.insert(value, root.right)
      }
    }
  }
}


function sortedArrayToBST(array) {
    let mid = Math.floor(array.length/2);
    let left = array.slice(0, mid+1).reverse();
    let right = array.slice(mid+1);

    let bool = false;
    let shift = left.shift();
    let node = new TreeNode(shift)

    while(left.length + right.length > 0) {
      if (bool) {
        shift  = left.shift();
      } else {
        shift = right.shift();
      }
      bool = !bool;
      node.insert(shift)
    }
    return node
}

