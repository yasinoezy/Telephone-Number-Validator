document.getElementById('check-btn').addEventListener('click', validatePhoneNumber);
document.getElementById('clear-btn').addEventListener('click', clearResults);

function validatePhoneNumber() {
    const input = document.getElementById('user-input').value.trim();
    const resultsDiv = document.getElementById('results-div');

    // Alert if input is empty
    if (!input) {
        alert("Please provide a phone number");
        return;
    }

    const phoneRegex = /^(1\s?)?(\(?\d{3}\)?[\s\-]?)?\d{3}[\s\-]?\d{4}$/;

    if (phoneRegex.test(input)) {
        resultsDiv.textContent = `Valid US number: ${input}`;
        resultsDiv.style.color = 'green';
    } else {
        resultsDiv.textContent = `Invalid US number: ${input}`;
        resultsDiv.style.color = 'red';
    }
}

function clearResults() {
    document.getElementById('user-input').value = '';
    document.getElementById('results-div').textContent = '';
}
document.getElementById("check-btn").addEventListener("click", function () {
  var userInput = document.getElementById("user-input").value;
  var resultDiv = document.getElementById("results-div");
  
  // Regular expression for US phone number (e.g., 555-555-5555)
  var validPhonePattern = /^(1\s?)?(\(\d{3}\)|\d{3})([\s\-]?)\d{3}([\s\-]?)\d{4}$/;
  
  // Check if the input matches the pattern
  if (validPhonePattern.test(userInput)) {
    resultDiv.textContent = "Valid US number: " + userInput;
  } else {
    resultDiv.textContent = "Invalid US number: " + userInput;
  }
});
