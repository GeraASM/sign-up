const form = document.getElementById('form');
const main = form.closest('.main');
const success = main.querySelector('.success');
const sign = main.querySelector('.sign');
const showEmail = document.querySelector('.show-email');
const correctEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let isCorrectEmail = true;
    const emailInput = document.getElementById('email').value;
    if (!correctEmail.test(emailInput)) {
        isCorrectEmail = false;
        form.querySelector('.error').classList.add('error--active');
        form.querySelector('.input-email').classList.add('input-email--error');
    } else {
        form.querySelector('.error').classList.remove('error--active');
        form.querySelector('.input-email').classList.remove('input-email--error');
    }
    if (isCorrectEmail) {
        showEmail.textContent = emailInput;
        sign.style.display = 'none'; 
        success.style.display = 'block';

        form.reset()
    }
})


const btnDismiss = document.getElementById('btn-dismiss');
btnDismiss.addEventListener('click', () => {
    sign.style.display = 'block'; 
    success.style.display = 'none';
    showEmail.textContent = '';
})