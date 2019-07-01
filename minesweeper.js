document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
// var board = {
//   cells: [
//     {
//       row: 0, col: 0, isMine: true, isMarked: false, hidden: true
//     },
//     {
//       row: 0, col: 1, isMine: false, isMarked: false, hidden: true
//     }, 
//     {
//       row: 0, col: 2, isMine: true, isMarked: false, hidden: true
//     }, 
//     {
//       row: 1, col: 0, isMine: false, isMarked: false, hidden: true
//     },
//     {
//       row: 1, col: 1, isMine: true, isMarked: false, hidden: true
//     }, 
//     {
//       row: 1, col: 2, isMine: false, isMarked: false, hidden: true
//     },
//     {
//       row: 2, col: 0, isMine: false, isMarked: false, hidden: true
//     }, 
//     {
//       row: 2, col: 1, isMine: true, isMarked: false, hidden: true
//     }, 
//     {
//       row: 2, col: 2, isMine: false, isMarked: false, hidden: true
//     }
//   ]
// }

function Board() {
  this.cells = []
}

var board = new Board

function setupBoard(dimension) {

  let n = dimension

  for (let row = 0; row < n; row++) {
    for (let column = 0; column < n; column++){
      var newCell = {};
      newCell.hidden = true;
      newCell.isMine = Math.random() < 0.3;
      newCell.isMarked = false;
      newCell.row = row;
      newCell.col = column;
      board.cells.push(newCell);
    }
  }

}

setupBoard(6)

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

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.

function countSurroundingMines (cell) {
  var surrounding = lib.getSurroundingCells(cell.row, cell.col)
  var count = 0
  console.log(surrounding)

  for (let i = 0; i < surrounding.length; i++){
    console.log("i " + i)
    if (surrounding[i].isMine === true) { 
     count += 1
     console.log(count)
    }
  }
  
  return count
}

console.log(board)

