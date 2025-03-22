// Variables
var skills = [
  "I develop games.",
  "I code visual effects.",
  "I model 3D meshes.",
  "I design user interface.",
  "I write narratives.",
  "I play the ukulele.",
  "I love messing with integrals on Desmos.",
  "I write songs.",
  "I love the guitar.",
  "I write poetry."
];

var isScrolled = false;
var intro = document.querySelector("#intro");
var skill = document.querySelector("#skill");
var headings = document.getElementsByClassName("heading");
var paragraph = document.querySelector(".paragraph");
var skillIndex = 0;
var star = document.getElementById("star");
var starDegrees = 0;
var starSpeed = 1;
var starAudio = new Audio('https://raw.githubusercontent.com/cherrythetree/cherrythetree.github.io/refs/heads/main/_audio/pulsing-buzz.wav');
var starTimestamp;

// Functions
const lerp = (a, b, c) => a + (b - a) * c;

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

  if (starTimestamp != null) {
    let alpha = (document.timeline.currentTime - starTimestamp) / 2000;

    if (alpha <= 1) {
      starSpeed = lerp(1, -5, -(alpha ** 2) + 2 * alpha);
    } else {
      starSpeed = -5;
    }
  }

  starDegrees += starSpeed;
  starDegrees %= 360;

  $("#star").css("transform", "rotate(" + starDegrees + "deg)");
}

// Begin
star.onclick = () => {
  if (starTimestamp == null) {
    starAudio.currentTime = 0;
    starAudio.play();
    starTimestamp = document.timeline.currentTime;

    anime({
      targets: 'html',
      opacity: [1, 0],
      easing: "easeOutSine",
      duration: 200,
      delay: 2700
    })

    setTimeout(() => {
      window.location = "https://www.desmos.com/calculator/ia9ry4ldhq";
    }, 3000)
  }
}

rotateStar(0);

VANTA.FOG({
  el: "html",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 3000.00,
  minWidth: 200.00,
  highlightColor: "#fca3b9",
  midtoneColor: "#fcd78f",
  lowlightColor: "#ef99b2",
  baseColor: "#e8e9ed",
  blurFactor: 0.66,
  speed: 5.00,
  zoom: 1.20
})

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

intro.innerHTML = intro.textContent.replace(/\S/g, "<span class='intro-letter'>$&</span>");
paragraph.innerHTML = paragraph.textContent.replace(/\S/g, "<span class='paragraph-letter'>$&</span>");

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
    targets: '.paragraph .paragraph-letter',
    opacity: [0, 1],
    easing: "easeOutSine",
    duration: 150,
    delay: (_, i) => 1000 + 20 * (i - 1)
  });

  changeSkill();
});