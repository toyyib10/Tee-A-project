let password;
const load = () => {
  console.log("working")
}
const logIn = () => {
  password = passWord.value;
  submitButton.type = "submit"
  if (password == "") {
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
  else {
    submitButton.type = "button"
    if (password == "admin") {
      window.location.href = "../admin page/home.html"
    }
  }
}