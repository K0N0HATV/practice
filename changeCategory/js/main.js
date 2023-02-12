const sections = document.querySelectorAll(".category");
const navLinks = document.querySelectorAll(".menu-itemA");

// navLinks.forEach(link => {
//   link.addEventListener("click", handleClick);
// });

// window.addEventListener('load', e => {
//   e.preventDefault()
//   if (document.location.hash) {
//     const navLink = document.querySelector(`.menu-itemA[href='${document.location.hash}']`);
//     navLink.classList.add('active')
//   }

//   const navLink = document.querySelector(`.menu-itemA`);
//   navLink.classList.add('active')
// })

// function handleClick(e) {
//   e.preventDefault();
//   const id = e.target.getAttribute("href").slice(1);
//   const section = document.getElementById(id);
//   section.scrollIntoView({ behavior: "smooth", block: 'start' });

//   navLinks.forEach(link => {
//     link.classList.remove("active");
//   });
//   e.target.classList.add("active");
// }

window.addEventListener("scroll", function (e) {
  const fromTop = window.scrollY;
  sections.forEach(section => {
    console.log('scrollY ' + fromTop, 'offset' + section.offsetTop);
    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      navLinks.forEach(link => {
        link.classList.remove("active");
        if (section.getAttribute("id") === link.getAttribute("href").slice(1)) {
          link.classList.add("active");
          link.scrollIntoView({ block: 'start', behavior: 'auto' })
        }
      });
    }
  });
});