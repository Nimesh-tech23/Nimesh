const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links ul');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  hamburger.classList.toggle('active');
});
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    navLinks.classList.remove('active');
    hamburger.classList.remove('active');
  }
});
/*
const form = document.querySelector('.contact-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');
const submitButton = document.querySelector('#submit-button');  
const successMessage = document.querySelector('.success-message');
const errorMessage = document.querySelector('.error-message');
const formData = {
  name: '',
  email: '',
  message: ''
};
const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
};
const validateForm = () => {
  const { name, email, message } = formData;
  if (name === '' || email === '' || message === '') {
    errorMessage.textContent = 'All fields are required.';
    return false;
  }
  if (!validateEmail(email)) {
    errorMessage.textContent = 'Please enter a valid email address.';
    return false;
  }
  errorMessage.textContent = '';
  return true;
};
const handleInputChange = (event) => {
  const { name, value } = event.target;
  formData[name] = value;
};
*/