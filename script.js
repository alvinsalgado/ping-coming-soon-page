const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const email = form['email'];
  const emailValue = email.value;
  const small = form.querySelector('small');

  if (!emailValue) {
    // if email input is empty
    form.classList.add('error');
    small.innerText = 'Email field cannot be blank!';
    small.style.display = 'inline-block';
  } else if (!isValidEmail(emailValue)) {
    // if email is not vaild
    form.classList.add('error');
    small.innerText = 'Email is invalid!';
    small.style.display = 'inline-block';
  } else {
    form.classList.remove('error');
    small.innerText = '';
    small.style.display = 'none';
  }
});

function isValidEmail(email) {
  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
