function login(){
    var uname = document.getElementById('first').value;
    if(uname){
        location.assign('http://127.0.0.1:5500/home.html');
    }
    else
    {
        window.alert("Login faild");
    }
}
