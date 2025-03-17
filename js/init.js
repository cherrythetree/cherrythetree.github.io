// Variables
var is_scrolled = false;

// Begin
var selfie = document.getElementById("selfie")
selfie.onclick = () => {
  alert( "Handler for `click` called." );
}

var headings = document.getElementsByClassName("heading")

for (var i = 0; i < headings.length; i++) {
  let rect = headings[i].getBoundingClientRect();
  console.log(rect.top, rect.bottom, rect.left, rect.right); //second console output
}

var paragraph = document.querySelector(".paragraph");
paragraph.innerHTML = paragraph.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime({
  targets: '.paragraph .letter',
  opacity: [0, 1],
  easing: "easeOutSine",
  duration: 150,
  delay: (_, i) => 500 + 5 * (i - 1)
})

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