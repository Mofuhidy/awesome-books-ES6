const booksSection = document.querySelector('#list-section');
const addSection = document.querySelector('#add-section');
const aboutSection = document.querySelector('#about-section');
const navLists = document.querySelectorAll('.nav-link');

const navLinks = () => {
  navLists.forEach((link) => {
    link.addEventListener('click', (e) => {
      navLists.forEach((navLink) => {
        navLink.classList.remove('active');
      });

      // Add "active" class to the clicked navigation link
      e.target.classList.add('active');
      // show and hide the section
      if (e.target.id === 'list') {
        booksSection.setAttribute('data-visible', 'true');
        addSection.setAttribute('data-visible', 'false');
        aboutSection.setAttribute('data-visible', 'false');
      } else if (e.target.id === 'addNew') {
        booksSection.setAttribute('data-visible', 'false');
        addSection.setAttribute('data-visible', 'true');
        aboutSection.setAttribute('data-visible', 'false');
      } else if (e.target.id === 'contact') {
        booksSection.setAttribute('data-visible', 'false');
        addSection.setAttribute('data-visible', 'false');
        aboutSection.setAttribute('data-visible', 'true');
      }
    });
  });
};

export default navLinks;