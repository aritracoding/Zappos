function register(){
    var email = document.getElementById('login-email').value;
    var password = document.getElementById('login-pass').value;
    var data = {email: email, password: password};
    var finalData = JSON.stringify(data);
    if(email.length > 0 && password.length > 5) {
        localStorage.setItem('login',finalData);
        window.location.href = "./home.html";
        alert("SignUp Success");
    } else {
        alert("SignUp Failure");
    } 
}