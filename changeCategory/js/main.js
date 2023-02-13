const sections = document.querySelectorAll(".category");
const navLinks = document.querySelectorAll(".menuItemA");

navLinks.forEach(link => {
  link.addEventListener("click", handleClick);
});

window.addEventListener('load', e => {
  if (document.querySelector('.active')) {
    return
  }

  const navLink = navLinks[0];
  navLink.parentElement.classList.add('active')
})

async function handleClick(e) {
  e.preventDefault();
  const id = e.target.dataset.href;
  const section = document.getElementById(id);
  scrollTo({
    top: section.offsetTop,
    behavior: 'smooth'
  })
}

window.addEventListener("scroll", () => {
  const fromTop = window.scrollY;
  sections.forEach(section => {
    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      navLinks.forEach(link => {
        link.parentElement.classList.remove("active");
        if (section.getAttribute("id") === link.dataset.href) {
          link.parentElement.classList.add("active");
          link.parentElement.scrollIntoView({ behavior: 'auto', block: 'start' })
        }
      });
    }
  });
});