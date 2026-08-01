const aboutMe = [
  "I write stories, songs, and poems.",
  "I play the guitar.",
  "I mess around on Desmos for fun.",
  "I code visual effects.",
  "I love 3D modeling.",
  "I really adore the ukulele.",
  "I think conlanging is interesting.",
  "I develop game projects in my free time.",
  "I am not, therefore I am not thinking.",
  "Emmy Noether is my favorite mathematician."
];

const intro = document.querySelector("#intro");
intro.innerHTML = intro.textContent.replace(/\S/g, "<span class='intro-letter'>$&</span>");

const aboutMe = document.querySelector("#aboutMe");
const headings = document.getElementsByClassName("heading");

const conclusion = document.querySelector("#conclusion");
conclusion.innerHTML = conclusion.textContent.replace(/\S/g, "<span class='conclusion-letter'>$&</span>");

const star = document.getElementById("star-image");

let isScrolled = false;
let aboutMeIndex = 0;

function changeAboutMe() {
  let aboutMeDescription = aboutMe[aboutMeIndex];
  let aboutMeHTML = "";

  aboutMeIndex++;
  aboutMeIndex %= aboutMe.length;

  for (let i = 0; i < aboutMeDescription.length; i++) {
    aboutMeHTML += `<span class='aboutMe-letter' style='opacity:0;'>${aboutMeDescription[i]}</span>`
  }

  aboutMe.innerHTML = aboutMeHTML;

  anime({
    targets: '.aboutMe-letter',
    opacity: [0, 1],
    easing: "easeOutSine",
    duration: 150,
    delay: (_, i) => 1000 + 20 * (i - 1)
  }).finished.then(() => {
    anime({
      targets: '.aboutMe-letter',
      opacity: [1, 0],
      duration: 100,
      easing: "easeOutExpo",
      delay: (_, i) => 600 + 20 * (aboutMeDescription.length - i - 1)
    }).finished.then(() => {
      setTimeout(changeaboutMe, 10);
    });
  })
}

function rotateStar() {
  requestAnimationFrame(rotateStar);

  star.style.transform = `rotate(${(0.1 * document.timeline.currentTime) % 360}deg)`;
}

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

document.addEventListener("DOMContentLoaded", () => {
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
      targets: '#conclusion .conclusion-letter',
      opacity: [0, 1],
      easing: "easeOutSine",
      duration: 150,
      delay: (_, i) => 1500 + 20 * (i - 1)
    })

    changeAboutMe();
  });

  rotateStar();
});