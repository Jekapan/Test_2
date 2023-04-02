const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");
const primaryHeader = document.querySelector('.primary-header');


navToggle.addEventListener('click', () => {
    primaryNav.hasAttribute('data-visible')
        ? navToggle.setAttribute('aria-expanded', false)
        : navToggle.setAttribute('aria-expanded', true);
    primaryNav.toggleAttribute("data-visible");
    primaryHeader.toggleAttribute('data-overlay')
})


const slider = new A11YSlider(document.querySelector(".slider"), {
    slidesToShow: 1,
    arrows: true, // arrows enabled 767px and down
    dots: true
})



const coll = document.getElementsByClassName("collapsible-container");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    const content = this.querySelector(".collapsible");
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}