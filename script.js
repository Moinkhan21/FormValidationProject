// Add an event listener to the form for the 'submit' event
document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior
  
    // Get the values from the form inputs and trim any extra whitespace
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    
    // Get references to the error message elements
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
  
    // Flag to determine if the form is valid
    let isValid = true;
  
    // Validate the email input
    if (!email) {
      emailError.textContent = 'Please enter your email'; // Set error message if email is empty
      isValid = false; // Form is invalid
    } else if (!validateEmail(email)) {
      emailError.textContent = 'Invalid email address'; // Set error message if email format is incorrect
      isValid = false; // Form is invalid
    } else {
      emailError.textContent = ''; // Clear the error message if email is valid
    }
  
    // Validate the password input
    if (!password) {
      passwordError.textContent = 'Please enter your password'; // Set error message if password is empty
      isValid = false; // Form is invalid
    } else if (!validatePassword(password)) {
      passwordError.textContent = 'Password must be at least 6 characters long'; // Set error message if password length is insufficient
      isValid = false; // Form is invalid
    } else {
      passwordError.textContent = ''; // Clear the error message if password is valid
    }
  
    // If the form is valid, proceed with further actions
    if (isValid) {
      console.log('Form submitted'); // Log a message indicating form submission
      // Additional form submission logic or actions can be added here
    }
  });
  
  // Function to validate the email format
  function validateEmail(email) {
    // Find positions of '@' and '.' in the email string
    const atPosition = email.indexOf('@');
    const dotPosition = email.lastIndexOf('.');
    
    // Check if '@' is present and positioned correctly
    // Check if '.' is present and positioned correctly after '@'
    return atPosition > 0 && dotPosition > atPosition + 1 && dotPosition + 1 < email.length;
  }
  
  // Function to validate the length of the password
  function validatePassword(password) {
    // Ensure the password length is at least 6 characters
    return password.length >= 6;
  }
  