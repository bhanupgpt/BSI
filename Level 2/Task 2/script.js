const registerButton = document.getElementById("register-button");
const loginButton = document.getElementById("login-button");
const registerForm = document.getElementById("register-form");
const loginForm = document.getElementById("login-form");
const messageElement = document.getElementById("message");

registerButton.addEventListener("click", function() {
  registerForm.style.display = "block";
  loginForm.style.display = "none";
  messageElement.textContent = "";
});

loginButton.addEventListener("click", function() {
  registerForm.style.display = "none";
  loginForm.style.display = "block";
  messageElement.textContent = "";
});

loginForm.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent default form submission

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Check if user exists in local storage
  const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
  const user = storedUsers.find(user => user.username === username);

  if (!user) {
    messageElement.textContent = "Username not found. Please register.";
    return;
  }

  if (user.password !== password) {
    messageElement.textContent = "Incorrect password.";
    return;
  }

  // Login successful - Redirect to secured page (replace with your page URL)
  window.location.href = "secured_page.html";
});

registerForm.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent default form submission

  const username = document.getElementById("reg-username").value;
  const password = document.getElementById("reg-password").value;

  // Check if username already exists
  const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
  const existingUser = storedUsers.find(user => user.username === username);

  if (existingUser) {
    messageElement.textContent = "Username already exists.";
    return;
  }

  // Register user
  storedUsers.push({ username: username, password: password });
  localStorage.setItem("users", JSON.stringify(storedUsers));

  messageElement.textContent = "Registration successful! Please login.";
  registerForm.style.display = "none";
  loginForm.style.display = "block";
});
