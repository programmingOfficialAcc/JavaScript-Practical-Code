function validateForm(){
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const email = document.getElementById('email').value;
    const country = document.getElementById('country').value;

    if(username.length < 5 || username.length > 5){
        alert("Username should be of length 5!");
        // console.log(username.length)
        return false;
    }

    const passwordPattern = /^[0-9][a-zA-Z0-9]*$/;
    if(!passwordPattern.test(password)){
        alert(`Password must begin with a digit and be alphanumeric characters.`);
        return false;
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(!emailPattern.test(email)){
        alert(`Please enter a valid email address.`);
        return false;
    }

    if(country === ''){
        alert('Please select your country.');
        return false;
    }

    alert("Form Submitted Successfully!!!");
    
    return true;
}