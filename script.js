// Redirect to "Yes" page
document.getElementById('yes-btn').addEventListener('click', function () {
    window.location.href = 'yes.html';
  });
  
  // Make the "No" button move randomly when hovered
  const noBtn = document.getElementById('no-btn');
  noBtn.addEventListener('mouseover', function () {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    noBtn.style.position = 'absolute';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
  });
  
  // Redirect to "No" page when clicked
  noBtn.addEventListener('click', function () {
    window.location.href = 'no.html';
  });
