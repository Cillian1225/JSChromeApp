const images = ["1.jpg", "3.jpg", "6.jpg", "5.jpg"];
const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;
console.log(bgImage);
document.body.appendChild(bgImage);
