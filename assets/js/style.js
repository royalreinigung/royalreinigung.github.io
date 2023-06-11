/* Observer */
window.addEventListener("scroll", function(){
   var header = document.querySelector("header");
   header.classList.toggle("sticky", window.scrollY > 0)
})

/* hamburger-active */
document.querySelector('.hamburger').addEventListener('click', function() {
   this.classList.toggle('active');
   document.querySelector('.header__menu-list').classList.toggle('open');
})
/* hamburger-active */