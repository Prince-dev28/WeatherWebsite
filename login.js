const loginForm = document.getElementById('loginForm');
const errorMsg = document.getElementById('errorMsg');


const users = [
  { username: "Prince", password: "267" },
 
];

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();

  
  const validUser = users.find(
    (user) => user.username === username && user.password === password
  );

  if (validUser) {
    
    localStorage.setItem('loggedInUser', validUser.username);
    window.location.href = "index.html"; 
  } else {
    errorMsg.textContent = "Invalid username or password!";
  }
});
