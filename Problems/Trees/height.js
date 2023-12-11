var maxDepth = function(root) {
    if(!root) return 0;
    var height=0
    var queue=[]
    queue.push(root)

    while(queue.length){
        var size=queue.length
        for(let i=0;i<size;i++){
            var currentNode=queue.shift()
            if(i===size-1){
                height+=1;
            }
            if(currentNode.left){
                queue.push(currentNode.left)
            }
            if(currentNode.right){
                queue.push(currentNode.right)
            }
        }
    }
    return height    
};