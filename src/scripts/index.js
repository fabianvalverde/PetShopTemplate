import { onMount } from 'astro';

onMount(() => {
  window.addEventListener('scroll', function() {
    const overlaySection = document.querySelector('.overlay-section');
    const scrollPosition = window.scrollY;
    const triggerOffset = window.innerHeight / 2;
  
    if (scrollPosition > triggerOffset) {
      overlaySection.classList.add('active');
    } else {
      overlaySection.classList.remove('active');
    }
  });
});

  