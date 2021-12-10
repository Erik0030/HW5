var N = 3;

// This function stores transpose
// of A in B
function transpose(x, y) {
  var i, j;
  for (i = 0; i < N; i++) for (j = 0; j < N; j++) B[i][j] = A[j][i];
}

// Driver code

var x = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

var y = Array(4).fill(0);
for (let i = 0; i < N; i++) {
  B[i] = new Array(N);
}

transpose(x, y);

document.write("Result matrix is");
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) document.write(B[i][j] + " ");
  document.write("<br/>");
}
