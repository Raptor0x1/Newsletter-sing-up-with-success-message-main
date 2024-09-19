const form = document.getElementById('form');

function handleFormSubmit(e) {
    e.preventDefault();

    const formData = new FormData(form);
    const {email} = Object.fromEntries(formData);

    const emailError = validateEmail(email);

    if (emailError) {
        const emailErrorElement = form.querySelector('#email-error');
        const emailErrorColor = document.getElementById('email');
        emailErrorElement.innerText = emailError;
        emailErrorColor.classList.add('error-state');
    }
    else {
        const successMessageElement = document.querySelector('.success-message');
        const container = document.querySelector('.form-container');
        const emailText = document.querySelector('.success-message .email-text');
        container.remove();
        successMessageElement.style.display = "block";
        emailText.innerText = email;
        emailErrorColor.classList.remove('error-state');
    }

    function validateEmail(email) {

        if (!email) return "Email required";
    
        const isEmail = /^\S+@\S+$/g;
        if (!isEmail.test(email)) {
            return "Valid email required";
        }
    
        return "";
    }


}


