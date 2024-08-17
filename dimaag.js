const boxes = document.querySelectorAll(".grid");
const newGame = document.getElementById("newGame");
const stat = document.getElementById("stat");
const winner = document.getElementById("winner");
let cnt = 0;
winner.style.visibility = "hidden";
let run = true;
let turno = true;
let player = "O";
stat.textContent = `${player}'s turn`;
const victory = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

boxes.forEach((box) => {
  box.addEventListener("click", BoxClicked);
});

function BoxClicked() {
  if (run && this.textContent === "") {
    if (turno) {
      player = "O";
      this.textContent = player;
      stat.textContent = `X's turn`;
      turno = false;
    } else {
      player = "X";
      this.textContent = player;
      stat.textContent = `O's turn`;
      turno = true;
    }
    cnt++;
    check();
  }
}

function check() {
  for (let victor of victory) {
    const cell1 = boxes[victor[0]].textContent;
    const cell2 = boxes[victor[1]].textContent;
    const cell3 = boxes[victor[2]].textContent;

    if (
      cell1 === cell2 &&
      cell2 === cell3 &&
      cell1 !== "" &&
      cell2 !== "" &&
      cell3 !== ""
    ) {
      run = false;
      winner.textContent = `${player} WINS !!`;
      winner.style.visibility = "visible";
      newGame.textContent = "New Game";
      stat.style.visibility = "hidden";
      break;
    }
  }
  if (cnt === 9) {
    run = false;
    winner.textContent = `DRAW !!`;
    winner.style.visibility = "visible";
    stat.style.visibility = "hidden";
    newGame.textContent = "New Game";
  }
}

newGame.addEventListener("click", reset);

function reset() {
  run = true;
  boxes.forEach((box) => {
    box.textContent = "";
  });
  winner.style.visibility = "hidden";
  stat.style.visibility = "visible";
  newGame.textContent = "Reset";
  cnt = 0;
}
