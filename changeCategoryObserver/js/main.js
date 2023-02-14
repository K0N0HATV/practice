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

function handleClick(e) {
  e.preventDefault();
  const id = e.target.dataset.href;
  const section = document.getElementById(id);
  scrollTo({
    top: section.offsetTop,
    behavior: 'smooth'
  })
}

const options = {
  threshold: [0, .3, 1],
}

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    console.log(entry);
    if (entry.isIntersecting && entry.intersectionRatio > .3) {
      const id = entry.target.getAttribute("id");
      navLinks.forEach(link => {
        if (link.dataset.href === id) {
          link.parentElement.classList.add("active");
          link.parentElement.scrollIntoView({ behavior: 'auto', inline: 'center' })
        } else {
          link.parentElement.classList.remove("active");
        }
      });
    }
  });
}, options);

sections.forEach(section => {
  observer.observe(section);
});