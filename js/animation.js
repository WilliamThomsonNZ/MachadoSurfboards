import { boardsArr } from "./boards.js";

const boardDisplay = document.querySelector(".board-img-container"),
  boardInfo = document.querySelector(".board-info-container"),
  speedStat = document.getElementById("speed-bar"),
  manStat = document.getElementById("man-bar"),
  steadyStat = document.getElementById("steady-bar"),
  boardStats = [speedStat, manStat, steadyStat];

//Change Board Image
export function changeBoard(count) {
  boardStats.forEach((stat) => {
    stat.style.width = "0";
  });
  setTimeout(() => {
    boardDisplay.style.opacity = "0";
    boardInfo.style.opacity = "0";
  }, 400);

  setTimeout(() => {
    boardsArr[count].boardChange();
  }, 600);
  setTimeout(() => {
    boardDisplay.style.opacity = "1";
    boardInfo.style.opacity = "1";
  }, 600);
}
//Change Board Stats
export function changeBoardStats() {}
