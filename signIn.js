let saved_Info = []
let username;
let email;
let check = false;
let password;

const loadData = () => {
  saved_Info = JSON.parse(localStorage.tee_AInformation)
}

const logIn = () => {
  submitButton.type = "submit"
  if (user_mail.value == "" || passWord.value == "") {
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
    alertDanger.style.display = "none";
  }
  else{
    submitButton.type = "button"
    for (let index = 0; index < saved_Info.length; index++) {
      let umail = user_mail.value;
      let pWord = passWord.value;
      username = saved_Info[index].user.user_name;
      email = saved_Info[index].user.e_mail;
      password = saved_Info[index].user.pass_word;
      if ((umail == username || umail == email) && pWord == password) {
        check = true;
        break;
      }
      else{
        continue;
      }
    }
    if (check == true) {
      window.location.href = "user-landing-page.html";
      user_mail.value = "";
      alertDanger.style.display = "none";
    }
    else if (check == false) {
      alertDanger.style.display = "block"
    }
  }
}
const displayNone = () => {
  alertDanger.style.display = "none";
}
