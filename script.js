const images = document.querySelectorAll('.gallery img');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modalImage');
const closeBtn = document.getElementById('closeBtn');

images.forEach(img => {
  img.addEventListener('click', () => {
    modal.classList.add('open');
    modalImg.src = img.src.replace('/300/200', '/800/600');
    modalImg.alt = img.alt;
  });
});
//close

closeBtn.onclick = () => {
  modal.classList.remove('open');
  modalImg.src = '';
};

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('open');
    modalImg.src = '';
  }
});

const bacon = document.querySelector('.bacon');
const navLinks = document.querySelector('.nav-links');
let menuOpen = false;

bacon.addEventListener('click', () => {
  if(menuOpen == false){
    navLinks.style.display ="block";
    navLinks.style.float = "left";
    menuOpen = true;
  }
  else if (menuOpen == true){
    navLinks.style.display = "none";
    menuOpen = false;
  }
});
