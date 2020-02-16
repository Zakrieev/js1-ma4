const form = document.querySelector("#contactForm");
form.addEventListener("submit", validateForm);

function validateForm(event) {
    event.preventDefault();

    const firstName = document.querySelector("#firstName");
    const firstNameError = document.querySelector("#firstNameError");
    const firstNameValue = firstName.value;

  if (checkInput(firstNameValue) === true) {
    errorname.style.display = "none";
  } else {
    errorname.style.display = "block";
  }
}

function checkInput(input) {
  const trimmedInput = input.trim();

  if (trimmedInput.length >= 2) {
    return true;
  } else {
    return false;
  }
}
