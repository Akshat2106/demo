function tolocalstorage(e){
    e.preventDefault();
    const name=e.target.username.value;
    const email=e.target.emailId.value;
    const phonenumber=e.target.phonenumber.value;
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('phonenumber', phonenumber);
    
}