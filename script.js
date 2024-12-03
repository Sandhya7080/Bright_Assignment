function handleScroll() {
      const elements = document.querySelectorAll('.why, .hero-content');
      const windowHeight = window.innerHeight;

      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top < windowHeight - 50) {
          element.classList.add('animated');
        }
      });
    }

    // Event listener for scrolling
    window.addEventListener('scroll', handleScroll);

    // Trigger the animation on page load
    handleScroll();