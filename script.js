// ============================================================
// DHROOV — Site Interactivity
// Expandable sections + any future interactivity.
// ============================================================

// Nothing needed for now — <details>/<summary> handles expand/collapse natively.
// This file exists for future additions (animations, dynamic content, etc.)

document.addEventListener('DOMContentLoaded', () => {
  // Highlight active nav tab based on current page
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav a');

  navLinks.forEach(link => {
    const href = link.getAttribute('href').split('/').pop();
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
});
