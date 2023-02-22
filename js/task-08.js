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
        console.log({email, password});
        event.currentTarget.reset();
        } else alert(`Please, complete all feelds`);

}
