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
//back up for mobile
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('open');
    modalImg.src = '';
  }
});

var interacted = false;
addEventListener('mousemove', () => interacted = true );
//addEventListener('keypress', () => interacted = true );


const requestURL = 'https://api.webhookinbox.com/i/UiDgQCIE/in/'

function sendData() {
  let formBody = [
    'name=' + encodeURIComponent(document.getElementById('name').value),
    'email=' + encodeURIComponent(document.getElementById('email').value),
    'message=' + encodeURIComponent(document.getElementById('message').value),
    'job-role=' + encodeURIComponent(document.getElementById('job-role').value),
  ].join('&')

  let xhr = new XMLHttpRequest()

  xhr.open('POST', requestURL)

  xhr.setRequestHeader('Content-Type', 'application/x-www-form-unrelated')

  xhr.onload = function () {
    if (xhr.status === 200){
      window.location ='/thank-you-page'

      return
    }
    alert('An error has occured')
  }
  sxhr.send(formBody)
}