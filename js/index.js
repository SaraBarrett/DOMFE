// let myBanner = document.getElementById("banner");
// console.log(myBanner);

// let myH1 = document.querySelector("h1");
// myH1.classList.add("mySuperClass");

// console.log(myH1.classList.contains("mySuperClass"));
// console.log(myH1);

//selecionar um elemento para manipular o seu texto
// let myH2 = document.getElementById("History");
// myH2.innerHTML = "<b>História</b>";
// myH2.style.backgroundColor = "green";

// let myImage = document.querySelector("#banner");
// myImage.src = "../images/lucas-calloch-P-yzuyWFEIk-unsplash.jpg";
// let myPs = document.querySelectorAll("p");
// for (element of myPs) {
//   element.style.backgroundColor = "blue";
// }

// let myImage = document.createElement("img");
// myImage.src = "../images/lucas-calloch-P-yzuyWFEIk-unsplash.jpg";

// let myProduct = document.createElement("div");
// myProduct.innerText = "produto para maiores de 18";

// document.body.appendChild(myImage);

function hello() {
  alert("olá turma, está tempo de estar em casa!");
}
function hello2() {
  alert("Estamos quase em React");
}

function tellMeWhat() {
  console.log(this);
}

let myButton = document.querySelector("#unique-id");

// myButton.addEventListener("click", hello, { once: true });
// myButton.addEventListener("click", hello2);

let myImg = document.getElementById("banner");
myImg.addEventListener('click', tellMeWhat);
myButton.addEventListener("click", tellMeWhat);
