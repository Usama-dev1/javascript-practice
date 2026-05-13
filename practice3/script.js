// DOM elements
const getFirstName = document.querySelector("#firstname");
const getLastName = document.querySelector("#lastname");
const getPhoneNum = document.querySelector("#phone");
const getEmail = document.querySelector("#email");
const submitBtn = document.querySelector("#submit");
const modal = document.querySelector("#overlay");
const modalText = document.querySelector(".form-value");
const closeBtn = document.querySelector("#closeOverlay");

function removeSpaceLowerCase(str) {
  return str.trim().toLowerCase();
}

function showModal(firstName, lastName, phoneNum, email) {
  if (!firstName || !lastName || !phoneNum || !email) {
    modalText.innerText = "Please Enter all Fields";
  } else {
    modalText.innerText = `${firstName}, ${lastName}, ${phoneNum}, ${email}`;
  }
  modal.classList.remove("hidden");
}

function closeModal() {
  modal.classList.add("hidden");
}

function SubmitForm(e) {
  e.preventDefault();
  const firstName = removeSpaceLowerCase(getFirstName.value);
  const lastName = removeSpaceLowerCase(getLastName.value);
  const phoneNum = removeSpaceLowerCase(getPhoneNum.value);
  const email = removeSpaceLowerCase(getEmail.value);
  showModal(firstName, lastName, phoneNum, email);
}

submitBtn.addEventListener("click", SubmitForm);
closeBtn.addEventListener("click", closeModal);
