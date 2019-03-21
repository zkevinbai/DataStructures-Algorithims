// const TreeNode = require('./tree_node.js');

// 0n load check left, keep loading until left most
// 0n pop check right, load right if right

function inOrderArray(root) {
    let stack = [root];
    let res = [];

    if (!root) {
        return res;
    }

    // load stack to left most
    let last = stack.length - 1;
    let lastNode = stack[last];
    while(lastNode.left){
        stack.push(lastNode.left)
        lastNode = lastNode.left;
    }

    //  clear stack
    while(stack.length){
        let popNode = stack.pop();
        res.push(popNode.val);
        if(popNode.right){
            stack.push(popNode.right);
        }
    }

    return res;
}

// d
// e
// b

// f
// c

// a
const recursiveLoader = (root) => {
    if (!root) {
        return [];
    }
    let res = [root.val]
    if (root.right) {
        res = res.concat(recursiveLoader(root.right))
    }
    
    if (root.left) {
        res = res.concat(recursiveLoader(root.left))
    }
    return res;
}

function postOrderArray(root) {
    let res = recursiveLoader(root);
    return res.reverse();
}


module.exports = {
    inOrderArray,
    postOrderArray
};