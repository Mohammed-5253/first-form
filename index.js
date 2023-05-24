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
  function generateUniqueId() {
    return Date.now().toString();
  }
  const userId = generateUniqueId(); // You can implement your own function to generate a unique ID
  let obj_serialized = JSON.stringify(obj);
  localStorage.setItem('name_'+userId ,obj_serialized);

  // localStorage.setItem('name', name);
  // localStorage.setItem('email', email);
  // localStorage.setItem('phone', phone);
  // localStorage.setItem('city', city);

  console.log('User details saved to localStorage');

  // Clear input fields
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('phone').value = '';
  document.getElementById('city').value = '';
}
const form = document.getElementById('my-form');
form.addEventListener('submit', registerUser);