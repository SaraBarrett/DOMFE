const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

let allLetters = document.querySelectorAll("span");

let i = 0;
for (element of allLetters) {
  element.style.color = colors[i++];
}
