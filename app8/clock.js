const clock = document.querySelector("h2#clock")

// function sayHello() {
//     console.log("hello");
// }

// setInterval(sayHello, 5000);
// // 설정해준 시간 간격으로 반복
// setTimeout(sayHello, 5000);
// // 설정해준 시간 뒤 실행


function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;

}
getClock();
setInterval(getClock, 1000);
