let i = 0;

let box1 = document.getElementById("Tiger1");
let box2 = document.getElementById("Tiger2");
let box3 = document.getElementById("Tiger3");
let box4 = document.getElementById("Tiger4");
let box5 = document.getElementById("Tiger5");
let box6 = document.getElementById("Tiger6");
let a1 = document.querySelector(".a1");
let a2 = document.querySelector(".a2");
let a3 = document.querySelector(".a3");
let a4 = document.querySelector(".a4");
let a5 = document.querySelector(".a5");
let a6 = document.querySelector(".a6");
let info = document.getElementById("info");

a1.onclick = function () {
  box1.style.opacity = 1;
  box2.style.opacity = 0;
  box3.style.opacity = 0;
  box4.style.opacity = 0;
  box5.style.opacity = 0;
  box6.style.opacity = 0;
  info.innerHTML = "1st Image of Tiger";
  i = 0;
};

a2.onclick = function () {
  box1.style.opacity = 0;
  box2.style.opacity = 1;
  box3.style.opacity = 0;
  box4.style.opacity = 0;
  box5.style.opacity = 0;
  box6.style.opacity = 0;
  info.innerHTML = "2nd Image of Tiger";
  i = 1;
};

a3.onclick = function () {
  box1.style.opacity = 0;
  box2.style.opacity = 0;
  box3.style.opacity = 1;
  box4.style.opacity = 0;
  box5.style.opacity = 0;
  box6.style.opacity = 0;
  info.innerHTML = "3rd Image of Tiger";
  i = 2;
};

a4.onclick = function () {
  box1.style.opacity = 0;
  box2.style.opacity = 0;
  box3.style.opacity = 0;
  box4.style.opacity = 1;
  box5.style.opacity = 0;
  box6.style.opacity = 0;
  info.innerHTML = "4th Image of Tiger";
  i = 3;
};

a5.onclick = function () {
  box1.style.opacity = 0;
  box2.style.opacity = 0;
  box3.style.opacity = 0;
  box4.style.opacity = 0;
  box5.style.opacity = 1;
  box6.style.opacity = 0;
  info.innerHTML = "5th Image of Tiger";
  i = 4;
};

a6.onclick = function () {
  box1.style.opacity = 0;
  box2.style.opacity = 0;
  box3.style.opacity = 0;
  box4.style.opacity = 0;
  box5.style.opacity = 0;
  box6.style.opacity = 1;
  info.innerHTML = "6th Image of Tiger";
  i = 5;
};

document.addEventListener("keydown", (e) => {
  if (e.keyCode == 37) {
    right();
  }
});

document.addEventListener("keydown", (e) => {
  if (e.keyCode == 39) {
    right();
  }
});

function right() {
  if (i == 0) {
    box1.style.opacity = 1;
    box2.style.opacity = 0;
    box3.style.opacity = 0;
    box4.style.opacity = 0;
    box5.style.opacity = 0;
    box6.style.opacity = 0;
    info.innerHTML = "1st Image of Tiger";
    i++;
  } else if (i == 1) {
    box1.style.opacity = 0;
    box2.style.opacity = 1;
    box3.style.opacity = 0;
    box4.style.opacity = 0;
    box5.style.opacity = 0;
    box6.style.opacity = 0;
    info.innerHTML = "2nd Image of Tiger";
    i++;
  } else if (i == 2) {
    box1.style.opacity = 0;
    box2.style.opacity = 0;
    box3.style.opacity = 1;
    box4.style.opacity = 0;
    box5.style.opacity = 0;
    box6.style.opacity = 0;
    info.innerHTML = "3rd Image of Tiger";
    i++;
  } else if (i == 3) {
    box1.style.opacity = 0;
    box2.style.opacity = 0;
    box3.style.opacity = 0;
    box4.style.opacity = 1;
    box5.style.opacity = 0;
    box6.style.opacity = 0;
    info.innerHTML = "4th Image of Tiger";
    i++;
  } else if (i == 4) {
    box1.style.opacity = 0;
    box2.style.opacity = 0;
    box3.style.opacity = 0;
    box4.style.opacity = 0;
    box5.style.opacity = 1;
    box6.style.opacity = 0;
    info.innerHTML = "5th Image of Tiger";
    i ++;
  } else if (i == 5) {
    box1.style.opacity = 0;
    box2.style.opacity = 0;
    box3.style.opacity = 0;
    box4.style.opacity = 0;
    box5.style.opacity = 0;
    box6.style.opacity = 1;
    info.innerHTML = "6th Image of Tiger";
    i = 0;
  }
}

function left() {
  if (i == 0) {
    box1.style.opacity = 0;
    box2.style.opacity = 0;
    box3.style.opacity = 0;
    box4.style.opacity = 0;
    box5.style.opacity = 0;
    box6.style.opacity = 1;
    info.innerHTML = "1st Image of Tiger";
    i++;
  } else if (i == 1) {
    box1.style.opacity = 0;
    box2.style.opacity = 0;
    box3.style.opacity = 0;
    box4.style.opacity = 0;
    box5.style.opacity = 1;
    box6.style.opacity = 0;
    info.innerHTML = "2nd Image of Tiger";
    i++;
  } else if (i == 2) {
    box1.style.opacity = 0;
    box2.style.opacity = 0;
    box3.style.opacity = 0;
    box4.style.opacity = 1;
    box5.style.opacity = 0;
    box6.style.opacity = 0;
    info.innerHTML = "3rd Image of Tiger";
    i++;
  } else if (i == 3) {
    box1.style.opacity = 0;
    box2.style.opacity = 0;
    box3.style.opacity = 1;
    box4.style.opacity = 0;
    box5.style.opacity = 0;
    box6.style.opacity = 0;
    info.innerHTML = "4th Image of Tiger";
    i++;
  } else if (i == 4) {
    box1.style.opacity = 0;
    box2.style.opacity = 1;
    box3.style.opacity = 0;
    box4.style.opacity = 0;
    box5.style.opacity = 0;
    box6.style.opacity = 0;
    info.innerHTML = "5th Image of Tiger";
    i ++;
  } else if (i == 5) {
    box1.style.opacity = 1;
    box2.style.opacity = 0;
    box3.style.opacity = 0;
    box4.style.opacity = 0;
    box5.style.opacity = 0;
    box6.style.opacity = 0;
    info.innerHTML = "6th Image of Tiger";
    i = 0;
  }
}
