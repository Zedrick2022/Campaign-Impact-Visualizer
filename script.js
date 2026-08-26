const form = document.getElementById("checklistForm");
const submitBtn = document.getElementById("submitBtn");
const formStatus = document.getElementById("formStatus");

form.addEventListener("submit", (event) => {
  const email = document.getElementById("email").value.trim();
  const name = document.getElementById("name").value.trim();

  if (!name || !email) {
    event.preventDefault();
    formStatus.textContent = "Please enter your name and a valid email address.";
    formStatus.style.color = "#b42318";
    return;
  }

  submitBtn.disabled = true;
  submitBtn.classList.add("is-loading");
  formStatus.textContent = "Sending your request…";
  formStatus.style.color = "#0878d7";

  // Do not convert this submission to AJAX:
  // FormSubmit's autoresponse feature requires a normal form submission
  // with reCAPTCHA enabled.
});


