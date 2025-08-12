let gameSeq = [];
let userseq = [];

let btns = ["green", "red", "yellow", "blue"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
  if (started == false) {
    console.log("game started");
    // body.style.backgroundColor="white";    // extra  ......
    started = true;
    levelup();
  }
});

function gameflash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 240);
}

function userflash(btn) {
  btn.classList.add("userflash");
  setTimeout(function () {
    btn.classList.remove("userflash");
  }, 240);
}
//   game btn press func
function levelup() {
  userseq = [];    // empty after game new flash 
  level++;
  h2.innerText = `level ${level}`;
  let randIndex = Math.floor(Math.random() * 3);   // generate random number 0 to 3 for index
  let randcolor = btns[randIndex];   
  let randbtn = document.querySelector(`.${randcolor}`);
  gameflash(randbtn);
  // console.log(randIndex);
  // console.log(randcolor);
  // console.log(randbtn);
  gameSeq.push(randcolor);
  console.log(gameSeq); // for game sequence value show
}

// func for check ans usercolor or game color
function checkans(idx) {
  if (userseq[idx] === gameSeq[idx]) {
    if (userseq.length == gameSeq.length) {
      setTimeout(levelup, 1000);
      // levelup();
    }
    // console.log("same value");
  } else {
    h2.innerHTML = `Game Over! Your Score was<b> ${
      level * 10
    } </b><br> Press any key to start. `; //${level}
    document.querySelector("body").style.backgroundColor = "red"; // game over warning

    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "#87ceeb"; // returen after 1 mili second to first stage red to ehite
    }, 150);

    reset();
  }
}

// user btn press
function btnpress() {
  // console.log(this);  //for usr input out put
  let btn = this;
  userflash(btn);

  let usercolor = btn.getAttribute("id");
  userseq.push(usercolor);

  checkans(userseq.length - 1);
}

let allbtns = document.querySelectorAll(".btn");
for (btn of allbtns) {
  btn.addEventListener("click", btnpress);
}

function reset() {
  started = false;
  gameSeq = [];
  userseq = [];
  level = 0;
  

}

// adding song on click button
// let btn1=document.querySelector(".green");
// let btn2=document.querySelector(".green");
// let btn3=document.querySelector(".green");
// let btn4=document.querySelector(".green");

// btn1.addEventListener("click", function(){
//   let audio = new Audio("songs/song 4.mp3"); 
//     audio.play(); // Play the music 
// });


// made with love pilu bhai 


let songs = document.querySelectorAll("audio");

//play first song on button click
document.querySelector(".green").addEventListener("click", function () {
    songs[0].play(); // plays "bit 1.mp3"
});

document.querySelector(".red").addEventListener("click", function () {
    songs[1].play(); // plays "bit 2.mp3"
});

document.querySelector(".yellow").addEventListener("click", function () {
    songs[2].play(); // plays "bit 3.mp3"
});

document.querySelector(".blue").addEventListener("click", function () {
    songs[3].play(); // plays "bit 4.mp3"
});

