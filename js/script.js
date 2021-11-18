        var images = ["./img/illustration-1.svg","./img/illustration-2.svg","./img/illustration-3.svg"];
        var i = 0;
        var renew = setInterval(function(){
            if(images.length == i){
                i = 0;
            }
            else {
            document.getElementById("bannerImage").src = images[i]; 
            i++;
            console.log("ended")

        }
        },4000);



var password = document.getElementById("password");
confirm_password = document.getElementById("confirmPassword");
      
function validatePassword(){
    if(password.value != confirm_password.value) {
      confirm_password.setCustomValidity("Enter the same password as before, for verification.");
    } else {
      confirm_password.setCustomValidity('');
    }
    console.log("password")
}
      
password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;