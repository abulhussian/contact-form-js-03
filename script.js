"use strict";
const fname = document.querySelector(".fname");
console.log(fname);
const lname = document.querySelector(".lname");
const email = document.querySelector(".email");

const msgBox = document.querySelector("#textarea");

const submit = document.querySelector(".submit-btn");
const form = document.querySelector("form");

const errorMsgfname = document.querySelector(".error-msg-fname");
console.log(errorMsgfname);
const errorMsglname = document.querySelector(".error-msg-lname");
const errorMsgemail = document.querySelector(".error-msg-email");
const errorMsgquery = document.querySelector(".error-msg-query");
const errorMsgbox = document.querySelector(".msg-error");
const errorMsgConsent = document.querySelector(".error-msg-consent");

submit.addEventListener("click", function (e) {
  e.preventDefault();
  const radio1 = document.querySelector("#radio-btn-1").checked;
  const radio2 = document.querySelector("#radio-btn-2").checked;
  const checkBox = document.querySelector(".checkbox").checked;
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  console.log(radio1, radio2);

  //   fname

  let valid = true;

  if (fname.value === "") {
    fname.classList.add("active");
    errorMsgfname.classList.remove("hidden");
    valid = false;
  } else {
    fname.classList.remove("active");
    errorMsgfname.classList.add("hidden");
  }

  //   lname
  if (lname.value === "") {
    lname.classList.add("active");
    errorMsglname.classList.remove("hidden");
    valid = false;
  } else {
    lname.classList.remove("active");
    errorMsglname.classList.add("hidden");
  }

  //   email

  if (!emailPattern.test(email.value)) {
    email.classList.add("active");
    errorMsgemail.classList.remove("hidden");
    valid = false;
  } else {
    email.classList.remove("active");
    errorMsgemail.classList.add("hidden");
  }

  //   query
  if (!radio1 && !radio2) {
    errorMsgquery.classList.remove("hidden");
    valid = false;
  } else {
    errorMsgquery.classList.add("hidden");
  }

  //   message

  if (msgBox.value === "") {
    msgBox.classList.add("active");
    errorMsgbox.classList.remove("hidden");
    valid = false;
  } else {
    msgBox.classList.remove("active");
    errorMsgbox.classList.add("hidden");
  }

  //check box
  if (!checkBox) {
    // checkBox.classList.add("active");
    errorMsgConsent.classList.remove("hidden");
    valid = false;
  } else {
    // fname.classList.remove("active");
    errorMsgConsent.classList.add("hidden");
  }

  //   if (
  //     fname.value !== "" &&
  //     lname.value !== "" &&
  //     email.value !== "" &&
  //     radio1 &&
  //     radio2 &&
  //     msgBox !== ""
  //   )
  if (valid === true) {
    e.preventDefault();
    alert(`
            First Name :${fname.value}
            Last Name : ${lname.value}
            Email : ${email.value}
            message:${msgBox.value}`);
    window.location.reload();
  }
});
