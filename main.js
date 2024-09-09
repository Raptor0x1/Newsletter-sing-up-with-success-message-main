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
        emailErrorColor.classList.toggle('error-state');
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


form.addEventListener('submit', handleFormSubmit);

