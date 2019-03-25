function bestSumDownwardTreePath(parent, values) {
    // Write your code here

    
}

function treeMaker(parent, values) {
    let tree = {};

    for (let index = 0; index < parent.length; index++) {
        tree[ parent[i] ] = values[i];
    }

    return tree;
}