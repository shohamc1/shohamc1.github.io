window.addEventListener("scroll", scrollGrid);
window.addEventListener("wheel", noShakeScroll);

function scrollGrid() {
  let transY = window.pageYOffset,
    cards = document.querySelector(".cards");

  cards.style.setProperty("--scroll", transY + "px");
}
scrollGrid();

/* Without this, the `items` div erratically shakes while scrolling with wheel or touchpad. The issue still persists in Safari though… */
function noShakeScroll(e) {
  this.scrollBy(0, e.deltaY);
  e.preventDefault();
}

var $stickyBlock = document.querySelector(".portfolio");
var origOffsetY = $stickyBlock.offsetTop - 20; // 20 is your top margin

function onScroll() {
  window.scrollY >= origOffsetY
    ? $stickyBlock.classList.add("sticky")
    : $stickyBlock.classList.remove("sticky");
}

document.addEventListener("scroll", onScroll);
