document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!

// function Board() {
//   this.cells = []
// }

// var board = new Board

var board = {}

function setupBoard(dimension) {
  
  board.cells= []
  let n = dimension

  for (let row = 0; row < n; row++) {
    for (let column = 0; column < n; column++){
      var newCell = {};
      newCell.hidden = true;
      newCell.isMine = Math.random() < 0.25;
      newCell.isMarked = false;
      newCell.row = row;
      newCell.col = column;
      board.cells.push(newCell);
    }
  }

}

//  setupBoard(6)

function startGame () { 
  setupBoard(6)
document.addEventListener("click", checkForWin);
document.addEventListener("contextmenu", checkForWin);

// For loop calls countSurroundingMines once for each cell in board.cells. 
// Assigns the result of countSurroundingMines to property surroundingMines on each cell.

for (let i = 0; i < board.cells.length; i++) { 
  board.cells[i].surroundingMines = countSurroundingMines(board.cells[i]);
}

// Don't remove this function call: it makes the game work!
  lib.initBoard()
}


function isBoardClear () {
  for (let i = 0; i < board.cells.length; i++) {
    var hasUnmarkedMines = board.cells[i].isMine && !board.cells[i].isMarked;
    var hasUnrevealedNonMines = !board.cells[i].isMine && board.cells[i].hidden;

    if (hasUnmarkedMines || hasUnrevealedNonMines){
      return false;
    }
  }
  return true;
}

function checkForWin () {
  if (isBoardClear()) {
    lib.displayMessage('You win!')  
  }
}

function countSurroundingMines (cell) {
  var surrounding = lib.getSurroundingCells(cell.row, cell.col)
  var count = 0

  for (let i = 0; i < surrounding.length; i++){
    if (surrounding[i].isMine === true) { 
     count += 1
    }
  }
  
  return count
}

window.onload=function(){
  var boardResetButton = document.getElementById("resetButton")
  boardResetButton.addEventListener("click", resetBoard)
}

function resetBoard () {
  document.querySelector(".board").innerHTML= ''
  var board = {}
  startGame()
  };