function validate(){
    var usernameError = document.getElementById("usernameError");
    var emailError = document.getElementById("emailError");
    var passwordError = document.getElementById("passwordError");
    var addressError = document.getElementById("addressError");
    var copiesError = document.getElementById("copiesError");
    var gameTypeError = document.getElementById("gameTypeError");
    var agreementError = document.getElementById("agreementError");

    usernameError.style.display = "none";
    emailError.style.display = "none"
    passwordError.style.display = "none";
    addressError.style.display = "none";
    copiesError.style.display = "none";
    gameTypeError.style.display = "none";
    agreementError.style.display = "none";

    var username, email, password, address, gameType, copies;

    username = document.getElementById("inputName").value;
    if(username.length < 3){
        // alert("username should be more than 2 characters");
        usernameError.style.display = "block";
        // return;
    }

    email = document.getElementById("inputEmail").value;
    var idxDot = -1;
    var idxAt = -1;
    for(let i = 0 ; i < email.length; i++){
        if(email.charAt(i) == '@'){
            idxAt = i;
        }
        else if(email.charAt(i) == '.'){
            idxDot = i;
        }
    }
    if(idxDot == -1 || idxAt == -1 || idxDot - idxAt <= 1){
        // alert("please enter your email correctly");
        emailError.style.display = "block";
        // return;
    }

    password = document.getElementById("inputPassword").value;
    if(!password || password.length < 8){
        // alert("password must be more than 7 characters");
        passwordError.style.display = "block";
        // return;
    }

    address = document.getElementById("inputAddress").value;
    if(!address){
        // alert("please enter your address");
        // return;
        addressError.style.display = "block";
    }

    copies = document.getElementById("inputCopies").value;
    if(!(copies) || copies < 0 || copies >= 'a' && copies <= 'z' || copies >= 'A' && copies <= 'Z'){
        // alert("please input atleast one copy of the game");
        // return;
        copiesError.style.display = "block";
    
    }

    if(!(document.getElementById("type_standard").checked) &&!(document.getElementById("type_deluxe").checked) ){
        // alert("please choose game type");
        // return;
        gameTypeError.style.display = "block";
    }

    if(!(document.getElementById("inputAgreement").checked)){
        agreementError.style.display = "block"
    }
}