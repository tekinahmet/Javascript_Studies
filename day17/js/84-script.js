document.querySelector("#formLogin").addEventListener("submit", (e) => {
  e.preventDefault();
  let emailInp = document.querySelector("#email");
  let passwordInp = document.querySelector("#password");
});
const isValidEmail = (mail) => {
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return regexEmail.test(mail);
};
const isValidPassword = (sifre) => {
  let passwordRegex =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
  return passwordRegex.test(sifre);
};
