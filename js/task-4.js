
const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const emailInput = event.target.elements.email;
  const passwordInput = event.target.elements.password;

  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  if (email === "" || password === "") {
    alert("All form fields must be filled in");
  } else {
    const formData = {
      email: email,
      password: password
    };

    console.log(formData);

    event.target.reset();
  }
}
