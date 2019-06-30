document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
var board = {
  cells: [
    {
      row: 0, col: 0, isMine: true, isMarked: false, hidden: true
    },
    {
      row: 0, col: 1, isMine: false, isMarked: false, hidden: true
    }, 
    {
      row: 0, col: 2, isMine: true, isMarked: false, hidden: true
    }, 
    {
      row: 1, col: 0, isMine: false, isMarked: false, hidden: true
    },
    {
      row: 1, col: 1, isMine: true, isMarked: false, hidden: true
    }, 
    {
      row: 1, col: 2, isMine: false, isMarked: false, hidden: true
    },
    {
      row: 2, col: 0, isMine: false, isMarked: false, hidden: true
    }, 
    {
      row: 2, col: 1, isMine: true, isMarked: false, hidden: true
    }, 
    {
      row: 2, col: 2, isMine: false, isMarked: false, hidden: true
    }
  ]
}

function startGame () {

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

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?

function checkForWin () {

//loop through board.cells

if (isBoardClear()) {
  lib.displayMessage('You win!')  
}

  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
  //   lib.displayMessage('You win!')
}

function countSurroundingMines (cell) {
  var surrounding = lib.getSurroundingCells(cell.row, cell.col)
  var count = 0

  for (let i = 0; i < surrounding.length; i++){
    if (surrounding[i].isMine === true) { 
      var count = count + 1
    }
  }
  return count
}

console.log(board.cells)
