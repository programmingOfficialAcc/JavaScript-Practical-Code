function validateForm(){
    const password = document.getElementById('password').value;
    console.log(password);

    if(validatePassword(password)){
        console.log('Password is valid.');
    }else{
        console.log('Password is invalid. It must include atleast one uppercase letter, one lowercase letter and one special symbol.');
        return false;
    }
    return true;

}

function validatePassword(password){
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+[\]{};':\\|,.<>\/?`~]).{8,}$/;
    return passwordPattern.test(password);
}