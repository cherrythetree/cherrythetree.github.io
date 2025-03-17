import anime from "../anime/lib/anime.es.js"

// Stolen from https://tobiasahlin.com/moving-letters/#3
// Wrap every letter in a span
var textWrapper = document.querySelector('.heading');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.heading .letter',
    opacity: [0, 1],
    easing: "easeInOutQuad",
    duration: 150,
    delay: (el, i) => 150 * (i+1)
  }).add({
    targets: '.heading',
    opacity: 0,
    duration: 500,
    easing: "easeOutExpo",
    delay: 100
  });