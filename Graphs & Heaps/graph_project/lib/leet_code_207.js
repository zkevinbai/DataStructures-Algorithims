// View the full problem and run the test cases at:
//  https://leetcode.com/problems/course-schedule/

// >1> max length must be >= num courses
// >2> no cycles allowed in prerequisites

function canFinish(numCourses, prerequisites) {
    if (hasCycle(prerequisites)){
        return false;
    } else if (numCourses > maxLength(prerequisites)) {
        return false;
    } else {
        return true;
    }
}

function maxLength(graphArray){
  let obj = {};
  graphArray.forEach(node => {
    obj[node[0]] = node[1];
  })

  let keys = Object.keys(obj);
  let node = keys.shift();
  let nextNode = obj[node];
  let count = 1;

  while (obj[node]) {
    node = obj[nextNode];
    count += 1;
  }

  return count + 1;
}

function hasCycle(graphArray){
  let obj = {};
  let visited = {};
  graphArray.forEach(node => {
    obj[node[0]] = node[1];
  })
  let keys = Object.keys(obj);
  let key;
  for (let i = 0; i < keys.length; i++) {
    key = keys[i];

    let corrVal = obj[key];
    let corrValVal = obj[corrVal];

    if (parseInt(key) === corrValVal) {
      return true;
    } else {
      visited[key] = true;
    }
  }
  return false;
}

// let arr = [[1, 0], [0, 1]];
// hasCycle(arr);
// arr = [[1, 3], [0, 1]];
