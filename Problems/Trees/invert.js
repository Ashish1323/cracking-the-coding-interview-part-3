/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if(!root) return root;
   var queue=[]
   queue.push(root)

   while(queue.length){
       var size=queue.length
       for(let i=0;i<size;i++){
           var currentNode=queue.shift()
           swap(currentNode)
           if(currentNode.left) queue.push(currentNode.left)
           if(currentNode.right) queue.push(currentNode.right)
       }
   }

   return root  
};

var swap=function(root){
   var tempNode=root.left
   root.left=root.right
   root.right=tempNode
}