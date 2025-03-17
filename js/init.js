// Variables
var is_scrolled = false;

// Begin
var selfie = document.getElementById("selfie")
selfie.onclick = () => {
  alert( "Handler for `click` called." );
}

$(window).scroll(() => {
  var scroll_top = $(window).scrollTop();
  if (scrollY >= 100) {
    if (!is_scrolled) {
      console.log("Bye!");
      is_scrolled = true;
    }
  }
  else if (scroll_top != null) {
      if (is_scrolled) {
          console.log("Hello!");
          is_scrolled = false;
      }
  }
});





// // Libraries
// import anime from "../anime/lib/anime.es.js"



// // Begin
// // Stolen from https://tobiasahlin.com/moving-letters/#3
// // Wrap every letter in a span
let textWrapper = document.querySelector('.typewrite');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.typewrite .letter',
    opacity: [0, 1],
    easing: "easeInCubic",
    duration: 150,
    delay: (_, i) => (i - 1)
  }).add({
    targets: '.heading',
    opacity: 0,
    duration: 500,
    easing: "easeOutExpo",
    delay: 100
  });
