//pop up gallery
const images = document.querySelectorAll('.gallery img');
const modalCont = document.getElementById('modal-container');
const modalImg = document.getElementById('modalImage');
const closeBtn = document.getElementById('closeBtn');

//creates the .open(~line 170::220) class in CSS, expands image on click

if (modalCont && modalImg && closeBtn) {
  images.forEach(img => {
    img.addEventListener('click', () => {
      modalCont.classList.add('open');
      modalImg.src = img.src.replace('/300/200', '/800/600');
      modalImg.alt = img.alt;
    });
  });
//close on click
  closeBtn.onclick = () => {
    modalCont.classList.remove('open');
    modalImg.src = '';
  };
  modalCont.addEventListener('click', (e) => {
    if (e.target === modalCont) {
      modalCont.classList.remove('open');
      modalImg.src = '';
    }
  });
}

//responsive navbar
const navBar = document.querySelector('.Rnavbar');
const navLinks = document.querySelector('.nav-links');
let menuOpen = false;

navBar.addEventListener('click', () => {
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
//solution for navbar issue
window.addEventListener('resize', function() {
    const navLinks = document.querySelector('.nav-links');
    if (window.innerWidth > 768) {
        navLinks.style.display = 'flex';
    } else {
        navLinks.style.display = ''; 
    }
});