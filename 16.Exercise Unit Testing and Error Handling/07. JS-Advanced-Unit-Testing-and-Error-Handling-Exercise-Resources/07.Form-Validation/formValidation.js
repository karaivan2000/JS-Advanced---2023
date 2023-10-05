function validate() {
    const companyField = document.getElementById(`companyInfo`);
    const companyCheck = document.getElementById(`company`);
    const form = document.getElementById(`registerForm`);

    companyCheck.addEventListener(`change`, () => {
        if (companyCheck.checked) {
            companyField.style.display = `block`;
        } else {
            companyField.style.display = `none`;
        }
    });

    form.addEventListener(`sumbit`, (e) => {
        

        const usernameInput = document.getElementById(`username`);
        const emailInput = document.getElementById(`email`);
        const passwordInput = document.getElementById(`password`);
        const rePasswordInput = document.getElementById(`confirm-password`);
        const companyNumberInput = document.getElementById(`companyNumber`);

        const validField = document.getElementById(`valid`);

        const usenamePattern = /^[a-zA-Z0-9]+$/;
        const passwordPattern = /^[\w]+$/;
        const emailPattern = /.*@.*\..*/;

        let usernameIsValid = false;
        let passwordIsValid = false;
        let rePasswordIsValid = false;
        let emailIsValid = false;
        let companyNumberIsValid = false;

        if (usenamePattern.test(usernameInput.value) &&
            usernameInput.value.length >= 3 &&
            usernameInput.value.length <= 20) {
                usernameIsValid = true;
        }

        if (emailPattern.test(emailInput.value)) {
            emailIsValid = true;
        }

        if (passwordPattern.test(passwordInput.value) &&
        passwordInput.value.length >= 5 && 
        passwordInput.value.length <= 15 &&
        passwordInput === rePasswordInput) {
            passwordIsValid = true;
            rePasswordIsValid = true;
        }

        if (companyCheck.checked) {
            if (companyNumberInput.value >= 1000 && companyNumberInput.value <= 9999) {
                companyNumberIsValid = true;
            }
        } else {
            companyNumberIsValid = true;
        }

        if (usernameIsValid && passwordIsValid && emailIsValid && companyNumberIsValid) {
            validField.style.display = "block";
        } else {
            validField.style.display = "none";
        }

        if (!usernameIsValid) {
            usernameInput.style.borderColor = "red";
        } else {
            usernameInput.style.border = "none";
        }

        if (!passwordIsValid) {
            passwordInput.style.borderColor = "red";
        } else {
            passwordInput.style.border = "none";
        }

        if (!rePasswordIsValid) {
            rePasswordInput.style.borderColor = "red";
        } else {
            rePasswordInput.style.border = "none";
        }

        if (!emailIsValid) {
            emailInput.style.borderColor = "red";
        } else {
            emailInput.style.border = "none";
        }

        if (!companyNumberIsValid) {
            companyNumberInput.style.borderColor = "red";
        } else {
            companyNumberInput.style.border = "none";
        }
    });
}
