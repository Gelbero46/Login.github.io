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



// function submitForm() {
  
//   setTimeout(() => {
//     console.log("Hello")
//   }, 5000);

//   window.location.href="http://google.com";
// }

const submitForm = document.getElementById("submitForm")
var errorList = []
var commonPasswordList = ["123456", "password", "123456789", "qwerty",
                          "12345678", "1111111", "987654321", "1234qwer", "qwerty12"]
const errorShort = 'This password is too short, it must contain at least 8 characters.'
let errorCommon = 'This password is too common.'
let errorNumeric = 'This password is too numeric.'
let errorSimilar = 'This password is too similar to email address.'
submitForm.addEventListener("submit", (e)=> {
  e.preventDefault()
  console.log("Hello");
  var password = document.getElementById("password").value;
  console.log(password)
  


  let errorSection = document.getElementById("error");
  if (password.length < 8 && !errorList.includes(errorShort)){
    console.log("Invalid password");
    errorList.push(errorShort);
  }
  if (commonPasswordList.includes(password) && !errorList.includes(errorCommon)) {
    errorList.push(errorCommon);
  }

  if (!isNaN(password) && !errorList.includes(errorNumeric)) {
    errorList.push(errorNumeric);
  }

  const regex = new RegExp(password);
  const email = document.getElementById("email").value

  if(regex.test(email) && !errorList.includes(errorSimilar)) {
    errorList.push(errorSimilar)
  }

  if (errorList.length == 0) {
    window.location.href = "./home.html"
    }
  else {
    var html = ""
    errorList.forEach(e => 
      {
        console.log(e)
        html += `
          <li>${e}</li>
        `
      })
  
      console.log(html);
      var errorLog = `
        <ul>
          ${html}
        </ul
      `
      console.log(errorLog);
      console.log(errorList);
      errorSection.innerHTML = errorLog;
      
  }

  

  



  // console.log(typeof password);  
  


})

