const reg = document.getElementById("register");

reg.addEventListener("submit", (e) => {
  e.preventDefault();
  if (validate()) {
    console.log("Form submitted");
    reg.submit();
  }
});

function validate() {
  const mono = document.getElementById("mobile-number");

  if (isNaN(mono.value) || mono.value.length !== 10) {
    alert("Mobile number is invalid");
    return false;
  }
  return true;
}
