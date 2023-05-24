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
  let obj = {
    name : name,
    phone : phone
  };
  let obj_serialized = JSON.stringify(obj);
  localStorage.setItem(email ,obj_serialized);

  console.log('User details saved to localStorage');

  // Display submitted data on the screen
  const container = document.getElementById('my-form');
  const listItem = document.createElement('li');
  listItem.textContent = `Name: ${name}, Phone: ${phone}`;
  container.appendChild(listItem);

  // Clear input fields
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('phone').value = '';
  document.getElementById('city').value = '';
}
const form = document.getElementById('my-form');
form.addEventListener('submit', registerUser);