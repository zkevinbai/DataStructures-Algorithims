function breadthFirstSearch(startingNode, targetVal) {
    let q = [];
    let cycleKiller = [];
    
    if (startingNode.val === targetVal) {
        return startingNode;
    } else if (startingNode.val !== targetVal && !startingNode.neighbors.length) {
        return null;
    }
    let node = startingNode;
    q = q.concat(node.neighbors);

    while (q.length) {
        for (let i = 0; i < q.length; i++) {
            node = q.shift();
            //Check for cycle 
            if (cycleKiller.includes(node)) {
                return null;
            }

            if (node.val === targetVal){
                return node;
            } else if (node.neighbors) {
                q = q.concat(node.neighbors);
            } 
            cycleKiller.push(node);
        }
    }
    return null; 
}



module.exports = {
    breadthFirstSearch
};