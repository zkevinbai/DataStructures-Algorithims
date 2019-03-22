function breadthFirstSearch(startingNode, targetVal) {
    let q = [];
    let obj = {};
    if (startingNode.val === targetVal) {
        return startingNode;
    } else if (startingNode.val !== targetVal && !startingNode.neighbors.length) {
        return null;
    }
    let node = startingNode;
    obj[JSON.stringify(node)] = true;
    // obj[node] = true;
    q = q.concat(node.neighbors);

    while (q.length) {
        for (let i = 0; i < q.length; i++) {
            node = q.shift();
            if (obj[JSON.stringify(node)] === true) {
            // if (obj[node] === true) {
                return null;
            }

            if (node.val === targetVal){
                return node;
            } else if (node.neighbors) {
                q = q.concat(node.neighbors);
            } 
            obj[JSON.stringify(node)] = true;
            // obj[node] = true;
        }
    }
    return null; 
}

module.exports = {
    breadthFirstSearch
};