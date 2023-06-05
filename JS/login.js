function val(){
    var Username =document.getElementById("form2Example11").value;
    var password =document.getElementById("form2Example22").value;
    if(Username == "perscholas@gmail.com" && password=="Livelife"){
        window.location.assign("index.html");
        alert("Login Successfully");
    }else{
        alert("Login Failed");
        return;
    }
    
}