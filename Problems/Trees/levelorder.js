var levelOrder = function(root) {
    if(!root) return []

    var res=[]
    var queue=[]
    var level=[]
    queue.push(root)

    while(queue.length>0){
        var size=queue.length
        for(let i=0;i<size;i++){
            var currentNode=queue.shift()
            level.push(currentNode.val)
            if(size-1==i){
                res.push(level)
                level=[]
            }
        if(currentNode.left){
            queue.push(currentNode.left)
        }
        if(currentNode.right){
            queue.push(currentNode.right)
        }
        }
    }

    return res;
};