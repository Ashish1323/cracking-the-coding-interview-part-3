var isSameTree = function(p, q) {
    if(!p && !q) return true
    else if(!p || !q) return false
    var queueP=[]
    var queueQ=[]

    queueP.push(p)
    queueQ.push(q)

    while(queueP.length && queueQ.length){
        var sizeQ=queueQ.length
        var sizeP=queueP.length
        for(let i=0;i<sizeQ && i<sizeP ; i++){
            var currentNodeP=queueP.shift()
            var currentNodeQ=queueQ.shift()

            if(currentNodeP.val!=currentNodeQ.val) return false
            if(currentNodeP.left && currentNodeQ.left){
                queueP.push(currentNodeP.left)
                queueQ.push(currentNodeQ.left)
            }
            else if(currentNodeP.left || currentNodeQ.left) return false
            if(currentNodeP.right && currentNodeQ.right){
                queueP.push(currentNodeP.right)
                queueQ.push(currentNodeQ.right)
            }
            else if(currentNodeP.right || currentNodeQ.right) return false
        }
    }
    return true;
};