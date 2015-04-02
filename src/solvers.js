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

window.findNRooksSolution = function(n, row) {
  var solution = [];
  var count = 0;

  var subroutine = function(n, row) {
    if (row) {
      solution.push(row);
      var board = new Board(solution);

      if (board.hasAnyColConflicts()) {
        solution.pop();
        return;
      }
    }

    if (solution.length === n) return;

    // Create all the possible variations of placing 1 rook on the row
    // Add each variation to the board and test for column conflicts
    // If there is a conflict, remove the variation and try the next variation
    for (var i = 0; i < n; i++) {
      var arr = [];

      for (var j = 0; j < n; j++) {
        j === i ? arr.push(1) : arr.push(0);
      }

      subroutine(n, arr);
      count++;
    }
  };

  subroutine(n, row);

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  console.log('Count: ' + count);
  return solution;
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  // iterate over n times
    // each time, generate a new variation of the row
    // pass each variation into findNRooksSolution()
    // store result from findNRooksSolution() in result array
 // return result.length
  var solutions = [];

  for (var i = 0; i < n; i++) {
    var row = [];

    for (var j = 0; j < n; j++) {
      j === i ? row.push(1) : row.push(0);
    }

    console.log('row being passed to findNRooksSolution: ' + row);
    solutions.push(findNRooksSolution(n, row));
  }

  console.log('Number of solutions for ' + n + ' rooks:', solutions.length);
  return solutions.length;
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
