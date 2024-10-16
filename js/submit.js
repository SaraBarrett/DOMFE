let myForm = document.querySelector("form");

myForm.addEventListener("submit", function (event) {
  event.preventDefault();

  let myInput = document.querySelector("#myInput");
  console.log(myInput.value);
});
