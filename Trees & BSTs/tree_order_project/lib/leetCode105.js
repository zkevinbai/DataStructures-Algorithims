function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var buildTree = function (preorder, inorder) {
    //  Base Cases
    if (preorder.length < 1) {
        return null
    } else if (preorder.length === 1) {
        return new TreeNode(preorder[0])
    }

    //  Define Root  
    let root = new TreeNode(preorder[0])
    let rootIdx = inorder.indexOf(root.val);

    //  Set Left build tree inputs     
    let leftInOrder = inorder.slice(0, rootIdx);
    let leftPreOrder = preorder.slice(1, rootIdx + 1);

    //  Set Right build tree inputs
    let rightInOrder = inorder.slice(rootIdx + 1);
    let rightPreOrder = preorder.slice(rootIdx + 1);;

    //  Define Left and Right Nodes
    let leftNode = buildTree(leftPreOrder, leftInOrder);
    let rightNode = buildTree(rightPreOrder, rightInOrder);

    //  Assign Left and Right Nodes to Root
    root.left = leftNode;
    root.right = rightNode;

    //  Return Root
    return root;
};

// let leftPreOrder = preorder.filter( value => leftInOrder.includes(value) );
// let rightPreOrder = preorder.filter(value => rightInOrder.includes(value));

