class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

// function bfs(root) {
//     if (!root) return [];
//     let queue = [root];
//     let result = [[root.val]];

//     while(queue.length) {
//         let next = []; //=> [{val : 5, lef}]
//         let sub = []; // => [5, 15]
//         while(queue.length) {
//             let el = queue.shift(); //=> root;
//             if (el.left) {
//                 next.push(el.left);
//                 sub.push(el.left.val);
//             }
//             if (el.right) {
//                 next.push(el.right);
//                 sub.push(el.right.val);
//             }
//         }
//         queue = next;
//         result.push(sub);
//     }
//     return result;
// } 
// [[1], [5,16], [1,7,16]]


class BST {
   constructor() {
       this.root = null;
   }
   insert(value, root=this.root) {
       const node = new TreeNode(value)
       if (!this.root){
           this.root = node
       } else if (root.val > value) {
           if(!root.left) {
               root.left = node;
           } else {
               this.insert(value, root.left)
           }
        } else {
            if(!root.right) {
                root.right = node;
            } else {
                this.insert(value, root.right)
            }
       }
   }
   searchRecur(val, root=this.root){
       if(!root){
           return false
       }
       if(root.val === val){
           return true
       }

       if(root.val > val){
            return this.searchRecur(val, root.left)
       } else {
            return this.searchRecur(val, root.right)
       }
   }
   searchIter(val){
        let node = this.root;
        while(node){
            if (node.val === val){
                return true
            } else if (node.val > val) {
                node = node.left
            } else {
                node = node.right
            }
        }

       return false
   }
}

module.exports = {
    TreeNode,
    BST
};
