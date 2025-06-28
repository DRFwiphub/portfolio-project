    const images = document.querySelectorAll('.gallery img');
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modalImage');
    const closeBtn = document.getElementById('closeBtn');

    images.forEach(img => {
      img.addEventListener('click', () => {
        modal.classList.add('open');
        modalImg.src = img.src.replace('/300/200', '/800/600'); // Load bigger image if available
        modalImg.alt = img.alt;
      });
    });

    closeBtn.onclick = () => {
      modal.classList.remove('open');
      modalImg.src = '';
    };

    // Close modal when clicking background (not the image)
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('open');
        modalImg.src = '';
      }
    });

    // Optional: Close modal with Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === "Escape") {
        modal.classList.remove('open');
        modalImg.src = '';
      }
    });