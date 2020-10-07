//Board descriptions
const goFishDesc =
    "“No matter what the waves are like, whether it’s Kelly’s wave or a beach break in France, I just love how speedy and drivey it is, and I love the unique lines it lets me draw.”",
  glazerDesc =
    "“I like to think of the guy at VG’s Donuts that glazes the donuts. Pretty important dude. Kinda makes or breaks a donut. Easy to ride for all levels and easy to ride in all types of waves.”",
  seasideDesc =
    "“So the Seaside is about refining… less area in the tail,narrowing the tips of the swallow, creating more curve and narrowing the nose”";

//Boards Class
class Board {
  constructor(
    name,
    wHeight,
    desc,
    speed,
    manuever,
    steady,
    imgFront,
    imgBack,
    link
  ) {
    this.name = name;
    this.wHeight = wHeight;
    this.desc = desc;
    this.speed = speed;
    this.manuever = manuever;
    this.steady = steady;
    this.imgFront = imgFront;
    this.imgBack = imgBack;
    this.link = link;
  }
  boardChange() {
    document.getElementById("bg-text").textContent = this.name;
    document.getElementById("board-img-display").src = this.imgFront;
    document.getElementById("board-name").textContent = this.name;
    document.getElementById("wave-size").textContent = `${this.wHeight} foot`;
    document.getElementById("board-desc").textContent = this.desc;
    document.getElementById("speed-bar").style.width = this.speed;
    document.getElementById("man-bar").style.width = this.manuever;
    document.getElementById("steady-bar").style.width = this.steady;

    console.log(this);
  }
  boardRotateF2B() {
    document.getElementById("board-img-display").src = this.imgBack;
  }
  boardRotateB2F() {
    document.getElementById("board-img-display").src = this.imgFront;
  }
}

const goFish = new Board(
  "Go Fish",
  "1 - 5",
  goFishDesc,
  "80%",
  "50%",
  "40%",
  "imgs/boards/gofish-front.png",
  "imgs/boards/gofish-back.png",
  "https://firewiresurfboards.com/products/go-fish?sku=LGFS-501-3-3WH"
);
const glazer = new Board(
  "Glazer",
  "2 - 8",
  glazerDesc,
  "60%",
  "70%",
  "50%",
  "imgs/boards/glazer-Front-resize2.png",
  "imgs/boards/glazer Back.png",
  "https://firewiresurfboards.com/products/glazer"
);

const seaside = new Board(
  "Seaside",
  "1 - 8",
  seasideDesc,
  "70%",
  "60%",
  "40%",
  "imgs/boards/seaside-front-resize2.png",
  "imgs/boards/seaside-back-resize.png",
  "https://firewiresurfboards.com/products/seaside"
);

export const boardsArr = [goFish, glazer, seaside];
