import { boardsArr } from "./boards.js";
import { changeBoard, changeBoardStats } from "./animation.js";
//Scroll down button to boards section
document.getElementById("down-btn").addEventListener("click", () => {
  document.querySelector(".board-header").scrollIntoView();
});

//Board select buttons
const glazerBtn = document.getElementById("glazer"),
  goFishBtn = document.getElementById("go-fish"),
  seasideBtn = document.getElementById("seaside"),
  btnArr = [goFishBtn, glazerBtn, seasideBtn];

//Change the selected board link to grey
function checkSelected() {
  btnArr.forEach((button) => {
    if (button.classList.contains("selected-link")) {
      button.classList.remove("selected-link");
    }
  });
  btnArr[count].classList.add("selected-link");
}
//Adding events to buttons
//--------------------------------------------------change animation
btnArr.forEach((button, index) => {
  button.addEventListener("click", (e) => {
    changeBoard(index);
    count = index;
    checkSelected();
  });
});

//control arrows below board
const prevBoard = document.getElementById("left-arrow"),
  nextBoard = document.getElementById("right-arrow"),
  rotate = document.getElementById("rotate");

let count = 0;
let rotateCount = 0;
//--------------------------------------------------change animation
nextBoard.addEventListener("click", () => {
  count++;
  if (count > 2) {
    count = 0;
  }
  changeBoardStats();
  changeBoard(count);
  checkSelected();
});
//--------------------------------------------------change animation
prevBoard.addEventListener("click", () => {
  count--;
  if (count < 0) {
    count = 2;
  }
  changeBoard(count);
  checkSelected();
});

//rotate boards
rotate.addEventListener("click", () => {
  if (rotateCount == 0) {
    boardsArr[count].boardRotateF2B();
    rotateCount++;
  } else {
    rotateCount--;
    boardsArr[count].boardRotateB2F();
  }
});

// ---------------------------------------------------remove animation on small screen

const mq = window.matchMedia("(max-width:900px)");
if (mq.matches) {
  document.querySelector(".board-info").removeAttribute("data-aos");
  document.querySelector("#boardDisplay").removeAttribute("data-aos");
}

//else {
//   document.querySelector(".board-info").setAttribute("data-aos", "fade-left");
//   document.querySelector("#boardDisplay").setAttribute("data-aos", "fade-top");
// }

// const mq2 = window.matchMedia("(min-width:901px)");
// if (mq2.matches) {
//   document.querySelector(".board-info").setAttribute("data-aos", "fade-left");
//   document.querySelector("#boardDisplay").setAttribute("data-aos", "fade-top");
// }
