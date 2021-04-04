// grab 
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');


// 
form.addEventListener('submit', function(e) {
    e.preventDefault();
    checkInputs();
})


function checkInputs () {
    // get the values from the inputs
    const userNameValue = username.value.trim()
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim()
    const password2Value = password2.value.trim()

    if(userNameValue == ''){
        // show error
        // add error class
        // inja username hamun inpute username mishe va message ke mikham neshun bede age error bud 
        setErrorfor(username, 'Username cannot be balck')
    } else {
        // add success class
        setSuccessfor(username)
    }

    if(emailValue === ''){
        setErrorfor(email, 'Email cannot be blank')
    } else if(!isEmail(emailValue)) {
        setErrorfor(email, 'Email is not valid')
    } else {
        setSuccessfor(email)
    }

    if(passwordValue === ''){
        setErrorfor(password, 'password cannot be blank')
    } else {
        setSuccessfor(password)
    }

    if(password2Value == ''){
        setErrorfor(password2, 'password cannot be blank')
    } else if(passwordValue !== password2Value) {
        setErrorfor(password2, 'passwords does not match')
    }else {
        setSuccessfor(password2)
    }

}



function setErrorfor(input, message){
    // input.parentElement    div hast ba 2ta classe form-control error
    const formControl = input.parentElement;
    // inja tage small ro ba querySelector migiram 
    const small = formControl.querySelector('small');
    // add error message inside samll 
    small.innerText = message;
    // add erro class
    formControl.className = "form-control error";
}

function setSuccessfor(input){
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}

// bara control email hast 
function isEmail(email){
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

