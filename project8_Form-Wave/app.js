

const labels = document.querySelectorAll('label');

labels.forEach((label) => {
   label.innerHTML = label.innerHTML.split('')
   .map((letter,index)=> `<span style="transition-delay: ${index * 50}ms">${letter}</span>`)
   .join('');
   
});

const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#password');

togglePassword.addEventListener('click', function (e) {
  // toggle the type attribute
  const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
  password.setAttribute('type', type);
  // toggle the eye slash icon
  this.classList.toggle('fa-eye-slash');
});