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

