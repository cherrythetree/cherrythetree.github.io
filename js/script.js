// Variables
var skills = [
  "I develop games in my free time.",
  "I code visual effects.",
  "I model 3D meshes.",
  "I design user interface.",
  "I write narratives.",
  "I play the ukulele.",
  "I love messing around on Desmos.",
  "I write song lyrics.",
  "I really love the guitar.",
  "I write all things poetry."
];

var isScrolled = false;
var intro = document.querySelector("#intro");
intro.innerHTML = intro.textContent.replace(/\S/g, "<span class='intro-letter'>$&</span>");

var skill = document.querySelector("#skill");
var headings = document.getElementsByClassName("heading");
var middle = document.querySelector("#middle");
middle.innerHTML = middle.textContent.replace(/\S/g, "<span class='middle-letter'>$&</span>");

var conclusion = document.querySelector("#conclusion");
conclusion.innerHTML = conclusion.textContent.replace(/\S/g, "<span class='conclusion-letter'>$&</span>");

var skillIndex = 0;
var star = document.getElementById("star-image");

// Functions
function changeSkill() {
  let skillDescription = skills[skillIndex];
  let skillHTML = "";

  skillIndex++;

  if (skillIndex >= skills.length) {
    skillIndex = 0;
  }

  for (let i = 0; i < skillDescription.length; i++) {
    skillHTML += `<span class='skill-letter' style='opacity:0;'>${skillDescription[i]}</span>`
  }

  skill.innerHTML = skillHTML;

  anime({
    targets: '.skill-letter',
    opacity: [0, 1],
    easing: "easeOutSine",
    duration: 150,
    delay: (_, i) => 500 + 20 * (i - 1)
  }).finished.then(() => {
    anime({
      targets: '.skill-letter',
      opacity: [1, 0],
      duration: 100,
      easing: "easeOutExpo",
      delay: (_, i) => 600 + 20 * (skillDescription.length - i - 1)
    }).finished.then(() => {
      setTimeout(changeSkill, 10);
    });
  })
}

function rotateStar() {
  requestAnimationFrame(rotateStar);

  $("#star-image").css("transform", "rotate(" + (0.1 * document.timeline.currentTime) % 360 + "deg)");
}

// Begin
VANTA.CLOUDS({
  el: "#background",
  mouseControls: false,
  touchControls: false,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  backgroundColor: "#c72121",
  skyColor: "#a71818",
  cloudColor: "#fcfcfc",
  cloudShadowColor: "#ffffff",
  sunColor: "#ffffff",
  sunGlareColor: "#cc4a52",
  sunlightColor: "#db3737",
  speed: 1.90
})

$(document).ready(() => {  
  new WOW().init();

  anime({
    targets: 'html',
    opacity: [0, 1],
    easing: "easeInCubic",
    duration: 1500,
    delay: 500
  }).finished.then(() => {
    anime({
      targets: '#intro .intro-letter',
      opacity: [0, 1],
      easing: "easeOutSine",
      duration: 150,
      delay: (_, i) => 20 * (i - 1)
    });

    anime({
      targets: '#middle .middle-letter',
      opacity: [0, 1],
      easing: "easeOutSine",
      duration: 150,
      delay: (_, i) => 1000 + 20 * (i - 1)
    }).finished.then(() => {
      anime({
        targets: '#conclusion .conclusion-letter',
        opacity: [0, 1],
        easing: "easeOutSine",
        duration: 150,
        delay: (_, i) => 20 * (i - 1)
      });
    });

    changeSkill();
  });

  rotateStar();
});