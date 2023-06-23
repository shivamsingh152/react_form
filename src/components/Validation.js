const Validation = (users) =>{
     let error = {};
     const name_pattern = /^[a-zA-Z ]{2,30}$/;
     const phone_pattern = /^(\+\d{1,3}[- ]?)?\d{10}$/
     const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

     if(users.name === '') {
        error.name = 'Name should not be empty';
     }
     if(!name_pattern.test(users.name)){
         error.name = "Name didn't match"
     }
     if(users.phone === '') {
        error.phone = 'Phone no. should not be empty';
     }
     if(!phone_pattern.test(users.phone)){
         error.phone = "Phone no. didn't match"
     }
     if(users.email === '') {
        error.email = 'Email should not be empty';
     }
     if(!email_pattern.test(users.email)){
         error.email = "Email didn't match"
     }

     return error;
}

export default Validation;