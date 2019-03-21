function depthFirstSearch(root, targetVal) {
    if (!root) return null;
    if (root.val === targetVal) return root;

    let leftAns = depthFirstSearch(root.left, targetVal);
    let rightAns = depthFirstSearch(root.right, targetVal);

    if (leftAns) return leftAns;
    if (rightAns) return rightAns;
    return null;
}


module.exports = {
    depthFirstSearch
};