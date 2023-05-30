document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll("nav ul a");
    const sections = document.querySelectorAll("section");
  
    // Function to remove the 'nav-active' class from all navigation links
    function removeActiveClass() {
      navLinks.forEach(link => link.classList.remove("nav-active"));
    }
  
    // Function to add the 'nav-active' class to the clicked navigation link
    function addActiveClass(link) {
      link.classList.add("nav-active");
    }
  
    // Custom scroll function with smooth effect
    function smoothScroll(target) {
      const targetSection = document.querySelector(target);
      const targetPosition = targetSection.getBoundingClientRect().top;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = 800; // Adjust the duration as needed
      let start = null;
  
      function step(timestamp) {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
        if (progress < duration) window.requestAnimationFrame(step);
      }
  
      function easeInOutCubic(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t * t + b;
        t -= 2;
        return (c / 2) * (t * t * t + 2) + b;
      }
  
      window.requestAnimationFrame(step);
    }
  
    // Function to handle smooth scrolling to the clicked section
    function scrollToSection(e) {
      e.preventDefault();
      const target = e.target.getAttribute("href");
      removeActiveClass();
      addActiveClass(e.target);
      smoothScroll(target);
    }
  
    // Add event listener to each navigation link
    navLinks.forEach(link => {
      link.addEventListener("click", scrollToSection);
    });
  });
  