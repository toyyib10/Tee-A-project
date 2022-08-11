let fName;
let uName;
let email;
let pNumber;
let pWord;
let unsaved_info = [];
let termCheck = false;
let emailCheck = true;
let info;
let index;

const loadData = () => {
  if (localStorage.tee_AInformation){
    unsaved_info = JSON.parse(localStorage.tee_AInformation)
  }
}

invalidCheck2.addEventListener("click",function(){
  termCheck =  true;
});

const createAccount = () =>{
  fName = fullName.value;
  uName = userName.value;
  email = eMail.value;
  pNumber = phoneNumber.value;
  pWord = passWord.value;
  if (fName == "" || uName ==  "" || email == "" || pNumber == "" || pWord == "" || termCheck == false){
    
    (function () {
      'use strict'

      var forms = document.querySelectorAll('.needs-validation')

      Array.prototype.slice.call(forms)
        .forEach(function (form) {
          form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
              event.preventDefault()
              event.stopPropagation()
            }
            form.classList.add('was-validated')
        }, false)
      })
    })()
  }
  else{
    submitButton.type = "button"
    let i = 0;
    while (i < unsaved_info.length) {
      if (unsaved_info[i].e_mail == email){
        emailCheck = false;
      }
      i++
    }
    if (emailCheck == true){
      alertMessage.style.display = "none"
      info  = {
        full_name : fName,
        user_name : uName,
        e_mail : email,
        phone_number : pNumber,
        pass_word : pWord,
        cart : []
      }
      unsaved_info.push(info)
      localStorage.tee_AInformation = JSON.stringify(unsaved_info)
      index = unsaved_info.length - 1
      localStorage.index = JSON.stringify(index)
      window.location.href = "userPage.html"
      fullName.value = "";
      userName.value = "";
      eMail.value = "";
      phoneNumber.value = "";
      passWord.value = "";
    }
    else if (emailCheck == false) {
      alertMessage.style.display = "block"
      alertMessage.innerHTML = `<div  class="alert col-md-9 col-10 alert-danger" style="text-align:center;">Email already exists</div>`
      emailCheck = true;
    }
  }
}
