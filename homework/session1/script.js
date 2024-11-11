// Validate the form

function validateForm() {
    // Prevent the form from submitting
    event.preventDefault();
    // Retrieving form elements' values
    const fname = document.getElementById("fname").value.trim();
    const lname = document.getElementById("lname").value.trim();
    const email = document.getElementById("email").value.trim();
    const age = document.getElementById("age").value.trim();
    const gender = document.querySelector('input[name="gender"]:checked');
    const hobbies = document.querySelectorAll('input[name="hobbies"]:checked');

    // Retrieving Error Display Elements
    const fnameError = document.getElementById("fname-error");
    const lnameError = document.getElementById("lname-error");
    const emailError = document.getElementById("email-error");
    const genderError = document.getElementById("gender-error");
    const ageError = document.getElementById("age-error");
    const hobbiesError = document.getElementById("hobbies-error");

    //// Reset error messages
    fnameError.textContent = "";
    lnameError.textContent = "";
    emailError.textContent = "";
    genderError.textContent = "";
    ageError.textContent = "";
    hobbiesError.textContent = "";

    //Validation fields

    let isValid = true;

    if (fname === "" || /\d/.test(fname)) {
        fnameError.textContent =
            "Please enter your first name properly.";
        isValid = false;
    }

    if (lname === "" || /\d/.test(lname)) {
        lnameError.textContent =
            "Please enter your lastt name properly.";
        isValid = false;
    }

    if (email === "" || !email.includes("@")) {
        emailError.textContent =
            "Please enter a valid email address.";
        isValid = false;
    }

    if (age === "" || isNaN(age)) {
        ageError.textContent =
            "Please enter your age in numbers.";
        isValid = false;
    }

    if (gender === "") {
        genderError.textContent =
            "Please select your gender.";
        isValid = false;
    }

    if (hobbies === "") {
        hobbiesError.textContent =
            "Please select your hobbies.";
        isValid = false;
    }

    return isValid;
}
// Attach the validateForm function to the form's submit event
document.querySelector("form").addEventListener("submit", validateForm);