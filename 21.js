function validateForm(){
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if(username.length < 4){
        alert('Username should be atleast 4 characters long.');
        return false;

    }


    const passwordPattern = /^[0-9].*\$$/;
    if(!passwordPattern.test(password)){
        alert('Password should start with a digit and end with $ sign.');
        return false;
    }

    alert('Form Validated Successfully!');
    return true;
}