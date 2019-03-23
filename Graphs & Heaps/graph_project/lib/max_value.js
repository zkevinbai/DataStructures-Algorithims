function maxValue(node, visited=new Set()) {
    let q = [node];
    let maxVal = 0;
    let cycleKiller = [];

    while(q.length){ 
        let node = q.shift();

        if (cycleKiller.includes(node)){
            return maxVal;
        }

        if(node.neighbors){
            q = q.concat( node.neighbors )
        }

        if (node.val > maxVal){
            maxVal = node.val
        }

        cycleKiller.push(node);
    }

    return maxVal;
}

module.exports = {
    maxValue
};