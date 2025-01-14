function validateForm() {
    const form = document.getElementById("surveyForm");
    let valid = true;

    // Clear any previous error messages
    const errorMessages = document.querySelectorAll(".error-message");
    errorMessages.forEach(msg => msg.style.display = 'none');

    // if at least one radio button is selected
    const likePage = form.querySelector('input[name="likePage"]:checked');
    const likePageError = document.getElementById("likePageError");
    if (!likePage) {
        likePageError.textContent = "Please select if you like the Resident Evil page.";
        likePageError.style.display = 'inline';
        valid = false;
    }

    return valid; 
}


//I provided the data/form validation including comments to tell you what each part does.
//I hope this is okay! I wanted to do something specific with the error messages and all!
//If you hover the cursor over some of the areas of the form, it will say "Please fill out this field"
//(If you have trouble seeing the error messages pop up on my page):)