function email_funnction() {
    var email = document.emailform.email.value;
    if(email.indexOf('@')<=0){
        document.getElementById('errormsg').innerHTML="Invalid your Email Address";
        return false;
    }     
    if ((email.charAt(email.length-4)!='.') && (email.charAt(email.length-3)!='.')) {
        document.getElementById('errormsg').innerHTML="Invalid your Email Address";
        return false;
    }
}