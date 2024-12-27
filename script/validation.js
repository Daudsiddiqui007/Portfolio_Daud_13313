
window.onload = function () {
    const nameField = document.getElementById("name");
    const emailField = document.getElementById("email");
    const messageField = document.getElementById("message");
  
    nameField.addEventListener("input", function () {
      validateName();
    });
  
    emailField.addEventListener("input", function () {
      validateEmail();
    });
  
    messageField.addEventListener("input", function () {
      validateMessage();
    });
  
    nameField.addEventListener("blur", validateName); 
    emailField.addEventListener("blur", validateEmail);
    messageField.addEventListener("blur", validateMessage); 
  };
  

  function validateName() {
    const name = document.getElementById("name").value;
    const nameError = document.getElementById("nameError");
    const nameField = document.getElementById("name");
  
    if (name.trim() === "") {
      nameError.textContent = "Name is required.";
      nameError.style.display = "block";
      nameField.classList.add("error");
    } else {
      nameError.style.display = "none";
      nameField.classList.remove("error");
    }
  }
  
  
  function validateEmail() {
    const email = document.getElementById("email").value;
    const emailError = document.getElementById("emailError");
    const emailField = document.getElementById("email");
  
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (email.trim() === "") {
      emailError.textContent = "Email is required.";
      emailError.style.display = "block";
      emailField.classList.add("error");
    } else if (!emailPattern.test(email)) {
      emailError.textContent = "Please enter a valid email address.";
      emailError.style.display = "block";
      emailField.classList.add("error");
    } else {
      emailError.style.display = "none";
      emailField.classList.remove("error");
    }
  }

  function validateMessage() {
    const message = document.getElementById("message").value;
    const messageError = document.getElementById("messageError");
    const messageField = document.getElementById("message");
  
    if (message.trim() === "") {
      messageError.textContent = "Message is required.";
      messageError.style.display = "block";
      messageField.classList.add("error");
    } else {
      messageError.style.display = "none";
      messageField.classList.remove("error");
    }
  }
  
  
  function validateForm(event) {
    
    validateName();
    validateEmail();
    validateMessage();
  
    
    const errors = document.querySelectorAll(".error-message");
    const invalidFields = document.querySelectorAll(".error");
  
    if (errors.length > 0 && invalidFields.length > 0) {
      event.preventDefault();
      return false;
    }
  
    return true;
  }
  