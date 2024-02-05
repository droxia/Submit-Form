// Connect HTML elements
const sendButton = document.getElementById("send");
const resetButton = document.getElementById("reset");
const form = document.getElementById("form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

// Prevent page refresh when submitting the form
form.addEventListener("submit", function (e) {
  e.preventDefault();
});

// Function to clear input fields
function clearInputFields() {
  nameInput.value = "";
  emailInput.value = "";
  messageInput.value = "";
}

// Function to save data to localStorage
function saveDataToLocalStorage() {
  localStorage.setItem('name', nameInput.value);
  localStorage.setItem('email', emailInput.value);
  localStorage.setItem('message', messageInput.value);
}

// Reset button click event handler
resetButton.addEventListener("click", function () {
  clearInputFields();
});

// Send button click event handler
sendButton.addEventListener("click", function () {
  saveDataToLocalStorage();
  clearInputFields();
});


