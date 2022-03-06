const secondHand = document.querySelector('.second');
const hourHand = document.querySelector('.hour');
const minuteHand = document.querySelector('.minute');

function time() {
    const date = new Date();
    const second = date.getSeconds();
    const minute = date.getMinutes();
    const hour = date.getHours();
    
    const secondDegree = ((second / 60) * 360);
    const hourDegree = ((hour / 12) * 360);
    const minuteDegree = ((minute / 60) * 360);
    secondHand.style.transform = `rotate(${secondDegree}deg)`;
    hourHand.style.transform = `rotate(${hourDegree}deg)`;
    minuteHand.style.transform = `rotate(${minuteDegree}deg)`;

}


setInterval(time,1000)