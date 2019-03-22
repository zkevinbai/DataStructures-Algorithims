function numRegions(graph) {
    let visited = {};
    let keys = Object.keys(graph);
    let q = [];
    let count = 0; 
    keys.forEach(key => {
        if (graph[key].length) {
            q = graph[key];
            let uniqNeighbors = true;
            for (let i = 0; i < q.length; i++) {
                if (visited[q[i]]) {
                    uniqChild = false;
                } else {
                    visited[q[i]] = true;
                }
            }
            if (uniqNeighbors && !visited[key]) {
                count += 1; 
            }
        } else if (!graph[key].length) {
            //No neighbors + Never visited before 
            if (!visited[key]) {
                count += 1;
            }
        }
        visited[key] = true; 
    })
    return count;
}

module.exports = {
    numRegions
};