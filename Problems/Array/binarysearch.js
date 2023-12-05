var bs = function(num, target) {
    var left = 0;
    var right = num.length - 1;

    while (left <= right) {
        var mid = Math.floor((left + right) / 2);
        if (num[mid] === target) {
            return mid;
        } else if (num[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;
};


var arr=[1,3,5,12,69]
var target=5

console.log(bs(arr,target))

