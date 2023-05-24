function registerUser(event) {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const city = document.getElementById('city').value.trim();

  if (!name || !email || !phone || !city) {
    console.log('Please fill in all fields');
    return;
  }

  if (!isValidEmail(email)) {
    console.log('Please enter a valid email address');
    return;
  }

  if (!isValidPhone(phone)) {
    console.log('Please enter a valid phone number');
    return;
  }

  console.log(name);
  console.log(email);
  console.log(phone);
  console.log(city);
}

function isValidEmail(email) {
  const regex = /^\S+@\S+\.\S+$/;
  return regex.test(email);
}

function isValidPhone(phone) {
  const regex = /^\d{10}$/;
  return regex.test(phone);
}

const button = document.querySelector('button');
button.addEventListener('click', () => {
  console.log("button has been clicked")
});

const element0 = document.querySelector('.element');
element0.addEventListener('mouseover', () => {
  element0.style.backgroundColor = 'blue';
});

const element = document.querySelector('.element');
element.addEventListener('mouseout', () => {
  element.style.backgroundColor = 'red';
});

const form = document.getElementById('my-form');
form.addEventListener('submit', registerUser);


