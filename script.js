function createSparkle() {
  const sparkle = document.createElement('div');
  sparkle.className = 'sparkle';
  sparkle.style.left = Math.random() * window.innerWidth + 'px';
  sparkle.style.top = Math.random() * window.innerHeight + 'px';
  document.body.appendChild(sparkle);

  const animation = sparkle.animate([
      { transform: 'scale(0) rotate(0deg)', opacity: 1 },
      { transform: 'scale(1) rotate(180deg)', opacity: 0 }
  ], {
      duration: 1500,
      easing: 'cubic-bezier(0.4, 0, 0.2, 1)'
  });

  animation.onfinish = () => sparkle.remove();
}

function showGreeting() {
  document.querySelector('.landing-page').style.display = 'none';
  document.querySelector('.main-content').style.display = 'block';
  
  // Create initial burst of sparkles
  for (let i = 0; i < 50; i++) {
      setTimeout(createSparkle, i * 50);
  }

  // Continue creating occasional sparkles
  setInterval(() => {
      if (Math.random() > 0.7) createSparkle();
  }, 200);
}