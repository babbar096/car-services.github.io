
//script to open or hide the navigational sidebar
document.querySelector(".hamburger-menu").addEventListener("click",() => {
        document.querySelector(".login").classList.toggle("change");
    });

    // Function to validate the user login
function validate(){
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    let storedMail = localStorage.getItem('mail');
    let storedPw = localStorage.getItem('pass');

    if(user == storedMail && pass == storedPw){
        alert('You are logged in.');
        window.location.href = 'index1.html'
    }else{
        alert('Error on login');
    }
}

//function to sign up a user
function register(){
    let lname = document.querySelector('#lname');
    let mail = document.querySelector('#mail');
    let pass = document.querySelector('#pass');
    let cpass = document.querySelector('#cpass');
    let fname = document.querySelector('#fname');

    let namepattern = /^[a-zA-Z]{2,50}$/;
    let mail_format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (fname.value == '') {
        document.querySelector('#output').innerHTML = "Please enter first name";
    }
    else if (!namepattern.test(fname.value)) {
        document.querySelector('#output').innerHTML = 'Please enter first name with letter only';
    } 
    else if (lname.value == '') {
        document.querySelector('#output1').innerHTML = "Please enter last name";
    }
    else if (!namepattern.test(lname.value)) {
        document.querySelector('#output1').innerHTML = 'Please enter last name with letter only';
    } 
    else if(mail.value == ''){
        document.querySelector('#output2').innerHTML = 'Please enter email address';
    }
    else if(!mail_format.test(mail.value)){
        document.querySelector('#output2').innerHTML = 'Please enter valid email address';
    }
    else if(pass.value == ''){
        document.querySelector('#output3').innerHTML = 'Please enter the password';
    }
    else if(pass.value.length < 8){
        document.querySelector('#output3').innerHTML = 'Password length must be atleast 8 characters';
    }
    else if(cpass.value == ''){
        document.querySelector('#output4').innerHTML = 'Please re-enter the password';
    }
    else if(cpass.value != pass.value){
        document.querySelector('#output4').innerHTML = 'Please enter the password as above';
    }
    else{
        localStorage.setItem('fname', fname.value);
        localStorage.setItem('lname', lname.value);
        localStorage.setItem('mail', mail.value);
        localStorage.setItem('pass', pass.value);
        localStorage.setItem('cpass', cpass.value);
        alert('Registration successful');
    }
}