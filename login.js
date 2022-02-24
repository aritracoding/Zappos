function login (){
    var email = document.getElementById('login-email').value;
    var password = document.getElementById('login-pass').value;

    var data = localStorage.getItem('login');
    var finalData = JSON.parse(data);   
    if(finalData.email == email && finalData.password == password){
        console.log('good');
        window.location.href = "./home.html";
        alert("Login Success")
    } else {
        alert("please check your email address and password");
    }
}