let index;
let saved_Info = [];
let user;
let fullname;
let username;
let email;
let phonenumber;
let password;

const load = () => {
  saved_Info = JSON.parse(localStorage.tee_AInformation)
  index = JSON.parse(localStorage.index)
  user = saved_Info[index].user
  let {full_name,user_name,e_mail,phone_number,pass_word} = user;

  fullname = full_name;
  username = user_name;
  email = e_mail;
  phonenumber = phone_number;
  password = pass_word;
}

const editFunc = () => {
  
  staticBackdropLabel.innerHTML = "Edit Information"
  modalDisplay.innerHTML = `
   <form class="col-12 d-flex flex-column align-items-center justify-content-center needs-validation">
    <div id="alertMessage" class="w-75" style="display:none;"></div>
    <div class="w-100 user-sub-container pb-2">
      <label for="fullName" class="form-label user-name-label">Full Name</label>
      <input type="text" style="text-transform: capitalize;" class="form-control border-0 p-0 w-100 user-input m-0" id="fullName" required>
    </div>
    <div class="w-100 user-sub-container pb-2">
      <label for="userName" class="form-label user-name-label">Username</label>
      <input type="text" class="form-control border-0 p-0 w-100 user-input m-0" id="userName" required>
    </div>
    <div class="w-100 user-sub-container pb-2">
      <label for="eMail" class="form-label user-name-label">E-mail</label>
      <input type="email" class="form-control border-0 p-0 w-100 user-input m-0" id="eMail" required>
    </div>
    <div class="w-100 user-sub-container pb-2">
      <label for="phoneNumber" class="form-label user-name-label">Phone Number</label>
      <input type="number" class="form-control border-0 p-0 w-100 user-input m-0" id="phoneNumber" required>
    </div>
    <div class="w-100 user-sub-container pb-2">
      <label for="passWord" class="form-label user-name-label">Password</label>
      <input type="password" class="form-control border-0 p-0 w-100 user-input m-0" id="passWord"
      required>
    </div>
    <button class="mt-3 btn rounded-3 col-10 col-md-6 fs-4 shadow-lg mb-1" style="background-color:#AF2AA0; color:white;" id="submitButton" onclick="changeInfo()" type="button">
      EDIT
    </button>
   </form>
  `

  fullName.value = fullname;
  userName.value = username;
  eMail.value = email;
  phoneNumber.value = phonenumber;
  passWord.value = password;  

}

const changeInfo = () => {
  alertMessage.style.display = "none";
  submitButton.type = "submit";
  if (fullName.value == ""  ||  userName.value == "" || eMail.value == "" || phoneNumber.value == "" || passWord.value == "") {
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

    alertMessage.style.display = "none";
  }
  else{
    submitButton.type = "button";
    if (fullName.value == fullname && userName.value == username && eMail.value == email && phoneNumber.value == phonenumber && passWord.value == password){
      alertMessage.style.display = "block";
      alertMessage.innerHTML = `<div class="alert alert-danger">No change made</div>`;
    }
    else{
      alertMessage.style.display = "none";
      saved_Info.splice(index,1)
      user  = {
        full_name : fullName.value,
        user_name : userName.value,
        e_mail : eMail.value,
        phone_number : phoneNumber.value,
        pass_word : passWord.value
      };
      saved_Info.push(user);
      localStorage.tee_AInformation = JSON.stringify(saved_Info);
      window.location.href = "signIn.html";
    }
  }
}
const deleteFunc = () => {
  staticBackdropLabel.innerHTML = "Delete Account"
  modalDisplay.innerHTML = `
   <form class="col-12 d-flex flex-column align-items-center justify-content-center needs-validation">
   <div id="alertMessage" class="w-100 alert alert-danger" style="display:none;"></div>
    <div class="w-100 user-sub-container pb-2">
      <label for="eMail" class="form-label user-name-label">E-mail</label>
      <input type="email" class="form-control border-0 p-0 w-100 user-input m-0" id="eMail" required>
    </div>
    <div class="w-100 user-sub-container pb-2">
      <label for="passWord" class="form-label user-name-label">Password</label>
      <input type="password" class="form-control border-0 p-0 w-100 user-input m-0" id="passWord"
      required>
    </div>
    <button class="mt-3 btn rounded-3 col-10 col-md-6 fs-4 shadow-lg mb-1" style="background-color:#AF2AA0; color:white;" id="submitButton" onclick="deleteAccount()" type="button">
      Delete
    </button>
   </form>
  `
  
}
const deleteAccount = () => {
  submitButton.type = "submit";
  alertMessage.style.display = "none";
  console.log(email , password)
  if (eMail.value == "" || passWord.value == "") {
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
    alertMessage.style.display = "none"
  }
  else{
    submitButton.type = "button";
    if (eMail.value != email  || passWord.value != password) {
      alertMessage.innerHTML = "Incorrect email or password";
      alertMessage.style.display = "block";
    }
    else {
      alertMessage.style.display = "none"
      const check = confirm("Are you sure you want to delete your account");
      if (check == true){
        checked()
      }
      else{
        window.location.href = "userPage.html";
      }
    }
  }
}
const checked = () => {
  saved_Info.splice(index,1)
  alertMessage.innerHTML = 'account has been successfully deleted';
  localStorage.tee_AInformation = JSON.stringify(saved_Info)
  window.location.href = 'signUp.html';
}