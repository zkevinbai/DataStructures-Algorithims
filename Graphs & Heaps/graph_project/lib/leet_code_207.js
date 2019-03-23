// View the full problem and run the test cases at:
//  https://leetcode.com/problems/course-schedule/

// >1> max length must be >= num courses
// >2> no cycles allowed in prerequisites

function canFinish(numCourses, prerequisites) {
  if (!prerequisites.length) return true;

  if (hasCycle(prerequisites)) {
    return false;
  } else {
    return true;
  }
}

function graphMaker(graphArray){
  let obj = {};

  graphArray.forEach(node => {
    obj[node[0]] = node[1];
  })

  return obj;
}

function hasCycle(graphArray) {
  let obj = graphMaker(graphArray);
  let keys = Object.values(obj);
  
  let cyclical = false;
  let cycleKiller = [];
  keys.forEach( key => {
    let q = [key];

    while (q.length) {
      let key = q.shift();
      let val = obj[key];

      if (cycleKiller.includes(val)) {
        cyclical = true;
      }

      if (obj[key]) {
        q = q.concat(obj[key])
      }

      cycleKiller.push(key);
    }
  })

  return cyclical;
}

let graphArray = [[1, 0], [0, 2], [2, 1]];
hasCycle(graphArray)