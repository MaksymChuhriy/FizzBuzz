// Get references to the button and input container
const button = document.getElementById("showInputButton");
const inputContainer = document.getElementById("inputContainer");

// Add a click event listener to the button
button.addEventListener("click", function () {
  // Clear any previous input fields
  inputContainer.innerHTML = "";

  // Create an input field and a submit button
  const inputField = document.createElement("input");
  inputField.type = "number";
  inputField.placeholder = "Enter a number";

  const submitButton = document.createElement("button");
  submitButton.textContent = "Submit";

  // Add the input field and button to the container
  inputContainer.appendChild(inputField);
  inputContainer.appendChild(submitButton);

  // Handle the submit button click
  submitButton.addEventListener("click", function () {
    const enteredValue = inputField.value;
    if (enteredValue) {
      alert(`You entered: ${enteredValue}`);
    } else {
      alert("Please enter a number!");
    }
  });
});

// // Write a program that takes a user’s input and prints the numbers from one to the number the user entered. 
//  however, for multiples of three print Fizz instead of the number
//  and for the multiples of five print Buzz. For numbers which are multiples of both three and five print FizzBuzz.