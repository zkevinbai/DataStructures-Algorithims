// View the full problem and run the test cases at:
//  https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/

const { TreeNode } = require('./tree_node.js');

// locOrderindices = [1, 0, 3, 2, 4]
loadOrder = [3, 9, 20, 15, 7]
locOrder =  [9, 3, 15, 20, 7]

class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class OrderedTree {
    constructor() {
        this.root = null;
        this.locOrder = null;
    }
    insert(value, root = this.root) {
        const node = new TreeNode(value)
        if (!this.root) {
            this.root = node
        } else if (this.locOrder.indexOf(root.val) > this.locOrder.indexOf(value)) {
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

function buildTree(loadOrder, locOrder) {
    const tree = new OrderedTree();
    tree.locOrder = locOrder;

    loadOrder.forEach( value => {
        tree.insert(value)
    });

    return tree.root;
}

buildTree([3, 9, 20, 15, 7],[9, 3, 15, 20, 7])