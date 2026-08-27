const form=document.getElementById('agencyForm');
const button=document.getElementById('submitButton');
const statusText=document.getElementById('formStatus');
document.getElementById('year').textContent=new Date().getFullYear();
form.addEventListener('submit',(event)=>{
  if(!form.checkValidity()){
    event.preventDefault();
    form.reportValidity();
    return;
  }
  button.disabled=true;
  button.classList.add('loading');
  statusText.textContent='Sending your request…';
  statusText.style.color='#0d7fd9';
});

const form = document.getElementById("checklistForm");
const successMessage = document.getElementById("successMessage");
const formStatus = document.getElementById("formStatus");
const submitButton = document.getElementById("submitButton");

form.addEventListener("submit", async function(event) {

    event.preventDefault();

    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    submitButton.disabled = true;
    submitButton.textContent = "Sending...";

    formStatus.textContent = "";

    const formData = new FormData(form);

    try {

        const response = await fetch(
            "https://formsubmit.co/ajax/zedricksalupito@gmail.com",
            {
                method: "POST",
                headers: {
                    "Accept": "application/json"
                },
                body: formData
            }
        );

        if (!response.ok) {
            throw new Error("Form submission failed");
        }

        // Hide form only after successful submission
        form.style.display = "none";

        // Display checklist message
        successMessage.style.display = "block";

        // Scroll to checklist
        successMessage.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

        form.reset();

    } catch (error) {

        console.error(error);

        formStatus.textContent =
            "Sorry, something went wrong. Please try again.";

        submitButton.disabled = false;
        submitButton.textContent = "Get My Checklist";
    }

});
