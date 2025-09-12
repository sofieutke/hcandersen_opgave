document.querySelectorAll('.tooltip-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation(); 
    const tooltip = btn.nextElementSibling;
    tooltip.classList.toggle('active');
  });
});

// Luk tooltip når man klikker udenfor
document.addEventListener('click', (e) => {
  document.querySelectorAll('.tooltip').forEach(tip => {
    if (!tip.contains(e.target) && !e.target.classList.contains('tooltip-btn')) {
      tip.classList.remove('active');
    }
  });
});