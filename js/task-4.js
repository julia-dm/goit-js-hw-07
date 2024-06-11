const form = document.querySelector(".login-form");

form.addEventListener("submit", handlerGetComment);

function handlerGetComment(evt) {
    evt.preventDefault();
  const { email, password } = evt.currentTarget.elements;
  
    const emailValue = email.value.trim();
const passwordValue = password.value.trim();

  const data = {
    email: emailValue,
    password: passwordValue,
  };

 
    if (!email.value || !password.value) {
        alert('All form fields must be filled in');
        return;
    }
  

  console.log(data);
 document.querySelector(".login-form").reset();
}

