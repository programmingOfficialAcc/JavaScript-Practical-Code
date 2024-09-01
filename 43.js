function validateForm(){
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    console.log(username, password);

    if(validateUserName(username)){
        console.log("Username is valid.");
    }else{
        console.log("Username is invalid. It must be 4-12 characters long and must only contain letters and numbers.");
    }

    if(validatePassword(password)){
        console.log('Password is valid.')
    }else{
        console.log('Password is invalid. It must be at least 8 characters long and contain at least one uppercase letter and one special character.');
    }

}

function validateUserName(username){
    const usernamePattern = /^[a-zA-Z0-9].{4,12}$/;
    return usernamePattern.test(username);
}

function validatePassword(password){
    const passwordPattern = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+[\]{};':\\|,.<>\/?`~]).{8,}$/;
    return passwordPattern.test(password);
}