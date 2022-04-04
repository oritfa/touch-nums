'use strict'




function createNums(maxNum) {
    var nums = []
    for (var i = 1; i < maxNum + 1; i++) {
        nums.push(i)
    }
    return nums
}

function drawNum(array) {
    var idx = getRandomInt(0, array.length)
    var num = array[idx]
    array.splice(idx, 1)
    return num
}



function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
