'use strict'
console.log('hi')

var gNextNum = 1
var gNums = resetGnums()
var looplength 
console.log(gNums)

// renderBoard()

function onCellClicked(elTd,num){
    
    if(num === gNextNum){
        elTd.classList.add('clicked')
       gNextNum++
        

    }


}
function onEasy(){
    var looplength = Math.sqrt(16)
    renderBoard()
}
function onMidium(){
    var looplength = Math.sqrt(32)
    renderBoard()
}
function onHard(){
    var looplength = Math.sqrt(64)
    renderBoard()
}

function renderBoard() {
    var strHTML = ''
    var looplength = Math.sqrt(gNums.length)

    for (var i = 0; i < looplength; i++) {
        strHTML += '<tr>'
        for (var j = 0; j < looplength; j++) {
            var curNum = drawNum(gNums)
            var cellData = 'data-i="' + i + '" data-j="' + j + '"'
            
            console.log(curNum)
            strHTML+= `<td ${cellData} onclick="onCellClicked(this,${curNum})">
            ${curNum} 
            </td>`

        }
        strHTML += '</tr>\n'
    }
    console.log(strHTML)
    document.querySelector('.board').innerHTML = strHTML
}



