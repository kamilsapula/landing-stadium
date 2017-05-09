$(".nav-hamburger").click(function(){
  $(".nav-mobile").stop().slideToggle();
});

const submit = document.querySelector("#formSubmit");
const email = document.querySelector("#formEmail");
const emailRepeat = document.querySelector("#formEmailRepeat");
const textInput = document.querySelectorAll(".form-input[type='text']");

function validateText() {
 let regex = /\b\w{2,16}\b/g;
  
  for (let i = 0; i < textInput.length; i++) {
    
    if (regex.test(textInput[i].value) == 0) {
      alert("Pole tekstowe wypełnione niepoprawnie");
      return false;
    }   
    else return true;
  }
}   

function validateEmail() {

  let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
  if (email.value !== emailRepeat.value || regex.test(email.value) == 0) {
      alert("Pola e-mail wypełnione niepoprawnie");
      return false;
  }
  else return true;
}

submit.addEventListener("click", function(){
  validateText();
  validateEmail();
});

