// 19- 1 + 81 = 82 -> 64 + 4 = 68 -> 36 + 64 -> 100 -> 1 + 0 + 0


function isHappyNumber(num){
    var set= new Set()

    while(num!=1 && !set.has(num)){
        set.add(num)
        num=squareOfNumber(num)
    }

    return num===1;
}

function squareOfNumber(n){
    var currentNumber=n.toString().split('')
    return currentNumber.reduce((sum, digit) => sum + digit**2, 0)
}

console.log(isHappyNumber(2))

