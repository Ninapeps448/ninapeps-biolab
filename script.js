
const filters = document.querySelectorAll('.filter');
const cards = document.querySelectorAll('.product-card');

filters.forEach(button => {
  button.addEventListener('click', () => {
    filters.forEach(b => b.classList.remove('active'));
    button.classList.add('active');

    const selected = button.dataset.filter;
    cards.forEach(card => {
      const show = selected === 'all' || card.dataset.category === selected;
      card.style.display = show ? '' : 'none';
    });
  });
});
