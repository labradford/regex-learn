window.addEventListener('load', start)

function start(){
  contact.name.focus()
  //contact form variables
  let name = document.getElementById('name')
  let address = document.getElementById('address')
  let address2 = document.getElementById('address2')
  let city = document.getElementById('city')
  let state = document.getElementById('state')
  let zip = document.getElementById('zip')
  let phone = document.getElementById('phone')
  let email = document.getElementById('email')
  let creditcard = document.getElementById('cc')
  let cvc = document.getElementById('cvc')
  let username = document.getElementById('username')
  let password = document.getElementById('password')

  //contact form event listeners
  name.addEventListener('blur', checkName)
  address.addEventListener('blur', checkAddress)
  address2.addEventListener('blur', checkAddress2)
  city.addEventListener('blur', checkCity)
  state.addEventListener('blur', checkState)
  zip.addEventListener('blur', checkZip)
  phone.addEventListener('blur', checkPhone)
  email.addEventListener('blur', checkEmail)
  creditcard.addEventListener('blur', checkCC)
  cvc.addEventListener('blur', checkCVC)
  username.addEventListener('blur', checkUsername)
  password.addEventListener('blur', checkPassword)
}

function checkName() {
  let string = this.value
  let regex = /^[\S][a-zA-Z\s]+$/
  if (string.length === 0) {
    nameError.innerHTML = '<p class = "text-danger">* This field is required. Please enter your name.</p>'
    contact.name.focus()
  } else if (string.match(regex)) {
    contact.address.focus()
    nameError.innerHTML = ''
  } else {
    nameError.innerHTML = '<p class = "text-danger">* Name invalid. Your name must include only letters and spaces, and it must start with a letter.</p>'
    contact.name.focus()
  }
}

function checkAddress2() {
  let string = this.value
  let regex = / /
}

function checkAddress() {
  let string = this.value
  let regex = / /
}

function checkCity() {
  let string = this.value
  let regex = / /
}

function checkState() {
  let string = this.value
  let regex = / /
}

function checkZip() {
  let string = this.value
  let regex = / /
}

function checkPhone() {
  let string = this.value
  let regex = / /
}

function checkEmail() {
  let string = this.value
  let regex = / /
}

function checkCC() {
  let string = this.value
  let regex = / /
}

function checkCVC() {
  let string = this.value
  let regex = / /
}


// USERNAMES
// 1) The only numbers in the username have to be at the end.
// 2) There can be zero or more numbers at the end.
// 2) Username letters can be lowercase and uppercase.
// 3) Usernames have to be at least two characters long.
// 4) A two-letter username can only use alphabet letter characters.
function checkUsername() {
  let string = this.value
  let regex = / /
}

// PASSWORDS
// 1) Passwords must be at least 6 characters
// 2) Passwords must not be the same as the username
// 3) Passwords must include at least one capital letter
// 4) Passwords must include at least one lower case letter
// 5) Passwords must include at least one of these characters: !@#$%^&*()+
// 6) Passwords cannot include spaces
// 7) No characters/letters/numbers may appear more than two times in a row
function checkPassword() {
  let string = this.value
  let regex = / /
}


