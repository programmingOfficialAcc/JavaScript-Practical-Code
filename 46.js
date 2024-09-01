function validateForm(){
    const price = document.getElementById('price').value;
    const quantity = document.getElementById('quantity').value;

    if(price <= 0){
        alert('Please enter a valid price greater than zero.');
        return false;
    }

    if(quantity < 0){
        alert('Please enter a valid positive integer for the quantity of product.')
        return false;
    }
    console.log('Form Validated!');
    return true;
}