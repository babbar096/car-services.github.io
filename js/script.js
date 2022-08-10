document.querySelector(".side-menu").
    addEventListener("click", ()=> {
        document.querySelector(".container").classList.toggle("change");
});

function validateEmail(inputText){
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(inputText.value.match(mailformat)){
        alert("Brochure has been sent to your email address!");
        document.form1.text1.focus();
        return true;
    }else{
        alert("You have entered an invalid email address!");
        document.form1.text1.focus();
        return false;
    }
}