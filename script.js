const comus = document.querySelectorAll('.comu');

window.addEventListener('scroll', () => {
  comus.forEach(el => {
    const rect = el.getBoundingClientRect();
    if(rect.top < window.innerHeight - 100) {
      el.classList.remove('opacity-0', 'translate-y-[50px]');
      el.classList.add('opacity-100', 'translate-y-0');
    }
  });
});
