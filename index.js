const backdrop = document.querySelector(".js-backdrop");
const btnModalClose = document.querySelector(".js-modal-close");
const btnModalOpen = document.querySelector(".js-modal-open");



btnModalOpen.addEventListener('click', onModalOpen);
btnModalClose.addEventListener('click',onModalClose)

function onModalOpen(e) {
    backdrop.classList.add('is-open');
    // window.addEventListener("keydown", onEscapeClick);
    //  window.addEventListener("click", onBackdropClick);
}

function onModalClose(e) {
    backdrop.classList.remove("is-open");   
//     window.removeEventListener("keydown", onEscapeClick);
//   window.removeEventListener('click', onBackdropClick);
}

// function onBackdropClick(e) {
//     if (e.target !== backdrop) {
//         return;
//     } 
    
//     onModalClose();
// }





// const STORAGE_KEY = "data";
// const email = document.querySelector('[name="email]');
// const password = document.querySelector('[name="password]');
// const form = document.querySelector(".login-form");

// let formData = {} || JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));




// form.addEventListener('input', onBtnInput);
// form.addEventListener('submit', onFormSubmit);


// savedData();



// function onBtnInput(e) {
//     formData[e.target.name] = e.target.value;
//     localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(formData));
// }

// function onFormSubmit(e) {
//   e.preventDefault();
//   if (email.value === "" || password.value === "") {
//     return alert("FILL IN ALL IN THE FIELDS");
//   }
//   localStorage.removeItem(formData);
//   console.log(formData);
//   e.currentTarget.reset();
//   formData = {};
// }

// function savedData() {
//     const savedInfo = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
//     if (savedInfo) {
//       email.value = savedInfo.email || "";
//       password.value = savedInfo.password || "";
//     }
// }

const form = document.querySelector(".js-modal__form");
const email = document.querySelector('[name="email"]');
const message = document.querySelector('[name="message"]');
const STORAGE_KEY = "feedback-form-state";
let formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

form.addEventListener("input", onFormInput);
form.addEventListener("submit", onFormSubmit);

poppulateData();

function onFormInput(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(event) {
  event.preventDefault();
  if (email.value === "" || message.value === "") {
    return alert("Please fill in all fields");
  }
  localStorage.removeItem(STORAGE_KEY);
  console.log(formData);
  event.currentTarget.reset();
    formData = {};
    onModalClose();
    
}

function poppulateData() {
  const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (savedData) {
    email.value = savedData.email || "";
    message.value = savedData.message || "";
  }
}

function onEscapeClick(e) {
    if (e.code !== 'Escape') {
        return;
    }
    onModalClose();
}




