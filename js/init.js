// Variables
var i_am_who = [
  "I develop games.",
  "I code flashy visual effects.",
  "I model 3D meshes.",
  "I design and code user interface.",
  "I play the ukulele.",
  "I write songs.",
  "I write narratives.",
  "I love Desmos and calculators.",
  "I write poetry."
];

var is_scrolled = false;
var selfie = document.getElementById("selfie");
var who_am_i = document.querySelector("#who-am-i");
var who_am_i_index = 0;
var who_am_i_changes = true;

// Begin
selfie.onclick = () => {
  alert( "Handler for `click` called." );
}

$(document).ready(() => {
  function CHANGE_WHO_AM_I() {
    who_am_i_index++;
    who_am_i.innerHTML = "";

    if (who_am_i_index >= i_am_who.length) {
      who_am_i_index = 0;
    }

    let i_am_statement = i_am_who[who_am_i_index];
    let inner_html = "";
    
    for (let i = 0; i < i_am_statement.length; i++) {
      inner_html += `<span class='who-am-i-letter'>${i_am_statement[i]}</span>`
    }
  
    who_am_i.innerHTML = inner_html;

    anime.timeline({})
      .add({
        targets: '.who-am-i-letter',
        opacity: [0, 1],
        easing: "easeOutSine",
        duration: 150,
        delay: (_, i) => 20 * (i - 1)
      }).add({
        targets: '.who-am-i-letter',
        opacity: [1, 0],
        duration: 100,
        easing: "easeOutExpo",
        delay: (_, i) => 500 + 20 * (i_am_statement.length - i - 1)
      })

    setTimeout(CHANGE_WHO_AM_I, 2 * (500 + 15 * i_am_statement.length));
  }

  CHANGE_WHO_AM_I();
});

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