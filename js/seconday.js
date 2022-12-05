'use strict'
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

function drawNum(gNums) {

    var curNumIdx = getRandomInt(0, gNums.length)
    // console.log('curNum is: ' , curNum)

    var drawnNum = gNums.splice(curNumIdx, 1)[0]
    // var curNum = gNums.length
    // gNums.pop()

    return drawnNum
}

function resetGnums() {
    var nums = []
    for (var i = 0; i < 16; i++) {
        nums[i] = i + 1
    }
    // console.log(nums)
    return nums
}