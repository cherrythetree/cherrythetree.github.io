// Variables
var skills = [
  "I develop games.",
  "I code visual effects.",
  "I model 3D meshes.",
  "I write narratives.",
  "I design user interface.",
  "I play the ukulele.",
  "I write songs.",
  "I love Desmos.",
  "I write poetry.",
  "I love the guitar.",
];

var isScrolled = false;
var selfie = document.getElementById("selfie");
var intro = document.querySelector("#intro");
var skill = document.querySelector("#skill");
var headings = document.getElementsByClassName("heading");
var paragraph = document.querySelector(".paragraph");
var skillIndex = 0;
var cloudNoise = document.getElementById("cloud-noise");
var cloudNoiseWidth = cloudNoise.width = 200;
var cloudNoiseHeight = cloudNoise.height = 200;
var cloudContext = cloudNoise.getContext("2d");

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
      delay: (_, i) => 400 + 20 * (skillDescription.length - i - 1)
    }).finished.then(() => {
      skill.innerHTML = "";

      setTimeout(changeSkill, 10);
    });
  })
}

// Begin
selfie.onmouseenter = () => {

}

selfie.onclick = () => {
  alert("Handler for `click` called.");
}

for (let i = 0; i < cloudNoiseWidth; i++) {
  for (let j = 0; j < cloudNoiseHeight; j++) {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    cloudContext.fillStyle = "rgb(" + red + "," + green + "," + blue + ")";
    cloudContext.fillRect(i, j, 1, 1);
  }
}

VANTA.FOG({
  el: "html",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 800.00,
  minWidth: 200.00,
  highlightColor: "#fca3b9",
  midtoneColor: "#fcd78f",
  lowlightColor: "#ef99b2",
  baseColor: "#e8e9ed",
  blurFactor: 0.66,
  speed: 5.00,
  zoom: 1.20
})

// VANTA.CLOUDS2({
//   el: "body",
//   mouseControls: false,
//   touchControls: false,
//   gyroControls: false,
//   minHeight: 800.00,
//   scale: 1.00,
//   speed: 1.00,
//   texturePath: cloudNoise.toDataURL()
// })

$(window).scroll(() => {
  let scrollTop = $(window).scrollTop();

  if (scrollY >= 100) {
    if (!isScrolled) {
      console.log("Bye!");
      isScrolled = true;
    }
  }
  else if (scrollTop != null) {
    if (isScrolled) {
      console.log("Hello!");
      isScrolled = false;
    }
  }
});

$(document).ready(() => {
  intro.innerHTML = intro.textContent.replace(/\S/g, "<span class='intro-letter'>$&</span>");

  anime({
    targets: '#intro .intro-letter',
    opacity: [0, 1],
    easing: "easeOutSine",
    duration: 150,
    delay: (_, i) => 20 * (i - 1)
  })

  paragraph.innerHTML = paragraph.textContent.replace(/\S/g, "<span class='paragraph-letter'>$&</span>");

  anime({
    targets: '.paragraph .paragraph-letter',
    opacity: [0, 1],
    easing: "easeOutSine",
    duration: 150,
    delay: (_, i) => 1000 + 20 * (i - 1)
  })

  changeSkill();
});