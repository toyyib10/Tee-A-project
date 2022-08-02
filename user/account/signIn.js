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
        localStorage.index = JSON.stringify(index)
        break;
      }
      else{
        continue;
      }
    }
    if (check == true) {
      window.location.href = "userPage.html";
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
