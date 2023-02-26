const form = document.querySelector('.login-form');

form.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event){
    event.preventDefault();
    const {
        elements: {
            email,
            password
        }} = event.currentTarget;
    
    if (email.value !== '' & password.value !== '') {
        console.dir(event.currentTarget);
        console.log({email : email.value, password : password.value});
        event.currentTarget.reset();
        } else alert(`Please, complete all feelds`);

}
