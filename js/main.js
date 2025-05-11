// script.js

// Smooth scroll for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').slice(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 60,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Highlight active nav link on scroll
  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + 70;
    document.querySelectorAll('section').forEach(section => {
      const top = section.offsetTop;
      const bottom = top + section.offsetHeight;
      const id = section.getAttribute('id');
      const navLink = document.querySelector(`nav ul li a[href="#${id}"]`);
  
      if (scrollPos >= top && scrollPos < bottom) {
        navLink?.classList.add('active');
      } else {
        navLink?.classList.remove('active');
      }
    });
  });
  
  // Optional: Toggle menu for mobile view (if needed)
  // const menuToggle = document.querySelector('.menu-toggle');
  // const navMenu = document.querySelector('nav ul');
  // menuToggle?.addEventListener('click', () => {
  //   navMenu.classList.toggle('open');
  // });
  