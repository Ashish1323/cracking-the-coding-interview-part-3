/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    var arr=path.split("/").filter(v => v);

    var res=[]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '..') {
            res.pop();
        } else if (arr[i] === '.') {
            continue;
        } else {
            res.push(arr[i])
        }
    }

    return '/' + res.join('/');

    return res
};