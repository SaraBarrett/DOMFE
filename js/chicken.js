// myImage.src = "https://devsprouthosting.com/images/chicken.jpg";

function changeImg() {
  let myImage = document.querySelector("img");

  if (myImage.src == "https://devsprouthosting.com/images/chicken.jpg") {

    myImage.src = "https://devsprouthosting.com/images/egg.jpg";

  } else {

    myImage.setAttribute(
      "src",
      "https://devsprouthosting.com/images/chicken.jpg"
    );
    
  }
}
