const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");
const loginButton = document.querySelector(".loginbutton");
const registerButton = document.querySelector(".registerbutton");
var username_val=document.getElementById("userinput");
var userpw_val=document.getElementById("userpassword");
var userName=document.getElementById("userName");
var userEmail=document.getElementById("userEmail");
var userpw=document.getElementById("userpw");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});
sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

loginButton.addEventListener("click", () => {
  if(username_val.value!="" && userpw_val.value!="")
  {
    localStorage.setItem("isSignedIn", true);
    alert("Logged In Successfully");
  }
});

registerButton.addEventListener("click", () => {
  if(userName.value!="" && userEmail.value!="" && userEmail.value.includes("@gmail.com") && userpw.value!="")
  {
    localStorage.setItem("isSignedIn", true);
    alert("Registered and Logged In  Successfully");
  }
});

