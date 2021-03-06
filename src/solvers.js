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
        j === i ? arr.push(1) : arr.push(0);
      }

      subroutine(rowsToGo-1, arr);
    }
  };

  subroutine(rowsToGo);

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  // console.log('Count: ' + count);
  return solution;
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var board = new Board({n: n});
  var counter = 0;

  var getSolutionCount = function(row) {
    if (row === n) {
      counter++;
      return;
    }

    for (var i = 0; i < n; i++) {
      board.togglePiece(row, i);

      if (!board.hasAnyRooksConflicts()) {
        getSolutionCount(row+1);
      }

      board.togglePiece(row, i);
    }
  };

  getSolutionCount(0);
  console.log('Number of solutions for ' + n + ' rooks:', counter);
  return counter;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = new Board({ n: n });

  var findSolution = function(row) {
    if (row === n) {
      return solution.rows().map(function(row) {
        return row.slice();
      });
    }

    for (var i = 0; i < n; i++) {
      solution.togglePiece(row, i);

      if (!solution.hasAnyQueensConflicts()) {
        var result = findSolution(row + 1);

        if (result) {
          return result;
        }
      }

      solution.togglePiece(row, i);
    }
  };

  solution = findSolution(0) || solution.rows();

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var board = new Board({n: n});
  var counter = 0;

  var getSolutionCount = function(row) {
    if (row === n) {
      counter++;
      return;
    }

    for (var i = 0; i < n; i++) {
      board.togglePiece(row, i);

      if (!board.hasAnyQueensConflicts()) {
        getSolutionCount(row+1);
      }

      board.togglePiece(row, i);
    }
  };

  getSolutionCount(0);

  console.log('Number of solutions for ' + n + ' queens:', counter);
  return counter;
};
