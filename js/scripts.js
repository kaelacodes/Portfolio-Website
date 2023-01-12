//function validates email and message inputs in real-time & "Success!"/"Error!" alert with event listener

(function(){
    let form = document.querySelector("#contact-form");
    let emailInput = document.querySelector("#email");
    let messageInput = document.querySelector("#message");
    let submitButton = document.querySelector("#submit-form");
    let telInput= document.querySelector("#tel");
    
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

    function validateEmail(){
        let value = emailInput.value;

        if(!value){
            showErrorMessage(emailInput,"Email is a required field!");
            return false;
        }
        if(value.indexOf("@") === -1){
            showErrorMessage(emailInput,"You must enter a valid email address!");
            return false;
        }
        if(value.indexOf(".") === -1){
            showErrorMessage(emailInput,"You must enter a valid email address!");
            return false;
        }
        else {
        showErrorMessage(emailInput, null);
        return true;
        }
    }

    function validateMessage(){
        let value = messageInput.value;
        if(!value){
            showErrorMessage(messageInput,"Must enter a message!");
            return false;
        }
        if(value.indexOf("")>10){
            showErrorMessage(messageInput,"Message must be at least 10 characters!");
            return false;
        }

        showErrorMessage(messageInput, null);
        return true;
    }

    function validateTel(){
        let value = telInput.value;

        if(!value){
            showErrorMessage(telInput,"Must enter a phone number!");
            return false;
        }
        if(value.length < 10){
            showErrorMessage(telInput,"Phone number must be at least 10 digits!");
            return false;
        }

        showErrorMessage(telInput, null);
        return true;
    }

    function validateForm(){
        if(validateEmail(true) && validateMessage(true) && validateTel(true)){
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

