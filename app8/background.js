const images = [
    "0.jpeg",
    "1.jpeg"
];

const chosenImage = images[Math.floor(Math.random()*images.length)];

const bgImage = document.createElement("img");
bgImage.className = "background";

bgImage.src=`image/${chosenImage}`;

document.body.appendChild(bgImage);
// prepend를 사용하면 맨 앞에 추가한다.