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

const Navbar = document.querySelector('.rNavbar');
const navLinks = document.querySelector('.nav-links');
let menuOpen = false;

Navbar.addEventListener('click', () => {
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

const mediaQuery = window.matchMedia('(min-width: 768px)')

if(mediaQuery <= 768){
  alert('Yay');
}
else{
  alert('Boo');
}

window.addEventListener('resize', function() {
    const navLinks = document.querySelector('.nav-links');
    if (window.innerWidth > 768) {
        navLinks.style.display = 'flex'; // Show nav links on desktop
    } else {
        navLinks.style.display = ''; // Let your mobile JS handle this
    }
});
