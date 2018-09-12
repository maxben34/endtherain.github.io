document.addEventListener('DOMContentLoaded', () => {
  // Mobile/desktop responsiveness
  const mobileQuery = window.matchMedia('screen and (max-width: 768px)');
  mobileQuery.addListener(mobileOptimize);
  mobileOptimize(mobileQuery);

  // Populate the raincloud
  for (let i = 0; i < 150; i++) {
    document.getElementById('raincloud').innerHTML += '<i class="rain"></i>';
  }

  // Bind navbar burgers
  const navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  if (navbarBurgers.length > 0) {
    navbarBurgers.forEach(element => {
      element.addEventListener('click', () => {
        const target = document.getElementById(element.dataset.target);
        element.classList.toggle('is-active');
        target.classList.toggle('is-active');
      });
    });
  }

  // Bind email sign up button
  document.getElementById('updates-button').addEventListener('click', submitEmailForm);

  // Bind contact send button
  document.getElementById('contact-send').addEventListener('click', submitContactForm);
});

// Change classes for mobile
function mobileOptimize(query) {
  const isMobile = query.matches;
  if (isMobile) {
    // Make main title smaller
    document.getElementById('main-title').classList.remove('is-1');
    document.getElementById('main-title').classList.add('is-3');
    // Make main subtitle smaller
    document.getElementById('main-subtitle').classList.remove('is-2');
    document.getElementById('main-subtitle').classList.add('is-4');
    // Maken about paragraph smaller
    document.getElementById('about-para').classList.add('is-6');
    // Make update signup smaller
    document.getElementById('updates-input').classList.remove('is-medium');
    document.getElementById('updates-button').classList.remove('is-medium');
  } else {
    // Make main title bigger
    document.getElementById('main-title').classList.remove('is-3');
    document.getElementById('main-title').classList.add('is-1');
    // Make main subtitle bigger
    document.getElementById('main-subtitle').classList.remove('is-4');
    document.getElementById('main-subtitle').classList.add('is-2');
    // Make about paragraph bigger
    document.getElementById('about-para').classList.remove('is-6');
    // Make update signup bigger
    document.getElementById('updates-input').classList.add('is-medium');
    document.getElementById('updates-button').classList.add('is-medium');
  }
}

// Add email to project-umbrella Andrew list for updates
// TODO: create a general mailing list instead
function submitEmailForm() {
  const email = document.getElementById('updates-input').value;
  if (email) {
    alert('Sorry, we\'re still working on this');
    /* const xhttp = new XMLHttpRequest();
     xhttp.open('POST', 'https://lists.andrew.cmu.edu/mailman/subscribe/project-umbrella', true);
     xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
     xhttp.send('email=' + encodeURIComponent(email) + '&fullname=&pw=&pw-conf=&digest=0');*/
  }
}

// Email feedback form
function submitContactForm() {
  let subject = document.getElementById('contact-subject').value;
  let message = document.getElementById('contact-message').value;

  // Make sure there is a subject and message
  if (subject && message) {
    // Use mailto: to open email client
    window.location.href = 'mailto:endtherain@gmail.com?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(message);

    // Hide form and display success message
    document.getElementById('contact-form').classList.add('is-hidden');
    document.getElementById('contact-success').classList.remove('is-hidden');
  }
}