const funFactList = [
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

const funFacts = document.querySelector("#fun-facts");
const headings = document.getElementsByClassName("heading");

const conclusion = document.querySelector("#conclusion");
conclusion.innerHTML = conclusion.textContent.replace(/\S/g, "<span class='conclusion-letter'>$&</span>");

const star = document.getElementById("star-image");

let isScrolled = false;
let funFactsIndex = 0;

function changeFunFacts() {
  let funFactsDescription = funFactList[funFactsIndex];
  let funFactsHTML = "";

  funFactsIndex++;
  funFactsIndex %= funFactList.length;

  for (let i = 0; i < funFactsDescription.length; i++) {
    funFactsHTML += `<span class='fun-facts-letter' style='opacity:0;'>${funFactsDescription[i]}</span>`
  }

  funFacts.innerHTML = funFactsHTML;

  anime({
    targets: '.fun-facts-letter',
    opacity: [0, 1],
    easing: "easeOutSine",
    duration: 150,
    delay: (_, i) => 1000 + 20 * (i - 1)
  }).finished.then(() => {
    anime({
      targets: '.fun-facts-letter',
      opacity: [1, 0],
      duration: 100,
      easing: "easeOutExpo",
      delay: (_, i) => 600 + 20 * (funFactsDescription.length - i - 1)
    }).finished.then(() => {
      setTimeout(changeFunFacts, 10);
    });
  })
}

function rotateStar() {
  requestAnimationFrame(rotateStar);

  star.style.transform = `rotate(${(0.1 * document.timeline.currentTime) % 360}deg)`;
}

if (window.innerWidth > 768) {
  const threeScript = document.createElement('script');
  threeScript.src = "https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js";

  const vantaScript = document.createElement('script');
  vantaScript.src = "https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.clouds.min.js";

  threeScript.onload = () => {
    document.head.appendChild(vantaScript);
  };

  vantaScript.onload = () => {
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
    });
  };

  document.head.appendChild(threeScript);
}

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

    changeFunFacts();
  });

  rotateStar();
});