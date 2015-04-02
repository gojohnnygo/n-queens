/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

window.findNRooksSolution = function(n) {
  var solution = [];
  var rowsToGo = n;

  var subroutine = function(rowsToGo, row) {
    if (row) {
      solution.push(row);
      var board = new Board(solution);
      if (board.hasAnyColConflicts()) {
        solution.pop();
        return;
      }
    }

    // Create all the possible variations of placing 1 rook on the row
    // Add each variation to the board and test for column conflicts
    // If there is a conflict, remove the variation and try the next variation
    for (var i = 0; i < n; i++) {
      var arr = [];
      for (var j = 0; j < n; j++) {
        if (j === i) {
          arr.push(1);
        } else {
          arr.push(0);
        }
      }
      subroutine(rowsToGo-1, arr);
    }
  };

  subroutine(rowsToGo);

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
