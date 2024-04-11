document.addEventListener("DOMContentLoaded", function () {
  createBoard();
  addKnight(0, 0);
});

document.querySelector(".Reset").addEventListener("click", () => {
  resetGame();
});

function getColor(row, col) {
  return (row + col) & 1 ? "black" : "white";
}

let KnightPosition = { row: 0, col: 0 };
let TotalMoves = 0;
let TotalVisited = new Set();

function createBoard() {
  const board = document.getElementById("board");

  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      const cell = document.createElement("div");
      cell.className = `cell ${getColor(row, col)}`;
      cell.setAttribute("data-row", row);
      cell.setAttribute("data-col", col);
      cell.addEventListener("click", Click);
      board.appendChild(cell);
    }
  }
}

function addKnight(row, col) {
  const knight = document.createElement("div");
  knight.className = "piece";
  knight.innerHTML = "&#9822;";
  const cell = document.querySelector(
    `.cell[data-row="${row}"][data-col="${col}"]`
  );

  const cellDimension = cell.getBoundingClientRect();
  // used to get details (dimensions of object)
  const knightSize = 30;
  const knightTop = cellDimension.top + (cellDimension.height - knightSize) / 2;
  const knightLeft =
    cellDimension.left + (cellDimension.width - knightSize) / 2;
  console.log(knightTop, knightLeft);

  KnightPosition.row = row;
  KnightPosition.col = col;
  cell.appendChild(knight);
  cell.classList.add("visited");
  TotalVisited.add(`${row},${col}`);
}

function Click() {
  const clickedCell = this;
  const knight = document.querySelector(".piece");

  const currentRow = KnightPosition.row;
  const currentCol = KnightPosition.col;
  const clickedRow = parseInt(clickedCell.dataset.row);
  const clickedCol = parseInt(clickedCell.dataset.col);

  const row = Math.abs(clickedRow - currentRow);
  const column = Math.abs(clickedCol - currentCol);

  if ((row === 2 && column === 1) || (row === 1 && column === 2)) {
    clickedCell.appendChild(knight);

    KnightPosition.row = clickedRow;
    KnightPosition.col = clickedCol;

    TotalMoves++;
    TotalVisited.add(`${clickedRow},${clickedCol}`);
    clickedCell.classList.add("visited");

    const currentPosition = KnightPosition;
    updateStats();

    if (checkGameCompletion()) {
      alert("Congratulations You Won ⭐");
      resetGame();
    }
  }
}

function updateStats() {
  const remainingCells = 64 - TotalVisited.size;
  document.getElementById(
    "TotalMoves"
  ).innerHTML = `Total Moves : ${TotalMoves}`;
  document.getElementById(
    "TotalVisited"
  ).innerHTML = `Total Visited : ${TotalVisited.size}`;
  document.getElementById(
    "remainingCells"
  ).innerHTML = `Remaining Cells : ${remainingCells}`;
}

function checkGameCompletion() {
  return TotalVisited.size === 64;
}

function resetGame() {
  document.getElementById("board").innerHTML = "";
  KnightPosition = { row: 0, col: 0 };
  TotalMoves = 0;
  TotalVisited.clear();
  createBoard();
  addKnight(0, 0);
  updateStats();
}
