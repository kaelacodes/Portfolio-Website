//function validates email and message inputs in real-time & "Success!"/"Error!" alert with event listener

(function(){
    let form = document.querySelector("#contact-form");
    let nameInput = document.querySelector("#name");
    let emailInput = document.querySelector("#email");
    let messageInput = document.querySelector("#message");
    let telInput= document.querySelector("#tel");
    let submitButton = document.querySelector("#submit-form");
    
    function showErrorMessage(input,message){
        let container = input.parentElement;
        let error = container.querySelector(".error-message");
        if(error){
            container.removeChild(error);
        }
        if(message){
            let error = document.createElement("div");
            error.classList.add("error-message");
            error.innerText = message;
            container.appendChild(error);
        }
    }

    function validateName(){
        let value = nameInput.value;

        if(!value){
            //Add code for CSS styling to input box when errorMessage is displayed
            nameInput.classList.add("error-input");
            showErrorMessage(nameInput,"Name is a required field!");
            return false;
        }
        else {
            //Remove code for CSS styling to input box and does NOT display error message
            nameInput.classList.remove("error-input");
            showErrorMessage(nameInput, null);
            return true;
        }
    }

    function validateEmail(){
        let value = emailInput.value;

        if(!value){
            //Add code for CSS styling to input box when errorMessage is displayed
            emailInput.classList.add("error-input");
            showErrorMessage(emailInput,"Email is a required field!");
            return false;
        }
        if(value.indexOf("@") === -1){
            //Add code for CSS styling to input box when errorMessage is displayed
            emailInput.classList.add("error-input");
            showErrorMessage(emailInput,"You must enter a valid email address!");
            return false;
        }
        if(value.indexOf(".") === -1){
            //Add code for CSS styling to input box when errorMessage is displayed
            emailInput.classList.add("error-input");
            showErrorMessage(emailInput,"You must enter a valid email address!");
            return false;
        }
        else {
            //Remove code for CSS styling to input box and does NOT display error message
            emailInput.classList.remove("error-input");
            showErrorMessage(emailInput, null);
            return true;
        }
    }

    function validateMessage(){
        let value = messageInput.value;
        if(!value){
            //Add code for CSS styling to input box when errorMessage is displayed
            messageInput.classList.add("error-input");
            showErrorMessage(messageInput,"Must enter a message!");
            return false;
        }
        if(value.length < 10){
            //Add code for CSS styling to input box when errorMessage is displayed
            messageInput.classList.add("error-input");
            showErrorMessage(messageInput,"Message must be at least 10 characters!");
            return false;
        }
        else{
            //Remove code for CSS styling to input box and does NOT display error message
            messageInput.classList.remove("error-input");
            showErrorMessage(messageInput, null);
            return true;
        }
    }

    function validateTel(){
        let value = telInput.value;

        if(!value){
            //Add code for CSS styling to input box when errorMessage is displayed
            telInput.classList.add("error-input");
            showErrorMessage(telInput,"Must enter a phone number!");
            return false;
        }
        if(value.length < 10){
            //Add code for CSS styling to input box when errorMessage is displayed
            telInput.classList.add("error-input");
            showErrorMessage(telInput,"Phone number must be at least 10 digits!");
            return false;
        }
        else{
            //Remove code for CSS styling to input box and does NOT display error message
            emailInput.classList.add("error-input");
            showErrorMessage(telInput, null);
            return true;
        }
    }

    function validateForm(){
        if(validateName(true) && validateEmail(true) && validateMessage(true) && validateTel(true)){
            return true;
        }
    }

    submitButton.addEventListener("click", (e) => {
    e.preventDefault(); //do not submit to server
        if(validateForm(true)){
            alert("Success!");
        }
        else{
            alert("Error!");
        }
    })
})();