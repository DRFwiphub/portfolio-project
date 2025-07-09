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


/*
    (function(){
        emailjs.init("ex0WU-sCy44tYoz1N");
    })();

    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();

        emailjs.sendForm('service_qd7p2b8', 'template_onyw254', this)
            .then(function() {
                alert('Message sent!');
            }, function(error) {
                alert('Failed to send: ' + JSON.stringify(error));
            });
    });*/

            (function() {
            // https://dashboard.emailjs.com/admin/account
            emailjs.init({
              publicKey: "ex0WU-sCy44tYoz1N",
            });
        })();
 
        window.onload = function() {
            document.getElementById('contact-form').addEventListener('submit', function(event) {
                event.preventDefault();
                // these IDs from the previous steps
                emailjs.sendForm('service_qd7p2b8', 'template_onyw254', this)
                    .then(() => {
                        console.log('SUCCESS!');
                    }, (error) => {
                        console.log('FAILED...', error);
                    });
            });
        }