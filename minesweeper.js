document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
var board = {
  cells: [
    {
      row: 0, col: 0, isMine: true, hidden: true
    },
    {
      row: 0, col: 1, isMine: false, hidden: true
    }, 
    {
      row: 0, col: 2, isMine: true, hidden: true
    }, 
    {
      row: 1, col: 0, isMine: false, hidden: true
    },
    {
      row: 1, col: 1, isMine: true, hidden: true
    }, 
    {
      row: 1, col: 2, isMine: false, hidden: true
    },
    {
      row: 2, col: 0, isMine: false, hidden: true
    }, 
    {
      row: 2, col: 1, isMine: true, hidden: true
    }, 
    {
      row: 2, col: 2, isMine: false, hidden: true
    }
  ]
}

function startGame () {

// In startGame, above lib.initBoard(), write a for loop. This should loop through the contents of board.cells. (Remember, board.cells is an array of objects.)
// The loop's only job should be to call countSurroundingMines once for each cell in board.cells. You'll need to pass each cell as an argument (the bit in the parentheses).
// Assign the result of countSurroundingMines to a property on each cell object. The new property should be called surroundingMines.

for (i = 0; i < board.cells.length; i++) { 
  board.cells[i].surroundingMines = countSurroundingMines(board.cells[i]);
}

// Don't remove this function call: it makes the game work!
  lib.initBoard()
}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {

  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
  //   lib.displayMessage('You win!')
}

function countSurroundingMines (cell) {
  var surrounding = lib.getSurroundingCells(cell.row, cell.col)
  var count = 0
  for (a = 0; a < surrounding.length; a++){
    if (surrounding[a].isMine === true) { 
      var count = count + 1
    }
  }
  return count
}

console.log(board)
console.log(board.cells.length)
console.log(board.cells[1])
console.log(board.cells[2])

