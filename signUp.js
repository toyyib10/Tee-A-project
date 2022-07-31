let fName;
let uName;
let email;
let pNumber;
let pWord;
let unsaved_info = [];
let termCheck = false;
let info;

const loadData = () => {
  if (localStorage.tee_AInformation){
    unsaved_info = JSON.parse(localStorage.tee_AInformation)
    console.log(unsaved_info)
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
    // Example starter JavaScript for disabling form submissions if there are invalid fields
    (function () {
      'use strict'

      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.querySelectorAll('.needs-validation')

      // Loop over them and prevent submission
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
    info = {
      user: {
        full_name : fName,
        user_name : uName,
        e_mail : email,
        phone_number : pNumber,
        pass_word : pWord,
      }
    }
    unsaved_info.push(info)
    localStorage.tee_AInformation = JSON.stringify(unsaved_info)
    window.location.href = "user-landing-page.html"
    fullName.value = "";
    userName.value = "";
    eMail.value = "";
    phoneNumber.value = "";
    passWord.value = "";
  }
}
