document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const navUl = document.querySelector('nav ul');

  menuToggle.addEventListener('click', () => {
    navUl.classList.toggle('active');
  });

  // Close menu when clicking a link (optional)
  const navLinks = document.querySelectorAll('nav ul li a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navUl.classList.remove('active');
    });
  });

  // Accordion functionality
  const accordions = document.querySelectorAll('.accordion-button');
  accordions.forEach(button => {
    button.addEventListener('click', () => {
      const content = button.nextElementSibling;
      const isActive = button.classList.contains('active');

      // Close all accordions
      accordions.forEach(btn => {
        btn.classList.remove('active');
        btn.nextElementSibling.style.display = 'none';
      });

      if (!isActive) {
        button.classList.add('active');
        content.style.display = 'block';
      }
    });
  });

  // Smooth scroll for hero button
  const heroButton = document.querySelector('.btn');
  if (heroButton) {
    heroButton.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = heroButton.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  // Responsive font size adjustment for hero heading and paragraph
  const heroHeading = document.querySelector('.hero h2');
  const heroParagraph = document.querySelector('.hero p');

  function adjustHeroTextSize() {
    const width = window.innerWidth;
    if (width < 600) {
      heroHeading.style.fontSize = '2rem';
      heroParagraph.style.fontSize = '1rem';
    } else if (width < 1024) {
      heroHeading.style.fontSize = '3rem';
      heroParagraph.style.fontSize = '1.3rem';
    } else {
      heroHeading.style.fontSize = '4rem';
      heroParagraph.style.fontSize = '1.8rem';
    }
  }

  window.addEventListener('resize', adjustHeroTextSize);
  adjustHeroTextSize();
});
