'use strict'

var gCurrentNum
var gSize = 25  // 16, 25, 36
var gNums
var gIsGameOn
var gOptions = 3
var gInterval
var gTimer


function init() {
    startGame()
}


function startGame() {

    clearInterval(gInterval)
    // gIsGameOn = true
    gCurrentNum = 1
    gTimer = 0
    var elTimer = document.querySelector('.timer')
    elTimer.innerText = '0.000'
    placeBoard()
    gNums = createNums(gSize)
    renderBoard()

}


function renderBoard() {
    var length = Math.sqrt(gSize);
    var strHTML = ''

    for (var i = 0; i < length; i++) {
        strHTML += '<tr>'
        for (var j = 0; j < length; j++) {
            var cell = drawNum(gNums)
            strHTML += `<td onclick="checkNum(this)">${cell}</td>`
        }
        strHTML += '</tr>'
    }
    var elBoard = document.querySelector('.board')
    elBoard.innerHTML = strHTML

}

function placeBoard() {

    if (document.getElementById('Easy').checked) {
        gSize = 16
    }
    if (document.getElementById('Medium').checked) {
        gSize = 25
    }

    if (document.getElementById('Hard').checked) {
        gSize = 36
    }
}

function checkNum(elCell) {
    var num = elCell.innerText;
    console.log(num)
    if (+num === gCurrentNum) {
        if (gCurrentNum === 1) {
            clearInterval(gInterval)
            gInterval = setInterval(showTime, 10);
        }
        if (gCurrentNum === gSize) {
            clearInterval(gInterval)
            // gIsGameOn = false
            var elTimer = document.querySelector('.timer')
            elTimer.innerText = 'You Won! It took you ' + elTimer.innerText + ' Sec'
        }
        elCell.classList.toggle('occupied')
        gCurrentNum++
    }

}

function showTime() {
    gTimer += 0.01
    var elTimer = document.querySelector('.timer')
    elTimer.innerText = Math.floor(gTimer * 1000) / 1000
}

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